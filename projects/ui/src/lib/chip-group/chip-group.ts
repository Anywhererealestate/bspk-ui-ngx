import { Component, ViewEncapsulation, input } from '@angular/core';
import { UIChip, ChipProps } from '../chip/chip';

export type Overflow = 'scroll' | 'wrap';

@Component({
    selector: 'ui-chip-group',
    standalone: true,
    imports: [UIChip],
    template: `@for (item of items(); track item) {
        <ui-chip
            [label]="item.label"
            [disabled]="item.disabled ?? false"
            [flat]="item.flat ?? false"
            [selected]="item.selected ?? false"
            [leadingIcon]="item.leadingIcon"
            [trailingIcon]="item.trailingIcon"
            [trailingBadge]="item.trailingBadge"
            (chipClick)="item.click?.($event)" />
    }`,
    styleUrl: './chip-group.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        'data-bspk': 'chip-group',
        '[attr.data-scroll]': "overflow() === 'scroll' ? true : null",
    },
})
export class UIChipGroup {
    /** To allow chips to scroll. If set to false chips will wrap. */
    readonly overflow = input<Overflow>('wrap');

    /** Only Chip components should be used as children. */
    readonly items = input<ChipProps[]>();
}
