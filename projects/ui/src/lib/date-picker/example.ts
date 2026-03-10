import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { UIDatePicker } from './date-picker';

@Component({
    selector: 'ui-date-picker-example',
    standalone: true,
    imports: [CommonModule, UIDatePicker],
    template: `
        <div style="width: 320px;">
            <h4>Default</h4>
            <ui-date-picker name="default" (valueChange)="handleValueChange($event, 'Default')" />

            <h4>With Initial Value</h4>
            <ui-date-picker name="with-initial" [value]="initialDate()" (valueChange)="handleValueChange($event, 'With Initial Value')" />

            <h4>Disabled</h4>
            <ui-date-picker name="disabled" [disabled]="true" (valueChange)="handleValueChange($event, 'Disabled')" />

            <h4>Read Only</h4>
            <ui-date-picker name="readonly" [readOnly]="true" (valueChange)="handleValueChange($event, 'Read Only')" />

            <h4>Read Only & Initial Value</h4>
            <ui-date-picker
                name="readonly-value"
                [readOnly]="true"
                [value]="initialDate()"
                (valueChange)="handleValueChange($event, 'Read Only')" />

            <h4>Required</h4>
            <ui-date-picker name="required" [required]="true" (valueChange)="handleValueChange($event, 'Required')" />

            <h4>Invalid</h4>
            <ui-date-picker name="invalid" [invalid]="true" (valueChange)="handleValueChange($event, 'Invalid')" />

            <h4>Custom Placeholder</h4>
            <ui-date-picker
                name="placeholder"
                placeholder="Pick a date!"
                (valueChange)="handleValueChange($event, 'Custom Placeholder')" />

            <h4>Custom Name & ID</h4>
            <ui-date-picker
                name="custom-name"
                id="custom-id"
                (valueChange)="handleValueChange($event, 'Custom Name & ID')" />

            <h4>Size: Small</h4>
            <ui-date-picker name="small" size="small" (valueChange)="handleValueChange($event, 'Small')" />

            <h4>Size: Large</h4>
            <ui-date-picker name="large" size="large" (valueChange)="handleValueChange($event, 'Large')" />
        </div>
    `,
})
export class UIDatePickerExample {
    readonly initialDate = signal(new Date(2026, 0, 15)); // January 15, 2026

    handleValueChange(value: Date | string | undefined, label = 'Default') {
        sendSnackbar(
            `valueChange (${label}): ${typeof value === 'string' ? value : (value?.toDateString?.() ?? value)}`,
        );
    }
}
