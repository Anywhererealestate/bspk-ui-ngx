import { Component } from '@angular/core';
import { UIPopover } from './popover';

@Component({
    selector: 'ui-popover-example',
    standalone: true,
    imports: [UIPopover],
    template: `
        <ui-popover
            header="Popover Header"
            content="This is popover content. Use call-to-action buttons to perform an action."
            [callToAction]="{ label: 'Action' }"
            [secondaryCallToAction]="{ label: 'Cancel' }"
            (callToActionClick)="onAction()"
            (secondaryCallToActionClick)="onSecondary()">
            <span ui-popover-trigger>Toggle popover</span>
        </ui-popover>
    `,
})
export class UIPopoverExample {
    onAction(): void {
        // Action clicked
    }

    onSecondary(): void {
        // Secondary clicked
    }
}
