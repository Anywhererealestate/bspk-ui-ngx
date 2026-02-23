import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { UIField } from '../field';
import { UIOTPInput } from '../otp-input';

let __otpFieldId = 0;
function nextOtpFieldId() {
    __otpFieldId += 1;
    return `otp-field-${__otpFieldId}`;
}

@Component({
    standalone: true,
    selector: 'ui-otp-input-field',
    imports: [CommonModule, UIField, UIOTPInput],
    template: `
        <ui-field
            [controlId]="id()"
            [errorMessage]="errorMessage()"
            [helperText]="helperText()"
            [label]="label()"
            [labelTrailing]="labelTrailing()"
            [required]="required()">
            <ui-otp-input
                [id]="id()"
                [name]="name()"
                [length]="length()"
                [size]="size()"
                [defaultValue]="defaultValue()"
                [disabled]="disabled()"
                [readOnly]="readOnly()"
                [required]="required()"
                [invalid]="!!errorMessage()"
                [alphanumeric]="alphanumeric()"
                [secure]="secure()"
                [ariaLabel]="ariaLabel()"
                [ariaDescribedBy]="describedById"
                [ariaErrorMessage]="errorMessageId"
                (change)="change.emit($event)"></ui-otp-input>
        </ui-field>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIOTPInputField {
    readonly label = input.required<string>();
    readonly helperText = input<string | undefined>(undefined);
    readonly labelTrailing = input<string | undefined>(undefined);
    readonly errorMessage = input<string | undefined>(undefined);

    readonly id = input<string>(() => nextOtpFieldId());
    readonly name = input.required<string | undefined>(undefined);

    readonly length = input<number>(6);
    readonly size = input<'large' | 'medium' | 'small'>('medium');
    readonly defaultValue = input<string>('');
    readonly disabled = input<boolean>(false);
    readonly readOnly = input<boolean>(false);
    readonly required = input<boolean>(false);
    readonly alphanumeric = input<boolean>(false);
    readonly secure = input<boolean>(false);
    readonly ariaLabel = input<string>('OTP input');

    @Output() change = new EventEmitter<string>();

    get describedById(): string {
        return `${this.id()}-description`;
    }

    get errorMessageId(): string {
        return `${this.id()}-error`;
    }
}
