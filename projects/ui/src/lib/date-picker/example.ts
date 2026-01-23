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
            <h2>Date Picker</h2>

            <h3>Default</h3>
            <ui-date-picker (valueChange)="handleValueChange($event, 'Default')" />

            <h3>With Initial Value</h3>
            <ui-date-picker [value]="initialDate()" (valueChange)="handleValueChange($event, 'With Initial Value')" />

            <h3>Disabled</h3>
            <ui-date-picker [disabled]="true" (valueChange)="handleValueChange($event, 'Disabled')" />

            <h3>Read Only</h3>
            <ui-date-picker [readOnly]="true" (valueChange)="handleValueChange($event, 'Read Only')" />

            <h3>Read Only & Initial Value</h3>
            <ui-date-picker
                [readOnly]="true"
                [value]="initialDate()"
                (valueChange)="handleValueChange($event, 'Read Only')" />

            <h3>Required</h3>
            <ui-date-picker [required]="true" (valueChange)="handleValueChange($event, 'Required')" />

            <h3>Invalid</h3>
            <ui-date-picker [invalid]="true" (valueChange)="handleValueChange($event, 'Invalid')" />

            <h3>Custom Placeholder</h3>
            <ui-date-picker
                placeholder="Pick a date!"
                (valueChange)="handleValueChange($event, 'Custom Placeholder')" />

            <h3>Custom Name & ID</h3>
            <ui-date-picker
                name="custom-name"
                id="custom-id"
                (valueChange)="handleValueChange($event, 'Custom Name & ID')" />

            <h3>Size: Small</h3>
            <ui-date-picker size="small" (valueChange)="handleValueChange($event, 'Small')" />

            <h3>Size: Large</h3>
            <ui-date-picker size="large" (valueChange)="handleValueChange($event, 'Large')" />
        </div>
    `,
})
export class UIDatePickerExample {
    readonly initialDate = signal(new Date(2026, 0, 15)); // January 15, 2026

    handleChange(value: Date | string, label = 'Default') {
        sendSnackbar(`onChange (${label}): ${typeof value === 'string' ? value : (value?.toDateString?.() ?? value)}`);
    }

    handleValueChange(event: any, label = 'Default') {
        let value = event;
        // If it's an event, extract the value
        if (event && event.target && typeof event.target.value === 'string') {
            value = event.target.value;
        }
        sendSnackbar(
            `valueChange (${label}): ${typeof value === 'string' ? value : (value?.toDateString?.() ?? value)}`,
        );
    }
}
