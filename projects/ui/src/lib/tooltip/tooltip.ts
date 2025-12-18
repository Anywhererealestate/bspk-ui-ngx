import { Component, ElementRef, ViewChild, ViewEncapsulation, input } from '@angular/core';
import { Placement } from '@floating-ui/dom';
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

@Component({
    template: '',
})
export class UITooltipProps implements AsSignal<TooltipProps> {
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
}

/**
 * Brief message that provide additional guidance and helps users perform an action if needed.
 *
 * @example
 *     <ui-tooltip id="tip1" [label]="'Help text'" placement="top"></ui-tooltip>
 *
 * @name Tooltip
 * @phase Stable
 */
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
export class UITooltip extends UITooltipProps {
    @ViewChild('arrow', { read: ElementRef }) arrow?: ElementRef<HTMLElement>;

    /** Tooltip id for a11y labelling */
    id = input<string>(randomString());

    getArrowEl(): HTMLElement | null {
        return this.arrow?.nativeElement ?? null;
    }
}
