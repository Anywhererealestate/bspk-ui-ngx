import { Directive, ElementRef, inject, model } from '@angular/core';

/**
 * Mark a slide for use inside ui-carousel. Add to each direct child of the carousel.
 *
 * ```html
 * <ui-carousel [label]="'Gallery'">
 *     <div ui-carousel-slide style="padding: 16px; background: rgba(255, 0, 0, 0.25)">Slide 1</div>
 *     <div ui-carousel-slide style="padding: 16px; background: rgba(0, 255, 0, 0.25)">Slide 2</div>
 *     <div ui-carousel-slide style="padding: 16px; background: rgba(0, 0, 255, 0.25)">Slide 3</div>
 * </ui-carousel>
 * ```
 *
 * @name CarouselSlide
 * @phase Utility
 */
@Directive({
    selector: '[ui-carousel-slide]',
    standalone: true,
    host: {
        '[attr.data-item-wrapper]': '""',
        '[attr.role]': '"tabpanel"',
        '[attr.aria-roledescription]': '"slide"',
        '[attr.data-active]': 'active() ? "" : null',
        '[attr.tabindex]': 'active() ? 0 : -1',
    },
})
export class UICarouselSlideDirective {
    readonly active = model<boolean>(false);

    readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
}
