import { Component } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { UIOTPInput } from '../otp-input';

@Component({
    selector: 'ui-otp-input-example',
    standalone: true,
    imports: [UIOTPInput],
    template: `
        <h4>Default</h4>
        <ui-otp-input name="example-name" (onChange)="handleChange($event)"> Example Content </ui-otp-input>

        <h4>alphanumeric: true</h4>
        <ui-otp-input [alphanumeric]="true" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>alphanumeric: false</h4>
        <ui-otp-input [alphanumeric]="false" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>ariaDescribedBy</h4>
        <ui-otp-input ariaDescribedBy="example-ariaDescribedBy" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>ariaErrorMessage</h4>
        <ui-otp-input ariaErrorMessage="example-ariaErrorMessage" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>ariaLabel</h4>
        <ui-otp-input ariaLabel="example-ariaLabel" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>defaultValue</h4>
        <ui-otp-input defaultValue="example-defaultValue" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>disabled: true</h4>
        <ui-otp-input [disabled]="true" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>disabled: false</h4>
        <ui-otp-input [disabled]="false" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>id</h4>
        <ui-otp-input id="example-id" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>invalid: true</h4>
        <ui-otp-input [invalid]="true" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>invalid: false</h4>
        <ui-otp-input [invalid]="false" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>length</h4>
        <ui-otp-input [length]="12" name="example-name" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>name</h4>
        <ui-otp-input name="example-name" (onChange)="handleChange($event)"> Example Content </ui-otp-input>

        <h4>readOnly: true</h4>
        <ui-otp-input name="example-name" [readOnly]="true" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>readOnly: false</h4>
        <ui-otp-input name="example-name" [readOnly]="false" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>required: true</h4>
        <ui-otp-input name="example-name" [required]="true" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>required: false</h4>
        <ui-otp-input name="example-name" [required]="false" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>secure: true</h4>
        <ui-otp-input name="example-name" [secure]="true" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>secure: false</h4>
        <ui-otp-input name="example-name" [secure]="false" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>size: large</h4>
        <ui-otp-input name="example-name" size="large" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>size: medium</h4>
        <ui-otp-input name="example-name" size="medium" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>

        <h4>size: small</h4>
        <ui-otp-input name="example-name" size="small" (onChange)="handleChange($event)">
            Example Content
        </ui-otp-input>
    `,
})
export class UIOTPInputExample {
    protected handleChange(code: string): void {
        sendSnackbar(`change event: ${  code}`);
    }
}
