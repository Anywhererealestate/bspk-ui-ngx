import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';
import { AsSignal } from '../../types/common';

export interface ImgProps {
    src: string;
    alt: string;
    loading?: 'eager' | 'lazy';
    decoding?: 'async' | 'auto' | 'sync';
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
        <img data-bspk="img" [src]="src()" [attr.alt]="alt()" [attr.loading]="loading()" [attr.decoding]="decoding()" />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIImg implements AsSignal<ImgProps> {
    readonly src = input.required<string>();
    readonly alt = input.required<string>();
    readonly loading = input<'eager' | 'lazy' | undefined>();
    readonly decoding = input<'async' | 'auto' | 'sync' | undefined>();
}
