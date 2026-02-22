import { Component } from '@angular/core';
import { UIProgressCircle } from './progress-circle';

@Component({
    selector: 'ui-progress-circle-example',
    standalone: true,
    imports: [UIProgressCircle],
    template: `
        <ui-progress-circle label="Loading ..." />
        <ui-progress-circle label="Loading ..." size="small" />
        <ui-progress-circle label="Loading ..." size="large" labelPosition="top" />
    `,
})
export class UIProgressCircleExample {}
