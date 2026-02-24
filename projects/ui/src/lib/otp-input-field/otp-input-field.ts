import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { uniqueId } from '@ui/utils/random';
import { AsSignal } from '../../types/common';
import { UIField } from '../field';
import { UIOTPInput } from '../otp-input';

export interface OTPInputFieldProps {
    label: string;
    helperText?: string;
    labelTrailing?: string;
    errorMessage?: string;
    id?: string;
    name?: string;
    length?: number;
    size?: 'large' | 'medium' | 'small';
    defaultValue?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    alphanumeric?: boolean;
    secure?: boolean;
    ariaLabel?: string;
}

/**
 * A field wrapper that combines a label, helper/error text, and an OTP input.
 *
 * ```html
 * <ui-otp-input-field
 *     name="otp-input-field-name"
 *     label="Verification code"
 *     [length]="6"
 *     (change)="onCode($event)" />
 * ```
 *
 * ```typescript
 * onCode(nextCode: string) {
 *     sendSnackbar(`Code: ${nextCode}`);
 * }
 * ```
 *
 * @name OTPInputField
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-otp-input-field',
    imports: [CommonModule, UIField, UIOTPInput],
    template: `
        <ui-field
            [controlId]="id() || ''"
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
export class UIOTPInputField implements AsSignal<OTPInputFieldProps> {
    @Output() change = new EventEmitter<string>();

    readonly label = input.required<OTPInputFieldProps['label']>();
    readonly helperText = input<OTPInputFieldProps['helperText']>();
    readonly labelTrailing = input<OTPInputFieldProps['labelTrailing']>();
    readonly errorMessage = input<OTPInputFieldProps['errorMessage']>();

    readonly id = input<OTPInputFieldProps['id']>(uniqueId('UIOTPInputField'));
    readonly name = input.required<OTPInputFieldProps['name']>();

    readonly length = input<OTPInputFieldProps['length']>(6);
    readonly size = input<OTPInputFieldProps['size']>('medium');
    readonly defaultValue = input<OTPInputFieldProps['defaultValue']>('');
    readonly disabled = input<OTPInputFieldProps['disabled']>(false);
    readonly readOnly = input<OTPInputFieldProps['readOnly']>(false);
    readonly required = input<OTPInputFieldProps['required']>(false);
    readonly alphanumeric = input<OTPInputFieldProps['alphanumeric']>(false);
    readonly secure = input<OTPInputFieldProps['secure']>(false);
    readonly ariaLabel = input<OTPInputFieldProps['ariaLabel']>('OTP input');

    get describedById(): string {
        return `${this.id()}-description`;
    }

    get errorMessageId(): string {
        return `${this.id()}-error`;
    }
}
