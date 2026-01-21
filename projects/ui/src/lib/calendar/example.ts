import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { sendSnackbar } from '../../utils/send-snackbar';
import { UICalendar } from './calendar';

@Component({
    selector: 'ui-calendar-example',
    standalone: true,
    imports: [CommonModule, UICalendar],
    template: `
        <h2>Calendar</h2>

        <h3>Default</h3>
        <ui-calendar />
    `,
})
export class UICalendarExample {}
