import { Component, signal } from '@angular/core';
import { UIPasswordField } from './password-field';

@Component({
    selector: 'ui-password-field-example',
    standalone: true,
    imports: [UIPasswordField],
    template: `
        <h4>Default</h4>
        <ui-password-field
            [(value)]="value"
            name="password"
            label="Password"
            helperText="Enter a secure password." />

        <h4>Required</h4>
        <ui-password-field name="password-required" label="Password" [required]="true" />

        <h4>Disabled</h4>
        <ui-password-field name="password-disabled" label="Password" [disabled]="true" />

        <h4>With error</h4>
        <ui-password-field
            name="password-error"
            label="Password"
            errorMessage="Password is required." />
    `,
})
export class UIPasswordFieldExample {
    readonly value = signal<string | undefined>(undefined);
}
