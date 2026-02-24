import { Component, ViewEncapsulation, input, model } from '@angular/core';
import { AsSignal } from '../../types/common';

export type SkeletonVariant = 'circular' | 'photo' | 'profile' | 'rectangular' | 'thumbnail';

export interface SkeletonProps {
    /**
     * The variant of the skeleton that best hints the content being loaded.
     *
     * @default rectangular
     */
    variant?: SkeletonVariant;
    /**
     * The width of the skeleton. Ignored when variant is 'profile' or 'thumbnail'.
     *
     * @default 200
     */
    width?: number | string;
    /**
     * The height of the skeleton. Ignored when variant is 'profile' or 'thumbnail'.
     *
     * @default 100
     */
    height?: number | string;
}

function toCssSize(value: number | string): string {
    return typeof value === 'number' ? `${value}px` : value;
}

/**
 * A visual placeholder for an element while it is in a loading state.
 *
 * ```html
 * <ui-skeleton variant="rectangular" [width]="200" [height]="100" />
 * <ui-skeleton variant="circular" [width]="40" [(loaded)]="loaded">
 *     <img src="avatar.jpg" alt="User" />
 * </ui-skeleton>
 * ```
 *
 * @name Skeleton
 * @phase Dev
 */
@Component({
    selector: 'ui-skeleton',
    standalone: true,
    template: `
        @if (showSkeleton()) {
            <div
                aria-busy="true"
                aria-label="Loading"
                data-bspk="skeleton"
                [attr.data-variant]="variant()"
                role="status"
                [style.--height]="heightCss()"
                [style.--width]="widthCss()"></div>
        } @else {
            <ng-content></ng-content>
        }
    `,
    styleUrl: './skeleton.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UISkeleton implements AsSignal<SkeletonProps> {
    readonly variant = input<SkeletonVariant>('rectangular');
    readonly width = input<number | string>(200);
    readonly height = input<number | string>(100);
    readonly loaded = model<boolean>(false);

    showSkeleton(): boolean {
        return !this.loaded();
    }

    widthCss(): string {
        return toCssSize(this.width());
    }

    heightCss(): string {
        return toCssSize(this.height());
    }
}
