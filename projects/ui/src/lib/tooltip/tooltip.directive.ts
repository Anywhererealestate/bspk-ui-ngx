import { DOCUMENT } from '@angular/common';
import {
    Component,
    ComponentRef,
    Directive,
    ElementRef,
    EnvironmentInjector,
    OnDestroy,
    OnInit,
    Renderer2,
    ViewEncapsulation,
    computed,
    createComponent,
    effect,
    inject,
    model,
    signal,
    viewChild,
} from '@angular/core';
import { computePosition, offset, flip, shift, arrow, Placement } from '@floating-ui/dom';
import { randomString } from '../../utils';

export type TooltipPlacement = Extract<Placement, 'bottom' | 'left' | 'right' | 'top'>;

export interface TooltipProps {
    /** The tooltip content. */
    label?: string;

    /**
     * The placement of the tooltip.
     *
     * @default top
     */
    placement?: TooltipPlacement;

    /**
     * Whether to visually show the arrow (tail).
     *
     * @default true
     */
    showTail?: boolean;

    /**
     * Determines if the tooltip is disabled.
     *
     * @default false
     */
    disabled?: boolean;
}

/**
 * Brief message that provide additional guidance and helps users perform an action if needed.
 *
 * @example
 *     <span [ui-tooltip]="{
 *     label: 'I explain what this button does',
 *     placement: 'top',
 *     }">Hover me</span>
 *
 * @name Tooltip
 * @phase Dev
 */
@Directive({
    selector: '[ui-tooltip]',
    standalone: true,
    host: {
        '(mouseenter)': 'mounted && handleOpenEvent($event)',
        '(mouseleave)': 'mounted && handleCloseEvent($event)',
        '(focusin)': 'mounted && handleOpenEvent($event)',
        '(blur)': 'mounted && handleCloseEvent($event)',
    },
})
export class UITooltipDirective implements OnDestroy, OnInit {
    value = model<TooltipProps | string | undefined>(undefined, {
        alias: 'ui-tooltip',
    });

    tooltipId = model<string | undefined>(undefined);

    props = computed((): TooltipProps | undefined => {
        if (!this.value()) return undefined;

        const next =
            typeof this.value() === 'object'
                ? (this.value() as TooltipProps)
                : {
                      label: this.value() as string,
                  };

        return {
            // Defaults
            placement: 'top',
            showTail: true,
            disabled: false,
            ...next,
        };
    });

    host = inject(ElementRef<HTMLElement>);
    renderer = inject(Renderer2);
    env = inject(EnvironmentInjector);
    document = inject(DOCUMENT);

    private tooltipComponent?: ComponentRef<UITooltip> | null;
    private referenceEl?: HTMLElement | null;
    private tooltipEl?: HTMLElement | null;

    constructor() {
        effect(() => {
            this.updateTooltipProps(this.props() || {});
            this.position(this.props());
        });
    }

    get mounted() {
        return !!this.tooltipComponent;
    }

    updateTooltipProps(props: TooltipProps) {
        if (!this.tooltipComponent) return;
        this.tooltipComponent.instance.props.set(props);
        this.tooltipComponent.changeDetectorRef.detectChanges();
    }

    handleOpenEvent(event: Event) {
        if (!this.tooltipEl || event.target !== this.referenceEl) return;

        this.renderer.setStyle(this.tooltipEl, 'display', 'block');

        this.position(this.props());
    }

    handleCloseEvent(force: true): void;
    handleCloseEvent(event: Event): void;
    handleCloseEvent(event: Event | true) {
        if (!this.tooltipEl || (event !== true && event.target !== this.referenceEl)) return;

        if (this.tooltipEl) this.renderer.setStyle(this.tooltipEl, 'display', 'none');
    }

    ngOnDestroy(): void {
        this.handleCloseEvent(true);
        this.renderer.removeAttribute(this.referenceEl, 'aria-labelledby');
        this.tooltipEl?.remove();
        this.tooltipComponent?.destroy();
        this.tooltipComponent = null;
    }

    ngOnInit(): void {
        this.tooltipId.set(this.tooltipId() || `tooltip-${randomString()}`);

        const tooltipId = this.tooltipId()!;

        const props = this.props();

        let referenceElement = this.host.nativeElement;

        if (!referenceElement?.checkVisibility?.())
            referenceElement = (referenceElement?.firstElementChild as HTMLElement) || null;

        this.referenceEl = referenceElement;

        if (
            // if we can't render or already rendered or disabled or no label we can't show
            !this.document ||
            !this.referenceEl ||
            !props ||
            props.disabled ||
            !props.label
        ) {
            return;
        }

        // Link host and tooltip for a11y
        this.renderer.setAttribute(referenceElement, 'aria-labelledby', tooltipId);
        const hostEl = this.document.createElement('ui-tooltip');
        this.document.body.appendChild(hostEl);

        this.tooltipComponent = createComponent(UITooltip, {
            environmentInjector: this.env,
            hostElement: hostEl,
        });

        this.tooltipEl = this.tooltipComponent.location.nativeElement as HTMLElement;
        this.renderer.setStyle(this.tooltipEl, 'display', 'none');
        this.tooltipComponent.instance.id.set(tooltipId);
        this.updateTooltipProps(props);
    }

    private async position(props: TooltipProps | undefined) {
        if (!this.tooltipComponent || !this.referenceEl || !props) return;
        const floatingEl = this.tooltipComponent.location.nativeElement as HTMLElement;
        const referenceEl = this.referenceEl;
        const arrowEl = this.tooltipComponent.instance.arrowElement;

        if (!arrowEl) return;

        const { x, y, placement, middlewareData } = await computePosition(referenceEl, floatingEl, {
            placement: props.placement,
            strategy: 'fixed',
            middleware: [
                offset(props.showTail !== false ? 8 : 4),
                flip(),
                shift({ padding: 8 }),
                arrow({ element: arrowEl }),
            ],
        });

        Object.assign(floatingEl.style, {
            left: `${x}px`,
            top: `${y}px`,
            position: 'fixed',
        });

        this.tooltipComponent.instance.props.set({
            ...props,
            placement: placement as TooltipPlacement,
        });
        this.tooltipComponent.changeDetectorRef.detectChanges();

        const { x: ax, y: ay } = middlewareData.arrow || { x: null, y: null };
        if (ax != null) arrowEl.style.left = `${ax}px`;
        if (ay != null) arrowEl.style.top = `${ay}px`;

        // Toggle tail visibility
        arrowEl.style.opacity = props.showTail !== false ? '1' : '0';
    }
}

/** Single use component to display tooltip content. */
@Component({
    selector: 'ui-tooltip',
    standalone: true,
    template: `
        <span data-text>{{ props().label }}</span>
        <span aria-hidden="true" data-arrow #arrow></span>
    `,
    styleUrl: './tooltip.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        'data-bspk': 'tooltip',
        role: 'tooltip',
        '[attr.data-placement]': 'props().placement',
        '[attr.id]': 'id() || null',
    },
})
class UITooltip {
    arrow = viewChild.required<ElementRef>('arrow');

    /** Tooltip id for a11y labelling */
    id = signal<string | undefined>(undefined);

    props = model<TooltipProps>({
        label: '',
        placement: 'top',
        showTail: true,
        disabled: false,
    });

    get arrowElement(): HTMLElement | null {
        return this.arrow()?.nativeElement || null;
    }
}
