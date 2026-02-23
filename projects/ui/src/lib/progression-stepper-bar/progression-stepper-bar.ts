import { CommonModule } from '@angular/common';
import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { AsSignal } from '../../types/common';

export interface ProgressionStepperBarProps {
    stepCount: number;
    stepCompleted?: number;
    size?: 'large' | 'small';
}

/**
 * Progress bar showing step completion.
 *
 * @name ProgressionStepperBar
 * @phase Stable
 */
@Component({
    selector: 'ui-progression-stepper-bar',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div [attr.data-bspk]="'progression-stepper-bar'" [attr.data-size]="size()" [ngStyle]="stepStyle()">
            <div data-steps>
                @for (i of stepIndices(); track i) {
                    <div [attr.data-step]="i" [attr.data-complete]="i < stepCompletedClamped() ? true : null"></div>
                }
            </div>
            <span data-label> {{ stepCompletedClamped() }} of {{ stepCount() }} steps completed. </span>
        </div>
    `,
    host: {
        'data-bspk': 'progression-stepper-bar',
        '[attr.data-size]': 'size()',
    },
    styleUrl: './progression-stepper-bar.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UIProgressionStepperBar implements AsSignal<ProgressionStepperBarProps> {
    readonly stepCount = input.required<ProgressionStepperBarProps['stepCount']>();
    readonly stepCompleted = input<ProgressionStepperBarProps['stepCompleted']>(0);
    readonly size = input<ProgressionStepperBarProps['size']>('large');

    readonly stepCompletedClamped = computed(() => Math.min(this.stepCompleted() ?? 0, this.stepCount()));

    readonly stepIndices = computed(() => Array.from({ length: this.stepCount() }, (_, i) => i));

    readonly stepStyle = computed(() => ({ '--steps': this.stepCount() }) as Record<string, number>);
}
