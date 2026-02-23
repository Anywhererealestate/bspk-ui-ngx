import { Component, signal } from '@angular/core';
import { UITimePickerField } from './time-picker-field';

@Component({
    selector: 'ui-time-picker-field-example',
    standalone: true,
    imports: [UITimePickerField],
    template: ` <ui-time-picker-field [(value)]="value" name="time" label="Time" helperText="Select a time." /> `,
})
export class UITimePickerFieldExample {
    readonly value = signal<string | undefined>('');
}
