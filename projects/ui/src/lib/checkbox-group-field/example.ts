import { Component, signal } from '@angular/core';
import { UICheckboxGroupField } from './checkbox-group-field';

@Component({
    selector: 'ui-checkbox-group-field-example',
    standalone: true,
    imports: [UICheckboxGroupField],
    template: `
        <ui-checkbox-group-field
            [(value)]="value"
            name="options"
            label="Options"
            helperText="Select one or more."
            [options]="options" />
    `,
})
export class UICheckboxGroupFieldExample {
    readonly value = signal<string[] | undefined>(undefined);
    readonly options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];
}
