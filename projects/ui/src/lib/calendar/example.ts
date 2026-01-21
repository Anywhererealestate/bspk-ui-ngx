import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { UICalendar } from './calendar';

@Component({
    selector: 'ui-calendar-example',
    standalone: true,
    imports: [CommonModule, UICalendar],
    template: `
        <h2>Calendar</h2>

        <h3>Default</h3>
        <ui-calendar (onChange)="handleChange($event)" />

        <h3>With Initial Value</h3>
        <ui-calendar [value]="initialDate()" (onChange)="handleChange($event, 'With Initial Value')" />

        <h3>With Focus Trap</h3>
        <ui-calendar [focusTrap]="true" (onChange)="handleChange($event, 'With Focus Trap')" />

        <h3>With Custom ID</h3>
        <ui-calendar id="custom-calendar" (onChange)="handleChange($event, 'With Custom ID')" />
    `,
})
export class UICalendarExample {
    // Signal for initial value example
    readonly initialDate = signal(new Date(2026, 0, 15)); // January 15, 2026

    handleChange(date: Date, label = 'Default') {
        sendSnackbar(`onChange (${label}): ${date.toDateString()}`);
    }
}
