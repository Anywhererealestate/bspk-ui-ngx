import { Component } from '@angular/core';
import { UIButton } from '../button/button';
import { UIPopover } from './popover';

@Component({
    selector: 'ui-popover-example',
    standalone: true,
    imports: [UIPopover, UIButton],
    template: `
        <ui-popover
            header="Popover Header"
            content="This is popover content. Use call-to-action buttons to perform an action."
            [callToAction]="{ label: 'Action' }"
            [secondaryCallToAction]="{ label: 'Cancel' }"
            (callToActionClick)="onAction()"
            (secondaryCallToActionClick)="onSecondary()">
            <ui-button ui-popover-trigger label="Toggle popover" type="button" />
        </ui-popover>
    `,
})
export class UIPopoverExample {
    onAction(): void {
        console.log('Action clicked');
    }

    onSecondary(): void {
        console.log('Secondary clicked');
    }
}
