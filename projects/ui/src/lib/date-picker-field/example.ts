import { Component, signal } from '@angular/core';
import { UIDatePickerField } from './date-picker-field';

@Component({
    selector: 'ui-date-picker-field-example',
    standalone: true,
    imports: [UIDatePickerField],
    template: `
        <ui-date-picker-field [(value)]="value" name="date" label="Date" helperText="Select a date." />
    `,
})
export class UIDatePickerFieldExample {
    readonly value = signal<Date | string | undefined>(undefined);
}
