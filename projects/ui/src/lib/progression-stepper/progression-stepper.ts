import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { AsSignal } from '../../types/common';
import * as Icons from '../icons';

export type ProgressionStepperItem = {
    name: string;
    subtext?: string;
    touchLink?: { label: string; onClick: () => void };
};

export type ProgressionStepperProps = {
    steps: ProgressionStepperItem[];
    completedStep?: number;
    variant?: 'horizontal' | 'vertical' | 'widget';
};

type StepStatus = 'complete' | 'current' | 'incomplete';

/**
 * A progress stepper is a horizontal visual indicator that shows the progression of the current process.
 *
 * @name ProgressionStepper
 * @phase Stable
 */
@Component({
    selector: 'ui-progression-stepper',
    standalone: true,
    imports: [Icons.IconCheck],
    template: `
        @if (steps().length) {
        <div [attr.data-bspk]="'progression-stepper'" [attr.data-variant]="variant()">
            @if (variant() === 'widget') {
                <label>
                    <span data-title>{{ currentStep()?.name }}</span>
                    <span data-subtitle>{{ subtitle() }}</span>
                </label>
            }
            <ol>
                @for (step of steps(); track $index) {
                    <li
                        [attr.aria-current]="stepStatus($index) === 'current' ? 'step' : null"
                        [attr.data-status]="stepStatus($index)"
                        [attr.data-step]="$index + 1">
                        <span data-line-circle>
                            <span data-line="before"></span>
                            <span data-circle>
                                @if (stepStatus($index) === 'complete') {
                                    <icon-check [attr.aria-hidden]="true"></icon-check>
                                } @else if (variant() !== 'widget' || stepStatus($index) === 'current') {
                                    <span>{{ $index + 1 }}</span>
                                }
                            </span>
                            <span data-line="after"></span>
                        </span>
                        @if (variant() !== 'widget') {
                            <span data-content>
                                <span data-name>{{ step.name }}</span>
                                @if (step.subtext) {
                                    <span data-subtext>{{ step.subtext }}</span>
                                }
                            </span>
                        }
                    </li>
                }
            </ol>
        </div>
        }
    `,
    host: {
        'data-bspk': 'progression-stepper',
        '[attr.data-variant]': 'variant()',
    },
    styleUrl: './progression-stepper.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UIProgressionStepper implements AsSignal<ProgressionStepperProps> {
    readonly steps = input.required<ProgressionStepperProps['steps']>();
    readonly completedStep = input<ProgressionStepperProps['completedStep']>(0);
    readonly variant = input<ProgressionStepperProps['variant']>('horizontal');

    readonly completedStepNumber = computed(() => {
        const steps = this.steps();
        const prop = this.completedStep() ?? 0;
        return Math.max(0, Math.min(prop, steps.length));
    });

    readonly currentStepNumber = computed(() =>
        Math.min(this.completedStepNumber() + 1, this.steps().length),
    );

    readonly currentStep = computed(() => {
        const steps = this.steps();
        const num = this.currentStepNumber();
        return steps[num - 1];
    });

    readonly subtitle = computed(() => {
        const current = this.currentStep();
        const completed = this.completedStepNumber();
        const steps = this.steps();
        if (current?.subtext) return current.subtext;
        if (completed === steps.length) return 'Completed';
        return `Step ${this.currentStepNumber()} of ${steps.length}`;
    });

    stepStatus(index: number): StepStatus {
        const stepNum = index + 1;
        const completed = this.completedStepNumber();
        if (completed >= stepNum) return 'complete';
        if (completed + 1 === stepNum) return 'current';
        return 'incomplete';
    }
}
