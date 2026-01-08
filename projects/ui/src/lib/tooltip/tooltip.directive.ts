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
import { Placement } from '@floating-ui/dom';
import { randomString } from '../../utils';
import { FloatingUtility } from '../../utils/floating';

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
        '(mouseenter)': 'handleOpenEvent($event)',
        '(mouseleave)': 'handleCloseEvent()',
        '(focusin)': 'handleOpenEvent($event)',
        '(blur)': 'handleCloseEvent()',
    },
})
export class UITooltipDirective implements OnDestroy, OnInit {
    readonly value = model<TooltipProps | string | { truncated: true } | undefined>(undefined, {
        alias: 'ui-tooltip',
    });

    readonly tooltipId = model<string | undefined>(undefined);

    readonly props = computed((): TooltipProps | undefined => {
        const value = this.value();

        if (!value) return undefined;

        let next: TooltipProps = {
            // Defaults
            placement: this.computedPlacement || 'top',
            showTail: true,
            disabled: false,
        };

        if (typeof value === 'string') {
            next = { ...next, label: value };
        } else {
            next = { ...next, ...value };

            if ('truncated' in value && value.truncated) {
                this.renderer.setAttribute(this.referenceEl, 'data-truncated', 'true');
                next.label = this.referenceEl?.textContent || '';
                next.disabled = this.referenceEl?.scrollWidth <= this.referenceEl?.clientWidth;
            }
        }

        return {
            // Defaults
            placement: this.computedPlacement || 'top',
            showTail: true,
            disabled: false,
            ...next,
        };
    });

    host = inject<ElementRef<HTMLElement>>(ElementRef);
    renderer = inject(Renderer2);
    env = inject(EnvironmentInjector);
    document = inject<Document>(DOCUMENT);

    floating = new FloatingUtility(this.renderer);

    private computedPlacement: TooltipPlacement = 'top';
    private tooltipComponent?: ComponentRef<UITooltip> | null;
    private tooltipEl?: HTMLElement | null;

    constructor() {
        effect(() => {
            this.updateTooltipProps(this.props() || {});
        });
    }

    get referenceEl() {
        let el = this.host.nativeElement;
        if (!el?.checkVisibility?.()) el = (el?.firstElementChild as HTMLElement) || null;
        return el;
    }

    updateTooltipProps(props: TooltipProps) {
        if (!this.tooltipComponent) return;
        this.tooltipComponent.instance.props.set(props);
        this.tooltipComponent.changeDetectorRef.detectChanges();
    }

    handleOpenEvent(event: Event) {
        if (!this.tooltipEl || event.target !== this.referenceEl) return;

        this.renderer.setStyle(this.tooltipEl, 'display', 'block');

        this.floating.compute().then(({ placement }) => {
            this.computedPlacement = placement as TooltipPlacement;
            if (this.tooltipEl && placement !== this.props()?.placement)
                this.updateTooltipProps({ ...this.props(), placement: placement as TooltipPlacement });
        });
    }

    handleCloseEvent() {
        if (this.tooltipEl) this.renderer.setStyle(this.tooltipEl, 'display', 'none');
    }

    ngOnDestroy(): void {
        this.handleCloseEvent();
        if (this.referenceEl) this.renderer.removeAttribute(this.referenceEl, 'aria-labelledby');

        if (this.tooltipEl) this.renderer.removeChild(this.tooltipEl.parentNode, this.tooltipEl);

        if (this.tooltipComponent) this.tooltipComponent.destroy();
        this.tooltipComponent = null;
    }

    ngOnInit(): void {
        const tooltipId = this.tooltipId() || `tooltip-${randomString()}`;
        this.tooltipId.set(tooltipId);

        const props = this.props();

        if (
            // if we can't render or already rendered or disabled or no label we can't show
            !this.document ||
            !this.referenceEl ||
            props?.disabled ||
            !props?.label
        ) {
            return;
        }

        // Link host and tooltip for a11y
        this.renderer.setAttribute(this.referenceEl, 'aria-labelledby', tooltipId);
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
        const arrowEl = this.tooltipComponent.instance.arrowElement;

        this.floating.init({
            placement: props.placement,
            reference: this.referenceEl,
            floating: this.tooltipEl,
            arrow: arrowEl,
            offsetOptions: arrowEl ? 8 : 4,
            refWidth: false,
        });
    }
}

/** Single use component to display tooltip content. */
@Component({
    selector: 'ui-tooltip',
    standalone: true,
    template: `
        <span data-text>{{ props().label }}</span>
        @if (props().showTail) {
            <span aria-hidden="true" data-arrow #arrow></span>
        }
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
    readonly arrow = viewChild<ElementRef>('arrow');

    /** Tooltip id for a11y labelling */
    readonly id = signal<string | undefined>(undefined);

    readonly props = model<TooltipProps>({
        label: '',
        placement: 'top',
        showTail: true,
        disabled: false,
    });

    get arrowElement(): HTMLElement | null {
        return this.arrow()?.nativeElement || null;
    }
}
