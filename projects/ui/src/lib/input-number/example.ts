import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { UIInputNumber } from './input-number';

@Component({
    selector: 'ui-input-number-example',
    standalone: true,
    imports: [CommonModule, UIInputNumber],
    template: `
        <h2>Input</h2>

        <h3>Default</h3>
        <ui-input-number
            [value]="values()['default']"
            (valueChange)="update('default', $event)"
            id="default-input"
            name="default-input"
            ariaLabel="Input Label" />

        <h3>Max set</h3>
        <ui-input-number
            [value]="values()['max']"
            (valueChange)="update('max', $event)"
            [max]="5"
            id="max-input"
            name="max-input"
            ariaLabel="Input Label" />

        <h3>Min set</h3>
        <ui-input-number
            [value]="values()['min']"
            (valueChange)="update('min', $event)"
            [min]="1"
            id="min-input"
            name="min-input"
            ariaLabel="Input Label" />

        <h3>Align Left</h3>
        <ui-input-number
            [value]="values()['left']"
            (valueChange)="update('left', $event)"
            [align]="'left'"
            id="left-input"
            name="left-input"
            ariaLabel="Input Label" />
        <h3>Disabled</h3>
        <ui-input-number
            [value]="values()['disabled']"
            (valueChange)="update('disabled', $event)"
            name="disabled-input"
            ariaLabel="Input Label"
            [disabled]="true" />

        <h3>Invalid</h3>
        <ui-input-number
            [value]="values()['invalid']"
            (valueChange)="update('invalid', $event)"
            name="invalid-input"
            ariaLabel="Input Label"
            [invalid]="true" />

        <h3>Required</h3>
        <ui-input-number
            [value]="values()['required']"
            (valueChange)="update('required', $event)"
            name="required-input"
            ariaLabel="Input Label"
            [required]="true" />

        <h3>Read Only</h3>
        <ui-input-number
            (valueChange)="update('readOnly', $event)"
            [value]="values()['readOnly']"
            name="read-only-input"
            ariaLabel="Input Label"
            [readOnly]="true" />
    `,
})
export class UIInputNumberExample {
    readonly values = signal<Record<string, string | undefined>>({
        default: '0',
        max: '0',
        min: '1',
        leftAlign: '0',
        disabled: '0',
        invalid: '0',
        required: '0',
        readOnly: '0',
    });

    readonly defaultValue = signal<string | undefined>('0');

    update = (key: string, next: string | undefined) => {
        this.values.update((current) => ({
            ...current,
            [key]: next,
        }));
    };
}
