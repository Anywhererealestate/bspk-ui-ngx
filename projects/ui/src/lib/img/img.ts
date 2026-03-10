import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';
import { AsSignal } from '../../types/common';

export interface ImgProps {
    /**
     * The URL of the image.
     *
     * @required
     */
    src: string;
    /**
     * The alternative text for the image.
     *
     * @required
     */
    alt: string;
}

/**
 * An image element with consistent styling and optional loading/decoding attributes.
 *
 * ```html
 * <ui-img src="/path/to/image.jpg" alt="Description" loading="lazy" />
 * ```
 *
 * @name Img
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-img',
    imports: [CommonModule],
    template: `
        <img data-bspk="img" [src]="src()" [attr.alt]="alt()" />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIImg implements AsSignal<ImgProps> {
    readonly src = input.required<ImgProps['src']>();
    readonly alt = input.required<ImgProps['alt']>();
}
