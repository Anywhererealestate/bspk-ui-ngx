import { Component, signal } from '@angular/core';
import { UITimePicker } from './time-picker';

@Component({
    selector: 'ui-time-picker-example',
    standalone: true,
    imports: [UITimePicker],
    template: `
        <ui-time-picker
            [(value)]="value"
            name="time"
            [ariaLabel]="'Time'" />
    `,
})
export class UITimePickerExample {
    readonly value = signal<string | undefined>(undefined);
}
