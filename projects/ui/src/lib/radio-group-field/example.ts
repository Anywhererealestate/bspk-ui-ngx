import { Component, signal } from '@angular/core';
import { UIRadioGroupField } from './radio-group-field';

@Component({
    selector: 'ui-radio-group-field-example',
    standalone: true,
    imports: [UIRadioGroupField],
    template: `
        <ui-radio-group-field
            [(value)]="value"
            name="choice"
            label="Choose one"
            helperText="Select an option."
            [options]="options" />
    `,
})
export class UIRadioGroupFieldExample {
    readonly value = signal<string | undefined>(undefined);
    readonly options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ];
}
