import { Component } from '@angular/core';
import { UISkeleton } from '../skeleton';
import { UISwitchOption } from '../switch-option';

@Component({
    selector: 'ui-skeleton-example',
    standalone: true,
    imports: [UISkeleton, UISwitchOption],
    template: `
        <h4>Default</h4>
        <ui-skeleton> Example Content </ui-skeleton>

        <h4>height: 12</h4>
        <ui-skeleton [height]="12"> Example Content </ui-skeleton>

        <h4>loaded: true</h4>
        <ui-skeleton [loaded]="true"> Example Content </ui-skeleton>

        <h4>loaded: false</h4>
        <ui-skeleton [loaded]="false"> Example Content </ui-skeleton>

        <h4>[(loaded)]="showContent"</h4>
        flip this switch to true to show the content, otherwise it will show the skeleton. <br />
        <ui-switch-option
            name="openTrueSwitch"
            label="show content"
            [checked]="showContent"
            (checkedChange)="showContent = $event ?? false"
            value="true" />
        <ui-skeleton [(loaded)]="showContent"> Example Content </ui-skeleton>

        <h4>variant: circular</h4>
        <ui-skeleton variant="circular"> Example Content </ui-skeleton>

        <h4>variant: photo</h4>
        <ui-skeleton variant="photo"> Example Content </ui-skeleton>

        <h4>variant: profile</h4>
        <ui-skeleton variant="profile"> Example Content </ui-skeleton>

        <h4>variant: rectangular</h4>
        <ui-skeleton variant="rectangular"> Example Content </ui-skeleton>

        <h4>variant: thumbnail</h4>
        <ui-skeleton variant="thumbnail"> Example Content </ui-skeleton>

        <h4>width: 12</h4>
        <ui-skeleton [width]="12"> Example Content </ui-skeleton>
    `,
})
export class UISkeletonExample {
    showContent = false;
}
