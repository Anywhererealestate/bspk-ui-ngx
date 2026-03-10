import { Component, input, computed, ViewEncapsulation } from '@angular/core';
import { AsSignal } from '@ui/types/common';
import { uniqueId } from '@ui/utils/random';

export interface ProgressBarProps {
    /**
     * The size of the progressbar.
     *
     * @default large
     */
    size?: 'large' | 'small';
    /**
     * The current progress of the progressbar.
     *
     * @default 0
     * @minimum 0
     * @maximum 100
     *
     * @required
     */
    completion: number;
    /**
     * The label alignment of the progressbar.
     *
     * @default center
     */
    align?: 'center' | 'left';
    /** The label of the progressbar. */
    label: string;
    /**
     * If true and completion = 100, displays the progress bar in the success color.
     *
     * @deprecated This has a very narrow use-case. See guidelines for more information.
     * @default false
     */
    successColor?: boolean;
    /**
     * Whether to hide the success color when the progress bar is complete.
     *
     * @deprecated This has a very narrow use-case. See guidelines for more information.
     * @default false
     */
    successHidden?: boolean;
}

/**
 * A progress bar is a horizontal visual indicator that let’s the user know the progression of a task or operation
 * occurring in the background.
 *
 * ```html
 * <ui-progress-bar [completion]="65" [label]="'65%'" />
 * ```
 *
 * @name ProgressBar
 * @phase Dev
 */
@Component({
    selector: 'ui-progress-bar',
    imports: [],
    template: `
        @if (!(successHidden() && effectiveCompletion() === 100)) {
            <progress
                [aria-busy]="ariaBusy"
                aria-label="A bounded progress bar from 0 to 100"
                aria-valuemax="100"
                aria-valuemin="0"
                [aria-valuenow]="effectiveCompletion()"
                max="100"
                [value]="effectiveCompletion()">
                {{ effectiveCompletion() }}
            </progress>
            <div aria-hidden="true" data-bar [style]="barStyle"></div>
            <label [htmlFor]="id">{{ label() }}</label>
        }
    `,
    styleUrl: './progress-bar.scss',
    host: {
        'data-bspk': 'progress-bar',
        '[attr.data-align]': 'align()',
        '[attr.data-size]': 'size()',
        '[attr.data-success]': 'success',
    },
    encapsulation: ViewEncapsulation.None,
    standalone: true,
})
export class UIProgressBar implements AsSignal<ProgressBarProps> {
    readonly size = input<ProgressBarProps['size']>('large');
    readonly completion = input.required<ProgressBarProps['completion']>();
    readonly align = input<ProgressBarProps['align']>('center');
    readonly label = input.required<ProgressBarProps['label']>();
    readonly successColor = input<ProgressBarProps['successColor']>(false);
    readonly successHidden = input<ProgressBarProps['successHidden']>(false);

    readonly id = uniqueId('progress-bar');

    readonly effectiveCompletion = computed(() => Math.max(0, Math.min(100, Math.round(this.completion() ?? 0))));

    get completionValue() {
        return Math.max(0, Math.min(100, Math.round(this.effectiveCompletion())));
    }

    get success() {
        return this.successColor() && !this.successHidden() && this.effectiveCompletion() === 100 ? 'color' : undefined;
    }

    get ariaBusy() {
        return this.effectiveCompletion() < 100;
    }

    get barStyle() {
        return { '--width': `${this.effectiveCompletion()}%` };
    }
}
