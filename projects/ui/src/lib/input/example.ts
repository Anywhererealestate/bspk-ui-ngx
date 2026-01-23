import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { UIButton } from '../button';
import { UIInput } from './input';

@Component({
    selector: 'ui-input-example',
    standalone: true,
    imports: [CommonModule, UIInput, UIButton],
    template: `
        <h2>Input</h2>
        <h3>Default</h3>
        <ui-input
            (valueChange)="update('default', $event)"
            id="default-input"
            name="default-input"
            ariaLabel="Input Label" />

        <h3>Default with preset Value</h3>
        <ui-input
            [value]="values()['default']"
            (valueChange)="update('default', $event)"
            id="default-input"
            name="default-input"
            ariaLabel="Input Label" />
        <p>The value of the default input is: {{ values()['default'] || 'null' }}</p>

        <h3>Disabled</h3>
        <ui-input name="disabled-input" ariaLabel="Input Label" [disabled]="true" />

        <h3>Invalid</h3>
        <ui-input name="invalid-input" ariaLabel="Input Label" [invalid]="true" />

        <h3>Required</h3>
        <ui-input name="required-input" ariaLabel="Input Label" [required]="true" />

        <h3>Read Only</h3>
        <ui-input name="read-only-input" ariaLabel="Input Label" [readOnly]="true" />

        <h3>Read Only & preset Value</h3>
        <ui-input name="read-only-input" ariaLabel="Input Label" [readOnly]="true" [value]="values()['default']" />

        <h3>showClearButton = true</h3>
        <ui-input name="show-clear-button-true" ariaLabel="Input Label" [showClearButton]="true" />

        <h3>showClearButton = false</h3>
        <ui-input name="show-clear-button-false" ariaLabel="Input Label" [showClearButton]="false" />

        <h3>Placeholder</h3>
        <ui-input name="placeholder-input" ariaLabel="Input Label" placeholder="I am placeholder copy" />

        <h3>size = small</h3>
        <ui-input name="size-small" ariaLabel="Input Label" size="small" />

        <h3>size = medium</h3>
        <ui-input name="size-medium" ariaLabel="Input Label" size="medium" />

        <h3>size = large</h3>
        <ui-input name="size-large" ariaLabel="Input Label" size="large" />

        <h3>type: text</h3>
        <ui-input name="type-text" ariaLabel="Input Label" type="text" />

        <h3>type: number</h3>
        <ui-input name="type-number" ariaLabel="Input Label" type="number" />

        <h3>type: password</h3>
        <ui-input name="type-password" ariaLabel="Input Label" type="password" />

        <h3>leading</h3>
        <ui-input name="leading-example" ariaLabel="Input Label" leading="$" />

        <h3>trailing</h3>
        <ui-input
            [value]="values()['trailing-example']"
            (valueChange)="update('trailing-example', $event)"
            name="trailing-example"
            ariaLabel="Input Label"
            trailing="%" />

        <h3>Placeholder with trailing UIButton</h3>
        <ng-template #trailingButton>
            <ui-button label="Go" size="small" (onClick)="onTrailingButtonClick()"></ui-button>
        </ng-template>
        <ui-input
            name="placeholder-trailing-button"
            ariaLabel="Input Label"
            placeholder="Type something..."
            [trailing]="trailingButton" />
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

    onTrailingButtonClick() {
        sendSnackbar('Trailing UIButton clicked!');
    }
}
