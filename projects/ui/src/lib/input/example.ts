import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { UIInput } from './input';

@Component({
    selector: 'ui-input-example',
    standalone: true,
    imports: [CommonModule, UIInput],
    template: `
        <h2>Input</h2>

        <h3>Default</h3>
        <ui-input
            [value]="values()['default']"
            (valueChange)="update('default', $event)"
            id="default-input"
            name="default-input"
            ariaLabel="Input Label"></ui-input>
        <p>The value of the default input is: {{ values()['default'] || 'null' }}</p>

        <h3>Disabled</h3>
        <ui-input name="disabled-input" ariaLabel="Input Label" [disabled]="true"></ui-input>

        <h3>Invalid</h3>
        <ui-input name="invalid-input" ariaLabel="Input Label" [invalid]="true"></ui-input>

        <h3>Required</h3>
        <ui-input name="required-input" ariaLabel="Input Label" [required]="true"></ui-input>

        <h3>Read Only</h3>
        <ui-input name="read-only-input" ariaLabel="Input Label" [readOnly]="true"></ui-input>

        <h3>showClearButton = true</h3>
        <ui-input name="show-clear-button-true" ariaLabel="Input Label" [showClearButton]="true"></ui-input>

        <h3>showClearButton = false</h3>
        <ui-input name="show-clear-button-false" ariaLabel="Input Label" [showClearButton]="false"></ui-input>

        <h3>Placeholder</h3>
        <ui-input name="placeholder-input" ariaLabel="Input Label" placeholder="I am placeholder copy"></ui-input>

        <h3>size = small</h3>
        <ui-input name="size-small" ariaLabel="Input Label" size="small"></ui-input>

        <h3>size = medium</h3>
        <ui-input name="size-medium" ariaLabel="Input Label" size="medium"></ui-input>

        <h3>size = large</h3>
        <ui-input name="size-large" ariaLabel="Input Label" size="large"></ui-input>

        <h3>name</h3>
        <ui-input name="name-example" ariaLabel="Input Label" name="I am an example name"></ui-input>

        <h3>value</h3>
        <ui-input
            [value]="values()['value-example']"
            (valueChange)="update('value-example', $event)"
            name="value-example"
            ariaLabel="Input Label"></ui-input>

        <h3>ariaLabel</h3>
        <ui-input name="aria-label-example" ariaLabel="Input Label" ariaLabel="Input Label + aria-label"></ui-input>

        <h3>id</h3>
        <ui-input name="id-example" ariaLabel="Input Label" id="hello, I am an id"></ui-input>

        <h3>owner</h3>
        <ui-input name="owner-example" ariaLabel="Input Label" owner="and the owner is..."></ui-input>

        <h3>type: text</h3>
        <ui-input name="type-text" ariaLabel="Input Label" type="text"></ui-input>

        <h3>type: number</h3>
        <ui-input name="type-number" ariaLabel="Input Label" type="number"></ui-input>

        <h3>type: password</h3>
        <ui-input name="type-password" ariaLabel="Input Label" type="password"></ui-input>

        <h3>leading</h3>
        <ui-input name="leading-example" ariaLabel="Input Label" leading="$"></ui-input>

        <h3>trailing</h3>
        <ui-input
            [value]="values()['trailing-example']"
            (valueChange)="update('trailing-example', $event)"
            name="trailing-example"
            ariaLabel="Input Label"
            trailing="%"></ui-input>
    `,
})
export class UIInputExample {
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
