import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { AsSignal } from '../../types/common';
import { uniqueId } from '../../utils/random';
import { UITxtDirective } from '../txt';

export interface ProgressCircleProps {
    /** The label of the progress circle. */
    label: string;
    /**
     * The size of the label and progress circle.
     *
     * @default medium
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * The position of the label in relation to the progress circle.
     *
     * @default bottom
     */
    labelPosition?: 'bottom' | 'left' | 'right' | 'top';
}

/**
 * Rotating circle or pill that indicates the status or state of completion for a process.
 *
 * @name ProgressCircle
 * @phase Dev
 */
@Component({
    selector: 'ui-progress-circle',
    standalone: true,
    imports: [UITxtDirective],
    template: `
        <svg
            [attr.aria-hidden]="true"
            data-animated
            fill="none"
            [attr.viewBox]="'0 0 200 200'"
            [attr.stroke-width]="strokeWidth * 2">
            <defs>
                <linearGradient [id]="labelId + 'spinner-secondHalf'">
                    <stop offset="50%" stop-color="currentColor" stop-opacity="0" />
                    <stop offset="100%" stop-color="currentColor" stop-opacity="0.375" />
                </linearGradient>
                <linearGradient [id]="labelId + 'spinner-firstHalf'">
                    <stop offset="0%" stop-color="currentColor" stop-opacity="1" />
                    <stop offset="100%" stop-color="currentColor" stop-opacity="0.375" />
                </linearGradient>
            </defs>
            <g [attr.stroke-width]="strokeWidth * 2">
                <path [attr.d]="pathSecondHalf" [attr.stroke]="'url(#' + labelId + 'spinner-secondHalf)'" />
                <path [attr.d]="pathFirstHalf" [attr.stroke]="'url(#' + labelId + 'spinner-firstHalf)'" />
                <path [attr.d]="pathCap" stroke="currentColor" stroke-linecap="round" />
            </g>
        </svg>
        <span [id]="labelId" [ui-txt]="txtVariant()">{{ label() || 'Loading ...' }}</span>
    `,
    host: {
        'data-bspk': 'progress-circle',
        '[attr.aria-labelledby]': 'labelId',
        '[attr.data-label-position]': 'labelPosition()',
        '[attr.data-size]': 'size()',
        role: 'progressbar',
    },
    styleUrl: './progress-circle.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UIProgressCircle implements AsSignal<ProgressCircleProps> {
    readonly label = input.required<ProgressCircleProps['label']>();
    readonly size = input<ProgressCircleProps['size']>('medium');
    readonly labelPosition = input<ProgressCircleProps['labelPosition']>('bottom');

    readonly labelId = uniqueId('progress-circle-label-');
    readonly strokeWidth = 10;

    readonly txtVariant = computed(() => {
        const s = this.size();
        if (s === 'small') return 'labels-small';
        if (s === 'large') return 'labels-large';
        return 'labels-base';
    });

    readonly pathSecondHalf = `M ${this.strokeWidth} 100 A ${100 - this.strokeWidth} ${100 - this.strokeWidth} 0 0 1 ${100 + (100 - this.strokeWidth)} 100`;
    readonly pathFirstHalf = `M ${100 + (100 - this.strokeWidth)} 100 A ${100 - this.strokeWidth} ${100 - this.strokeWidth} 0 0 1 ${this.strokeWidth} 100`;
    readonly pathCap = `M ${this.strokeWidth} 100 A ${100 - this.strokeWidth} ${100 - this.strokeWidth} 0 0 1 ${this.strokeWidth} ${100 - 2}`;
}
