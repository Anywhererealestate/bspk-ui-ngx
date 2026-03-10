import { Component } from '@angular/core';
import { UIProgressBar } from '../progress-bar';

@Component({
    selector: 'ui-progress-bar-example',
    standalone: true,
    imports: [UIProgressBar],
    template: `
        <h4>Default</h4>
        <ui-progress-bar [completion]="12" label="example-label" />

        <h4>align: center</h4>
        <ui-progress-bar align="center" [completion]="12" label="example-label" />

        <h4>align: left</h4>
        <ui-progress-bar align="left" [completion]="12" label="example-label" />

        <h4>completion: 12</h4>
        <ui-progress-bar [completion]="12" label="example-label" />

        <h4>label: example-label</h4>
        <ui-progress-bar [completion]="12" label="example-label" />

        <h4>size: large</h4>
        <ui-progress-bar [completion]="12" label="example-label" size="large" />

        <h4>size: small</h4>
        <ui-progress-bar [completion]="12" label="example-label" size="small" />

        <h4>successColor: true</h4>
        <ui-progress-bar [completion]="100" label="example-label" [successColor]="true" />

        <h4>successColor: false</h4>
        <ui-progress-bar [completion]="100" label="example-label" [successColor]="false" />

        <h4>successHidden: true; completion: 100</h4>
        <p>when successHidden is true, the progress bar will be hidden when completion is 100</p>
        <ui-progress-bar [completion]="100" label="example-label" [successHidden]="true" />

        <h4>successHidden: true; completion: 99</h4>
        <p>when successHidden is true, the progress bar will be visible when completion less than 100</p>
        <ui-progress-bar [completion]="99" label="example-label" [successHidden]="true" />

        <h4>successHidden: false; completion: 100</h4>
        <ui-progress-bar [completion]="100" label="example-label" [successHidden]="false" />
    `,
})
export class UIProgressBarExample {}
