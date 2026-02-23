import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
    ViewEncapsulation,
    computed,
    input,
    signal,
} from '@angular/core';
import { AsSignal } from '../../types/common';

export interface CarouselProps {
    length: number;
    value?: number; // controlled index (0-based)
    defaultValue?: number; // uncontrolled start
    showDots?: boolean;
    ariaLabel?: string;
}

/**
 * A horizontal carousel that displays slides with optional dot navigation.
 *
 * ```html
 * <ui-carousel [length]="3" [showDots]="true" ariaLabel="Image carousel">
 *   <div>Slide 1</div>
 *   <div>Slide 2</div>
 *   <div>Slide 3</div>
 * </ui-carousel>
 * ```
 *
 * @name Carousel
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-carousel',
    imports: [CommonModule],
    template: `
        <div data-viewport style="overflow:hidden; width:100%;">
            <div
                data-track
                [style.display]="'flex'"
                [style.transform]="'translateX(' + -activeIndex() * 100 + '%)'"
                style="transition: transform 200ms ease;">
                <ng-content></ng-content>
            </div>
        </div>

        @if (showDots()) {
            <div data-dots style="display:flex; gap:var(--spacing-sizing-02); justify-content:center;">
                @for (i of indices(); track i) {
                    <button
                        type="button"
                        [attr.aria-label]="'Go to slide ' + (i + 1)"
                        [attr.data-active]="i === activeIndex() ? '' : null"
                        (click)="setIndex(i)">
                        <!-- decorative; icon-free -->
                    </button>
                }
            </div>
        }
    `,
    host: {
        'data-bspk': 'carousel',
        role: 'region',
        '[attr.aria-label]': 'ariaLabel()',
        style: 'display:block;',
        '(keydown)': 'onKeydown($event)',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UICarousel implements AsSignal<CarouselProps> {
    @Output() change = new EventEmitter<number>();

    readonly length = input.required<number>();
    readonly value = input<number | undefined>();
    readonly defaultValue = input<number>(0);
    readonly showDots = input<boolean>(true);
    readonly ariaLabel = input<string>('Carousel');

    readonly activeIndex = computed(() => {
        const controlled = this.value();
        if (typeof controlled === 'number') return this.clamp(controlled);
        return this.clamp(this.internal() || this.defaultValue());
    });

    readonly indices = computed(() => Array.from({ length: this.length() }, (_, i) => i));

    private readonly internal = signal<number>(0);

    trackByIndex = (_: number, i: number) => i;

    onKeydown(event: KeyboardEvent) {
        if (event.key === 'ArrowLeft') {
            this.setIndex(this.activeIndex() - 1);
            event.preventDefault();
        }
        if (event.key === 'ArrowRight') {
            this.setIndex(this.activeIndex() + 1);
            event.preventDefault();
        }
    }

    setIndex(next: number) {
        const clamped = this.clamp(next);
        if (this.value() == null) this.internal.set(clamped);
        this.change.emit(clamped);
    }

    private clamp(i: number) {
        const len = this.length();
        if (len <= 0) return 0;
        return Math.max(0, Math.min(i, len - 1));
    }
}
