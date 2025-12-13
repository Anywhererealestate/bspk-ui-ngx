import { Component, Input, ViewEncapsulation } from '@angular/core';

/**
 * A temporary effect or overlay that can be applied to a user interface to make content less prominent or to draw
 * attention to a modal or sheet.
 *
 * @name Scrim
 * @phase Utility
 */
@Component({
    selector: 'ui-scrim',
    standalone: true,
    template: '',
    styleUrls: ['./scrim.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        'aria-hidden': 'true',
        'data-bspk': 'scrim',
        '[attr.data-bspk-owner]': 'owner || null',
        '[attr.data-hidden]': '!visible ? true : null',
    },
})
export class UIScrim {
    /** Whether the Scrim should be visible. */
    @Input() visible = true;
    /** Owner identifier for tracking/analytics. */
    @Input() owner?: string;
    /** Function to call when the Scrim is clicked. */
}
