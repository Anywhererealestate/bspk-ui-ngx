import { Component, signal } from '@angular/core';
import { UIInputNumberField } from './input-number-field';

@Component({
    selector: 'ui-input-number-field-example',
    standalone: true,
    imports: [UIInputNumberField],
    template: ` <ui-input-number-field [(value)]="value" name="amount" label="Amount" helperText="Enter a number." /> `,
})
export class UIInputNumberFieldExample {
    readonly value = signal('123');
}
