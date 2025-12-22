import { Component, ViewEncapsulation, input } from '@angular/core';
import { ColorVariant } from '../../types/utils';

@Component({
    selector: 'ui-tag',
    standalone: true,
    imports: [],
    template: `<span class="truncated">{{ label() }}</span>
        @if (variant() === 'corner-wrap') {
            <div data-triangle></div>
        }`,
    styleUrls: ['./tag.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        'data-bspk': 'tag',
        '[attr.data-color]': 'color()',
        '[attr.data-size]': 'size()',
        '[attr.data-variant]': 'variant()',
    },
})
export class UITag {
    /**
     * The label of the tag.
     *
     * @required
     */
    label = input.required<string>();

    /**
     * The size of the tag.
     *
     * @default small
     */
    size = input<'small' | 'x-small'>('small');

    /**
     * The color of the tag.
     *
     * @default grey
     */
    color = input<ColorVariant>('grey');

    /**
     * The display variant of the tag.
     *
     * @default flat
     */
    variant = input<'corner-wrap' | 'flat' | 'pill'>('flat');
}
