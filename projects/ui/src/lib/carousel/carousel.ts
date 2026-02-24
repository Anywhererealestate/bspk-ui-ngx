import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
    computed,
    contentChildren,
    input,
    model,
    signal,
} from '@angular/core';
import { AsSignal } from '../../types/common';
import { UIButton } from '../button';
import { IconChevronLeft, IconChevronRight } from '../icons';
import { UIPageControl } from '../page-control';
import { UICarouselSlideDirective } from './carousel-slide.directive';

export interface CarouselProps {
    /**
     * A label for the carousel for screen readers.
     *
     * @required
     */
    label: string;
    /**
     * The current active slide index (0-based).
     *
     * @default 0
     */
    activeIndex?: number;
    /**
     * The width of each item/child.
     *
     * If number is provided, it is treated as pixels.
     *
     * If string is provided, it is treated as a CSS width value (%, px, em, rem, etc).
     *
     * If a percentage (%) is provided, the item is sized based on the carousel container's width
     *
     * @default 80%
     */
    itemWidth?: number | string;
    /**
     * The gap between items in pixels.
     *
     * @default 16
     */
    gap?: number;
    /** Additional styles to apply to the carousel container. */
    style?: Record<string, number | string>;
}

/**
 * A carousel component for displaying a horizontal list of items with navigation controls.
 *
 * Use `ui-carousel-slide` on each direct child. Renders a PageControl and prev/next buttons like the React component.
 *
 * ```html
 * <ui-carousel [label]="'Example Carousel'">
 *     <div ui-carousel-slide style="padding: 16px; background: rgba(255, 0, 0, 0.25)">Slide 1</div>
 *     <div ui-carousel-slide style="padding: 16px; background: rgba(0, 255, 0, 0.25)">Slide 2</div>
 *     <div ui-carousel-slide style="padding: 16px; background: rgba(0, 0, 255, 0.25)">Slide 3</div>
 * </ui-carousel>
 * ```
 *
 * @name Carousel
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-carousel',
    imports: [CommonModule, UIPageControl, UIButton],
    styleUrl: './carousel.scss',
    template: `
        <div data-items-container>
            <div data-items-track tabindex="0" (keydown.capture)="onKeydown($event)">
                <ng-content select="[ui-carousel-slide]"></ng-content>
            </div>
        </div>
        @if (slideCount() >= 2) {
            <div data-controls>
                <ui-button
                    label="Previous"
                    [ariaLabel]="'Previous Slide'"
                    [icon]="IconChevronLeft"
                    [iconOnly]="true"
                    variant="tertiary"
                    [disabled]="activeIndex() === 0"
                    (onClick)="setIndex(safeActiveIndex() - 1)" />
                <ui-page-control [currentPage]="safeActiveIndex() + 1" [numPages]="slideCount()" />
                <ui-button
                    label="Next"
                    [ariaLabel]="'Next Slide'"
                    [icon]="IconChevronRight"
                    [iconOnly]="true"
                    variant="tertiary"
                    [disabled]="safeActiveIndex() >= slideCount() - 1"
                    (onClick)="setIndex(safeActiveIndex() + 1)" />
            </div>
        }
        <span aria-live="polite" data-sr-only>Slide {{ safeActiveIndex() + 1 }} of {{ slideCount() }}</span>
    `,
    host: {
        'data-bspk': 'carousel',
        role: 'region',
        'aria-roledescription': 'carousel',
        '[attr.aria-label]': 'label()',
        '(keydown)': 'onKeydown($event)',
        '[style.--gap]': 'gapPx()',
        '[style.--item-width]': 'itemWidthCss()',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UICarousel implements AsSignal<CarouselProps> {
    readonly label = input.required<CarouselProps['label']>();
    readonly itemWidth = input<CarouselProps['itemWidth']>('80%');
    readonly gap = input<CarouselProps['gap']>(16);
    readonly style = input<CarouselProps['style']>();

    readonly slides = contentChildren(UICarouselSlideDirective);
    readonly slideCount = computed(() => this.slides().length);

    readonly activeIndex = model<CarouselProps['activeIndex']>(0);

    readonly safeActiveIndex = computed(() => this.activeIndex() ?? 0);

    readonly itemWidthCss = computed(() => {
        const v = this.itemWidth();
        return typeof v === 'number' ? `${v}px` : String(v);
    });

    readonly gapPx = computed(() => `${this.gap() ?? 16}px`);

    IconChevronLeft = IconChevronLeft;
    IconChevronRight = IconChevronRight;

    private readonly internalIndex = signal(0);

    setIndex(next: number) {
        this.activeIndex.set(this.clamp(next));

        this.slides().forEach((slide, i) => {
            slide.active.set(i === next);
        });

        const nextElement = this.slides()[next].host?.nativeElement;
        nextElement?.focus();
        nextElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    onKeydown(event: Event) {
        if (!(event instanceof KeyboardEvent)) return;
        if (event.key === 'ArrowLeft') {
            this.setIndex(this.safeActiveIndex() - 1);
            event.preventDefault();
        }
        if (event.key === 'ArrowRight') {
            this.setIndex(this.safeActiveIndex() + 1);
            event.preventDefault();
        }
    }

    private clamp(i: number): number {
        const len = this.slideCount();
        if (len <= 0) return 0;
        return Math.max(0, Math.min(i, len - 1));
    }
}
