import { Component } from '@angular/core';
import { UIProgressionStepperBar } from './progression-stepper-bar';

@Component({
    selector: 'ui-progression-stepper-bar-example',
    standalone: true,
    imports: [UIProgressionStepperBar],
    template: `
        <ui-progression-stepper-bar [stepCount]="5" [stepCompleted]="2" />
        <ui-progression-stepper-bar [stepCount]="3" [stepCompleted]="3" size="small" />
    `,
})
export class UIProgressionStepperBarExample {}
