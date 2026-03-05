import { Component } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { UIOTPInputField } from '../otp-input-field';

@Component({
    selector: 'ui-otp-input-field-example',
    standalone: true,
    imports: [UIOTPInputField],
    template: `
        <h4>Default</h4>
        <ui-otp-input-field label="example-label" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>alphanumeric: true</h4>
        <ui-otp-input-field
            [alphanumeric]="true"
            label="example-label"
            name="example-name"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>alphanumeric: false</h4>
        <ui-otp-input-field
            [alphanumeric]="false"
            label="example-label"
            name="example-name"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>ariaLabel</h4>
        <ui-otp-input-field
            ariaLabel="example-ariaLabel"
            label="example-label"
            name="example-name"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>defaultValue</h4>
        <ui-otp-input-field
            defaultValue="example-defaultValue"
            label="example-label"
            name="example-name"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>disabled: true</h4>
        <ui-otp-input-field
            [disabled]="true"
            label="example-label"
            name="example-name"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>disabled: false</h4>
        <ui-otp-input-field
            [disabled]="false"
            label="example-label"
            name="example-name"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>errorMessage</h4>
        <ui-otp-input-field
            errorMessage="example-errorMessage"
            label="example-label"
            name="example-name"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>helperText</h4>
        <ui-otp-input-field
            helperText="example-helperText"
            label="example-label"
            name="example-name"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>id</h4>
        <ui-otp-input-field id="example-id" label="example-label" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>label</h4>
        <ui-otp-input-field label="example-label" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>labelTrailing</h4>
        <ui-otp-input-field
            label="example-label"
            labelTrailing="example-labelTrailing"
            name="example-name"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>length</h4>
        <ui-otp-input-field label="example-label" [length]="12" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>name</h4>
        <ui-otp-input-field label="example-label" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>readOnly: true</h4>
        <ui-otp-input-field
            label="example-label"
            name="example-name"
            [readOnly]="true"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>readOnly: false</h4>
        <ui-otp-input-field
            label="example-label"
            name="example-name"
            [readOnly]="false"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>required: true</h4>
        <ui-otp-input-field
            label="example-label"
            name="example-name"
            [required]="true"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>required: false</h4>
        <ui-otp-input-field
            label="example-label"
            name="example-name"
            [required]="false"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>secure: true</h4>
        <ui-otp-input-field label="example-label" name="example-name" [secure]="true" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>secure: false</h4>
        <ui-otp-input-field
            label="example-label"
            name="example-name"
            [secure]="false"
            (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>size: large</h4>
        <ui-otp-input-field label="example-label" name="example-name" size="large" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>size: medium</h4>
        <ui-otp-input-field label="example-label" name="example-name" size="medium" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>

        <h4>size: small</h4>
        <ui-otp-input-field label="example-label" name="example-name" size="small" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input-field>
    `,
})
export class UIOTPInputFieldExample {
    protected handleChange(code: string): void {
        sendSnackbar(`change event: ${  code}`);
    }
}
