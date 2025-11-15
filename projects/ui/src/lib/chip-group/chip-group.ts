import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Chip } from '../chip/chip';

export type Overflow = 'wrap' | 'scroll';

export type ChipGroupItem = {
    label: string;
    disabled?: boolean;
    flat?: boolean;
    selected?: boolean;
    leadingIcon?: string;
    trailingIcon?: string;
    trailingBadge?: any;
    onClick?: (event: Event) => void;
};

@Component({
    selector: 'ui-chip-group',
    standalone: true,
    imports: [Chip],
    templateUrl: './chip-group.html',
    styleUrl: './chip-group.scss',
    encapsulation: ViewEncapsulation.None,
})
export class ChipGroup {
    /** To allow chips to scroll. If set to false chips will wrap. */
    @Input() overflow: Overflow = 'wrap';

    /** Only Chip components should be used as children. */
    @Input() items?: ChipGroupItem[];

    get anyFlatFalse(): boolean {
        return !!this.items?.some((item) => item.flat === false || item.flat == null);
    }
}
