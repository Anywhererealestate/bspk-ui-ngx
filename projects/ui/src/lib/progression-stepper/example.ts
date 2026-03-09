import { Component } from '@angular/core';
import { UIProgressionStepper } from './progression-stepper';

@Component({
    selector: 'ui-progression-stepper-example',
    standalone: true,
    imports: [UIProgressionStepper],
    template: `
        <ui-progression-stepper [steps]="steps" [completedStep]="1" />
        <ui-progression-stepper [steps]="steps" [completedStep]="2" variant="widget" />
        <ui-progression-stepper [steps]="steps" [completedStep]="2" variant="vertical" />
    `,
})
export class UIProgressionStepperExample {
    readonly steps = [{ name: 'Step 1' }, { name: 'Step 2', subtext: 'Optional subtext' }, { name: 'Step 3' }];
}
