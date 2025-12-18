import { DOCUMENT } from '@angular/common';
import {
    Component,
    ComponentRef,
    Directive,
    ElementRef,
    EnvironmentInjector,
    HostListener,
    Inject,
    OnDestroy,
    Renderer2,
    ViewChild,
    ViewEncapsulation,
    createComponent,
    input,
    model,
} from '@angular/core';
import { computePosition, offset, flip, shift, arrow, Placement } from '@floating-ui/dom';
import { AsSignal } from '../../types/utils';
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

export type TooltipConfig = TooltipProps | string | undefined;

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
@Directive({ selector: '[ui-tooltip]', standalone: true })
export class UITooltipDirective implements OnDestroy {
    value = model<TooltipConfig>(undefined, {
        alias: 'ui-tooltip',
    });

    id = input<string>(`ui-tooltip-${randomString(6)}`);

    private tooltipRef?: ComponentRef<UITooltip> | null;

    constructor(
        private host: ElementRef<HTMLElement>,
        private renderer: Renderer2,
        private env: EnvironmentInjector,
        @Inject(DOCUMENT) private document: Document,
    ) {}

    get props(): TooltipProps | undefined {
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
    }

    get referenceElement(): HTMLElement | null {
        const el = this.host.nativeElement;
        return el?.checkVisibility?.() ? el : (el.firstElementChild as HTMLElement) || null;
    }

    @HostListener('mouseenter')
    @HostListener('focusin')
    onShow() {
        this.show();
    }

    @HostListener('mouseleave')
    @HostListener('blur')
    onHide() {
        this.hide();
    }

    ngOnDestroy(): void {
        this.hide(true);
    }

    private show() {
        const props = this.props;

        if (!props || props.disabled || !props.label || !this.referenceElement) return;

        const tip = this.ensureTooltip(props);

        if (!tip || !this.tooltipRef) return;

        // Link host and tooltip for a11y
        this.renderer.setAttribute(this.referenceElement, 'aria-labelledby', this.id());

        Object.entries(props).forEach(([key, value]) => {
            this.tooltipRef!.setInput(key, value);
        });
        this.tooltipRef.changeDetectorRef.detectChanges();

        // Make visible
        this.renderer.setStyle(tip, 'display', 'block');
        this.position(props);
    }

    private ensureTooltip(props: TooltipProps): HTMLElement | null {
        if (!this.document || !this.host?.nativeElement) return null;
        if (this.tooltipRef) return this.tooltipRef.location.nativeElement as HTMLElement;

        const hostEl = this.document.createElement('ui-tooltip');
        this.document.body.appendChild(hostEl);

        this.tooltipRef = createComponent(UITooltip, {
            environmentInjector: this.env,
            hostElement: hostEl,
        });

        Object.entries(props).forEach(([key, value]) => {
            this.tooltipRef!.setInput(key, value);
        });
        this.tooltipRef!.setInput('id', this.id());

        this.tooltipRef.changeDetectorRef.detectChanges();

        return this.tooltipRef.location.nativeElement as HTMLElement;
    }

    private async position(props: TooltipProps) {
        if (!this.tooltipRef || !this.referenceElement) return;
        const reference = this.referenceElement;
        const floating = this.tooltipRef.location.nativeElement as HTMLElement;
        const arrowEl = this.tooltipRef.instance.getArrowEl();
        if (!arrowEl) return;

        const { x, y, placement, middlewareData } = await computePosition(reference, floating, {
            placement: props.placement,
            strategy: 'fixed',
            middleware: [
                offset(props.showTail !== false ? 8 : 4),
                flip(),
                shift({ padding: 8 }),
                arrow({ element: arrowEl }),
            ],
        });

        Object.assign(floating.style, {
            left: `${x}px`,
            top: `${y}px`,
            position: 'fixed',
        });

        this.tooltipRef.setInput('placement', placement as any);
        this.tooltipRef.changeDetectorRef.detectChanges();

        const { x: ax, y: ay } = middlewareData.arrow || { x: null, y: null };
        if (ax != null) arrowEl.style.left = `${ax}px`;
        if (ay != null) arrowEl.style.top = `${ay}px`;

        // Toggle tail visibility
        arrowEl.style.opacity = props.showTail !== false ? '1' : '0';
    }

    private hide(force = false) {
        if (!this.referenceElement) return;

        this.renderer.removeAttribute(this.referenceElement, 'aria-labelledby');
        const tipEl = this.tooltipRef?.location.nativeElement as HTMLElement | undefined;
        if (!tipEl) return;
        if (force && this.tooltipRef) {
            const host = this.tooltipRef.location.nativeElement as HTMLElement;
            host.remove();
            this.tooltipRef.destroy();
            this.tooltipRef = null;
        } else {
            this.renderer.setStyle(tipEl, 'display', 'none');
        }
    }
}

/** Single use component to display tooltip content. */
@Component({
    selector: 'ui-tooltip',
    standalone: true,
    template: `
        <span data-text>{{ label() }}</span>
        <span aria-hidden="true" data-arrow #arrow></span>
    `,
    styleUrl: './tooltip.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        'data-bspk': 'tooltip',
        role: 'tooltip',
        '[attr.data-placement]': 'placement()',
        '[attr.id]': 'id() || null',
    },
})
class UITooltip implements AsSignal<TooltipProps> {
    @ViewChild('arrow', { read: ElementRef }) arrow?: ElementRef<HTMLElement>;

    /** The tooltip content. */
    label = input<string | undefined>('');

    /**
     * The placement of the tooltip.
     *
     * @default top
     */
    placement = input<TooltipPlacement | undefined>('top');

    /**
     * Whether to visually show the arrow (tail).
     *
     * @default true
     */
    showTail = input<boolean | undefined>(true);

    /**
     * Determines if the tooltip is disabled.
     *
     * @default false
     */
    disabled = input<boolean | undefined>(false);

    /** Tooltip id for a11y labelling */
    id = input<string>(randomString());

    getArrowEl(): HTMLElement | null {
        return this.arrow?.nativeElement ?? null;
    }
}
