import { Component, ViewEncapsulation, input, computed, model } from '@angular/core';
import { AsSignal } from '../../types/common';
import { IconStarFill } from '../icons/star-fill';

export type RatingSize = 'large' | 'medium' | 'small';

export interface RatingProps {
    /**
     * The value of the rating between 0 and 5.
     *
     * @default 0
     */
    value?: number;
    /**
     * When true, the rating is interactive (buttons). When false, display only.
     *
     * @default true
     */
    interactive?: boolean;
    /**
     * The size of the rating.
     *
     * @default medium
     */
    size?: RatingSize;
}

const MAX_STARS = 5;

function getFill(num: number, value?: number): 'full' | 'half' | undefined {
    if (value === undefined) return undefined;
    if (value >= num) return 'full';
    if (value >= num - 0.5) return 'half';
    return undefined;
}

/**
 * Descriptive and interactive controls that allow customers to indicate their feelings about an experience or product.
 *
 * ```html
 * <ui-rating [(value)]="value" size="medium" [interactive]="true" />
 * <ui-rating [value]="4.5" [interactive]="false" />
 * ```
 *
 * @name Rating
 * @phase Dev
 */
@Component({
    selector: 'ui-rating',
    standalone: true,
    imports: [IconStarFill],
    template: `
        <div
            [attr.aria-label]="ariaLabel()"
            data-bspk="rating"
            [attr.data-size]="size()"
            [attr.role]="isInteractive() ? 'radiogroup' : 'img'">
            @for (i of indices(); track i) {
                @if (isInteractive()) {
                    <button
                        type="button"
                        [attr.aria-checked]="isSelected(i)"
                        [attr.aria-label]="'Rate ' + (i + 1)"
                        [attr.data-fill]="getFill(i + 1)"
                        data-star
                        role="radio"
                        [attr.tabindex]="isSelected(i) ? 0 : -1"
                        (click)="value.set(i + 1)">
                        <icon-star-fill></icon-star-fill>
                        @if (getFill(i + 1) === 'half') {
                            <div data-fill-half>
                                <div data-star>
                                    <icon-star-fill></icon-star-fill>
                                </div>
                            </div>
                        }
                    </button>
                } @else {
                    <div [attr.data-fill]="getFill(i + 1)" data-star role="presentation" tabindex="-1">
                        <icon-star-fill></icon-star-fill>
                        @if (getFill(i + 1) === 'half') {
                            <div data-fill-half>
                                <div data-star>
                                    <icon-star-fill></icon-star-fill>
                                </div>
                            </div>
                        }
                    </div>
                }
            }
        </div>
    `,
    styleUrl: './rating.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UIRating implements AsSignal<RatingProps> {
    readonly value = model<number>(0);

    readonly size = input<RatingSize>('medium');
    readonly interactive = input<boolean>(true);

    readonly indices = computed(() => Array.from({ length: MAX_STARS }, (_, i) => i));
    readonly isInteractive = computed(() => this.interactive());

    readonly ariaLabel = computed(() => {
        const v = this.value();
        return v ? `${v} out of ${MAX_STARS} stars` : this.isInteractive() ? 'Select a star rating' : 'Rating';
    });

    getFill(num: number): 'full' | 'half' | undefined {
        return getFill(num, this.value());
    }

    isSelected(index: number): boolean {
        const v = this.value();
        return v !== undefined && Math.floor(v) === index;
    }
}
