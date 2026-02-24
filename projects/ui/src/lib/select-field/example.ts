import { Component, signal } from '@angular/core';
import { UISelectField } from './select-field';

@Component({
    selector: 'ui-select-field-example',
    standalone: true,
    imports: [UISelectField],
    template: `
        <ui-select-field
            [(value)]="value"
            name="select"
            label="Select"
            helperText="Choose an option."
            [items]="items" />
    `,
})
export class UISelectFieldExample {
    readonly value = signal<string | undefined>(undefined);
    readonly items = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ];
}
