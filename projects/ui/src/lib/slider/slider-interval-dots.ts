import { Component, input, computed } from '@angular/core';
import { SliderValue } from './slider'; // adjust path

@Component({
    selector: 'ui-slider-interval-dots',
    standalone: true,
    template: `
        @for (dot of dots(); track dot.index) {
            <div
                data-interval-dot
                [attr.data-filled-section]="dot.filled ? '' : null"
                [style.left.%]="dot.percent"></div>
        }
    `,
})
export class UISliderIntervalDots {
    readonly min = input<number>(0);
    readonly max = input<number>(100);
    readonly step = input<number>(1);
    readonly value = input<SliderValue>(0);

    readonly dots = computed(() => {
        const min = this.min();
        const max = this.max();
        const step = this.step();
        const value = this.value();

        if (step <= 0) return [];

        const count = Math.floor((max - min) / step);
        const result: { index: number; percent: number; filled: boolean }[] = [];

        for (let i = 1; i < count; i++) {
            const pointValue = min + i * step;
            const percent = ((pointValue - min) / (max - min)) * 100;

            let filled = false;

            if (typeof value === 'number') {
                filled = pointValue < value;
            } else {
                filled = pointValue < value[0];
            }

            result.push({
                index: i,
                percent,
                filled,
            });
        }

        return result;
    });
}
