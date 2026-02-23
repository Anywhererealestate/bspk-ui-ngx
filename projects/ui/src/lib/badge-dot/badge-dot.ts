import { Component, ViewEncapsulation, input } from '@angular/core';
import { AsSignal } from '../../types/common';

export type BadgeDotSize = 6 | 8 | 10 | 12;

const OUTLINE_WIDTHS: Record<BadgeDotSize, number> = {
    6: 1,
    8: 2,
    10: 2,
    12: 2,
};

export interface BadgeDotProps {
    /**
     * The color variant of the badge-dot.
     *
     * @default primary
     */
    color?: 'primary' | 'secondary';
    /**
     * The size of the badge-dot.
     *
     * @default 6
     */
    size?: BadgeDotSize;
    /**
     * Whether the badge-dot should have an outline.
     *
     * @default false
     */
    outline?: boolean;
}

/**
 * A non-numeric badge used to indicate something new or its current status.
 *
 * ```html
 * <ui-badge-dot color="primary" [size]="8" [outline]="true">
 *   <button>Messages</button>
 * </ui-badge-dot>
 * ```
 *
 * @name BadgeDot
 * @phase Dev
 */
@Component({
    selector: 'ui-badge-dot',
    standalone: true,
    template: `
        <span data-attachment-wrapper [style.--size]="sizePx()" [style.--outline-width]="outlineWidthPx()">
            <ng-content></ng-content>
            <sup
                data-attachment
                data-bspk="badge-dot"
                [attr.data-color]="color()"
                [attr.data-outline]="outline() ? true : undefined"
                [style.--size]="sizePx()"
                [style.--outline-width]="outlineWidthPx()">
            </sup>
        </span>
    `,
    styleUrl: './badge-dot.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UIBadgeDot implements AsSignal<BadgeDotProps> {
    readonly color = input<BadgeDotProps['color']>('primary');
    readonly size = input<BadgeDotProps['size']>(6);
    readonly outline = input<BadgeDotProps['outline']>(false);

    sizePx(): string {
        const s = this.size();
        const n = typeof s === 'number' && s in OUTLINE_WIDTHS ? s : 6;
        return `${n}px`;
    }

    outlineWidthPx(): string {
        const s = this.size();
        const n = typeof s === 'number' && s in OUTLINE_WIDTHS ? s : 6;
        return `${OUTLINE_WIDTHS[n as BadgeDotSize]}px`;
    }
}
