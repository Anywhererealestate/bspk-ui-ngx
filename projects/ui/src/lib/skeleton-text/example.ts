import { Component } from '@angular/core';
import { UISkeletonText } from '../skeleton-text';
import { UISwitchOption } from '../switch-option';

@Component({
    selector: 'ui-skeleton-text-example',
    standalone: true,
    imports: [UISkeletonText, UISwitchOption],
    template: `
        <h4>Default</h4>
        <ui-skeleton-text> Example Content </ui-skeleton-text>

        <h4>lines: 12</h4>
        <ui-skeleton-text [lines]="12"> Example Content </ui-skeleton-text>

        <h4>loaded: true</h4>
        <ui-skeleton-text [loaded]="true"> Example Content </ui-skeleton-text>

        <h4>loaded: false</h4>
        <ui-skeleton-text [loaded]="false"> Example Content </ui-skeleton-text>

        <h4>[loaded]="showContent"</h4>
        flip this switch to true to show the content, otherwise it will show the skeleton. <br />
        <ui-switch-option
            name="openTrueSwitch"
            label="show content"
            [checked]="showContent"
            (checkedChange)="showContent = $event ?? false"
            value="true" />
        <ui-skeleton-text [loaded]="showContent"> Example Content </ui-skeleton-text>

        <h4>variant: body-base</h4>
        <ui-skeleton-text variant="body-base"> Example Content </ui-skeleton-text>

        <h4>variant: body-large</h4>
        <ui-skeleton-text variant="body-large"> Example Content </ui-skeleton-text>

        <h4>variant: body-small</h4>
        <ui-skeleton-text variant="body-small"> Example Content </ui-skeleton-text>

        <h4>variant: body-x-small</h4>
        <ui-skeleton-text variant="body-x-small"> Example Content </ui-skeleton-text>

        <h4>variant: display-regular-large</h4>
        <ui-skeleton-text variant="display-regular-large"> Example Content </ui-skeleton-text>

        <h4>variant: display-regular-medium</h4>
        <ui-skeleton-text variant="display-regular-medium"> Example Content </ui-skeleton-text>

        <h4>variant: display-regular-small</h4>
        <ui-skeleton-text variant="display-regular-small"> Example Content </ui-skeleton-text>

        <h4>variant: display-semibold-large</h4>
        <ui-skeleton-text variant="display-semibold-large"> Example Content </ui-skeleton-text>

        <h4>variant: display-semibold-medium</h4>
        <ui-skeleton-text variant="display-semibold-medium"> Example Content </ui-skeleton-text>

        <h4>variant: display-semibold-small</h4>
        <ui-skeleton-text variant="display-semibold-small"> Example Content </ui-skeleton-text>

        <h4>variant: heading-h1</h4>
        <ui-skeleton-text variant="heading-h1"> Example Content </ui-skeleton-text>

        <h4>variant: heading-h2</h4>
        <ui-skeleton-text variant="heading-h2"> Example Content </ui-skeleton-text>

        <h4>variant: heading-h3</h4>
        <ui-skeleton-text variant="heading-h3"> Example Content </ui-skeleton-text>

        <h4>variant: heading-h4</h4>
        <ui-skeleton-text variant="heading-h4"> Example Content </ui-skeleton-text>

        <h4>variant: heading-h5</h4>
        <ui-skeleton-text variant="heading-h5"> Example Content </ui-skeleton-text>

        <h4>variant: heading-h6</h4>
        <ui-skeleton-text variant="heading-h6"> Example Content </ui-skeleton-text>

        <h4>variant: labels-base</h4>
        <ui-skeleton-text variant="labels-base"> Example Content </ui-skeleton-text>

        <h4>variant: labels-large</h4>
        <ui-skeleton-text variant="labels-large"> Example Content </ui-skeleton-text>

        <h4>variant: labels-small</h4>
        <ui-skeleton-text variant="labels-small"> Example Content </ui-skeleton-text>

        <h4>variant: labels-x-small</h4>
        <ui-skeleton-text variant="labels-x-small"> Example Content </ui-skeleton-text>

        <h4>variant: subheader-large</h4>
        <ui-skeleton-text variant="subheader-large"> Example Content </ui-skeleton-text>

        <h4>variant: subheader-medium</h4>
        <ui-skeleton-text variant="subheader-medium"> Example Content </ui-skeleton-text>

        <h4>variant: subheader-x-large</h4>
        <ui-skeleton-text variant="subheader-x-large"> Example Content </ui-skeleton-text>

        <h4>variant: subheader-xx-large</h4>
        <ui-skeleton-text variant="subheader-xx-large"> Example Content </ui-skeleton-text>

        <h4>variant: subheader-xxx-large</h4>
        <ui-skeleton-text variant="subheader-xxx-large"> Example Content </ui-skeleton-text>
    `,
})
export class UISkeletonTextExample {
    showContent = false;
}
