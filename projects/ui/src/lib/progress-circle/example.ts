import { Component } from '@angular/core';
import { UIProgressCircle } from '../progress-circle';

@Component({
    selector: 'ui-progress-circle-example',
    standalone: true,
    imports: [UIProgressCircle],
    template: `
        <h4>Default</h4>
        <ui-progress-circle label="example-label" />

        <h4>label: example-label</h4>
        <ui-progress-circle label="example-label" />

        <h4>labelPosition: bottom</h4>
        <ui-progress-circle label="example-label" labelPosition="bottom" />

        <h4>labelPosition: left</h4>
        <ui-progress-circle label="example-label" labelPosition="left" />

        <h4>labelPosition: right</h4>
        <ui-progress-circle label="example-label" labelPosition="right" />

        <h4>labelPosition: top</h4>
        <ui-progress-circle label="example-label" labelPosition="top" />

        <h4>size: large</h4>
        <ui-progress-circle label="example-label" size="large" />

        <h4>size: medium</h4>
        <ui-progress-circle label="example-label" size="medium" />

        <h4>size: small</h4>
        <ui-progress-circle label="example-label" size="small" />
    `,
})
export class UIProgressCircleExample {}
