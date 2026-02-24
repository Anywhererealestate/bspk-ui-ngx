import { Component, ViewEncapsulation, input, computed } from '@angular/core';
import { AsSignal } from '../../types/common';
import { TxtVariant } from '../txt';

export interface SkeletonTextProps {
    /**
     * The variant of the text being loaded.
     *
     * @default body-base
     */
    variant?: TxtVariant;
    /**
     * The number of lines showing.
     *
     * @default 3
     */
    lines?: number;
    /**
     * When true, show projected content instead of the skeleton.
     *
     * @default false
     */
    loaded?: boolean;
}

/**
 * A visual placeholder for text while it is in a loading state.
 *
 * ```html
 * <ui-skeleton-text [lines]="3" variant="body-base" />
 * <ui-skeleton-text [loaded]="hasContent()">
 *     <p>Loaded text content</p>
 * </ui-skeleton-text>
 * ```
 *
 * ```typescript
 * hasContent = signal(false);
 *
 * constructor() {
 *   // Simulate loading content
 *   setTimeout(() => this.hasContent.set(true), 3000);
 *
 * }
 * ```
 *
 * @name SkeletonText
 * @phase Dev
 */
@Component({
    selector: 'ui-skeleton-text',
    standalone: true,
    template: `
        @if (showSkeleton()) {
            <div
                aria-busy="true"
                aria-label="Loading"
                data-bspk="skeleton-text"
                role="status"
                [style.--text-height]="'var(--' + variant() + '-size)'"
                [style.--text-margin]="'calc(var(--' + variant() + '-line-height) - var(--' + variant() + '-size))'">
                @for (line of lineIndices(); track line) {
                    <div [attr.data-line]="line"></div>
                }
            </div>
        } @else {
            <ng-content></ng-content>
        }
    `,
    encapsulation: ViewEncapsulation.None,
})
export class UISkeletonText implements AsSignal<SkeletonTextProps> {
    readonly variant = input<SkeletonTextProps['variant']>('body-base');
    readonly lines = input<SkeletonTextProps['lines']>(3);
    /** When true, show content instead of skeleton. */
    readonly loaded = input<SkeletonTextProps['loaded']>(false);

    readonly lineIndices = computed(() => Array.from({ length: Math.max(1, this.lines() ?? 3) }, (_, i) => i));

    showSkeleton(): boolean {
        return !this.loaded();
    }
}
