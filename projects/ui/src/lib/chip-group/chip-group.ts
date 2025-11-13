import { Component, Input } from '@angular/core';
import { Chip } from '../chip/chip';

@Component({
    selector: 'ui-chip-group',
    standalone: true,
    imports: [Chip],
    templateUrl: './chip-group.html',
    styleUrl: './chip-group.scss',
})
export class ChipGroup {
    /** To allow chips to wrap. If set to false chips will scroll. */
    @Input() wrap: boolean = true;

    @Input() items?: any[]; // Array of chip data, if you want to support looping
}
