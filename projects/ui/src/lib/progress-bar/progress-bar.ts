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
     * The current progress of the progressbar (0–100). Alias for completion.
     *
     * @example
     *     42;
     *
     * @minimum 0
     * @maximum 100
     */
    value?: number;
    /**
     * The current progress of the progressbar (0–100). When value is set, completion is optional.
     *
     * @example
     *     42;
     *
     * @minimum 0
     * @maximum 100
     */
    completion?: number;
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
}

/**
 * A progress bar is a horizontal visual indicator that let’s the user know the progression of a task or operation
 * occurring in the background.
 *
 * ```html
 * <ui-progress-bar [value]="0.65" [label]="'65%'" />
 * ```
 *
 * @name ProgressBar
 * @phase Dev
 */
@Component({
    selector: 'ui-progress-bar',
    imports: [],
    template: `
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
    readonly value = input<ProgressBarProps['value']>();
    readonly completion = input<ProgressBarProps['completion']>();
    readonly align = input<ProgressBarProps['align']>('center');
    readonly label = input.required<ProgressBarProps['label']>();
    readonly successColor = input<ProgressBarProps['successColor']>(false);

    readonly id = uniqueId('progress-bar');

    /** Resolves value (0–1 or 0–100) or completion (0–100) to 0–100. */
    readonly effectiveCompletion = computed(() => {
        const v = this.value();
        const c = this.completion();
        if (v != null) {
            const n = Number(v);
            const scaled = n <= 1 && n >= 0 ? Math.round(n * 100) : Math.round(n);
            return Math.max(0, Math.min(100, scaled));
        }
        return c != null ? Math.max(0, Math.min(100, Math.round(c))) : 0;
    });

    get completionValue() {
        return Math.max(0, Math.min(100, Math.round(this.effectiveCompletion())));
    }

    get success() {
        return this.successColor() && this.effectiveCompletion() === 100 ? 'color' : undefined;
    }

    get ariaBusy() {
        return this.effectiveCompletion() < 100;
    }

    get barStyle() {
        return { '--width': `${this.effectiveCompletion()}%` };
    }
}
