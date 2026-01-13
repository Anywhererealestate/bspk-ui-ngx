
import { Component, signal } from '@angular/core';
import { UIInputField } from './input-field';

@Component({
    selector: 'ui-input-example',
    standalone: true,
    imports: [UIInputField],
    template: `
        <h2>Input Field</h2>

        <h3>Default</h3>
        <ui-input-field
            [value]="values()['default']"
            (valueChange)="update('default', $event)"
            id="default-input"
            name="default-input"
            label="Input Label"
            helperText="The value of the default input is: {{ values()['default'] || 'null' }}" />

        <h3>Disabled</h3>
        <ui-input-field name="disabled-input" label="Input Label" [disabled]="true" />

        <h3>Invalid</h3>
        <ui-input-field name="invalid-input" label="Input Label" [invalid]="true" />

        <h3>Required</h3>
        <ui-input-field name="required-input" label="Input Label" [required]="true" />

        <h3>Read Only</h3>
        <ui-input-field name="read-only-input" label="Input Label" [readOnly]="true" />

        <h3>showClearButton = true</h3>
        <ui-input-field name="show-clear-button-true" label="Input Label" [showClearButton]="true" />

        <h3>showClearButton = false</h3>
        <ui-input-field name="show-clear-button-false" label="Input Label" [showClearButton]="false" />

        <h3>Placeholder</h3>
        <ui-input-field name="placeholder-input" label="Input Label" placeholder="I am placeholder copy" />

        <h3>size = small</h3>
        <ui-input-field name="size-small" label="Input Label" size="small" />

        <h3>size = medium</h3>
        <ui-input-field name="size-medium" label="Input Label" size="medium" />

        <h3>size = large</h3>
        <ui-input-field name="size-large" label="Input Label" size="large" />

        <h3>type: text</h3>
        <ui-input-field name="type-text" label="Input Label" type="text" />

        <h3>type: number</h3>
        <ui-input-field name="type-number" label="Input Label" type="number" />

        <h3>type: password</h3>
        <ui-input-field name="type-password" label="Input Label" type="password" />

        <h3>leading</h3>
        <ui-input-field name="leading-example" label="Input Label" leading="$" />

        <h3>trailing</h3>
        <ui-input-field
            ariaLabel="Input Label"
            [value]="values()['trailing-example']"
            (valueChange)="update('trailing-example', $event)"
            name="trailing-example"
            label="Input Label"
            trailing="%" />
    `,
})
export class UIInputFieldExample {
    readonly values = signal<Record<string, string | undefined>>({
        default: 'Default value example',
        'value-example': 'I am an example value',
    });

    readonly defaultValue = signal<string | undefined>('Default value example');

    update = (key: string, next: string | undefined) => {
        this.values.update((current) => ({
            ...current,
            [key]: next,
        }));
    };
}
