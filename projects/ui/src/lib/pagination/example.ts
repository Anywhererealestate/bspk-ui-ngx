import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { sendSnackbar } from '../../utils/sendSnackbar';
import { UIPagination } from './pagination';

@Component({
    selector: 'ui-pagination-example',
    standalone: true,
    imports: [CommonModule, UIPagination],
    template: `
        <h2>Pagination</h2>

        <p>See working example on the table page: <a href="/table">Table</a></p>

        <h3>Pagination with Input</h3>
        <ui-pagination [value]="values()[0]" [numPages]="50" (onChange)="handleChange(0, $event)" />

        <h3>Pagination with Buttons</h3>
        <ui-pagination [value]="values()[1]" [numPages]="7" (onChange)="handleChange(1, $event)" />

        <h3>Hidden when only one page</h3>
        <ui-pagination [value]="values()[2]" [numPages]="1" (onChange)="handleChange(2, $event)" />
        <p>This pagination component is hidden because there is only one page.</p>
    `,
})
export class UIPaginationExample {
    protected readonly values = model([1, 5, 1]);

    protected handleChange(exampleIndex: number, num: number) {
        sendSnackbar(`Pagination changed to page ${num}`);
        const values = this.values();
        values[exampleIndex] = num;
        this.values.set(values);

        // No operation for example
    }
}
