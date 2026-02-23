import { Component, computed, input, model, ViewEncapsulation } from '@angular/core';
import { AsSignal } from '../../types/common';
import { uniqueId } from '../../utils/random';
import { ControlFieldProps, UIField, describedById, errorMessageId, labelledById } from '../field';
import { PasswordProps, UIPassword } from '../password';

export interface PasswordFieldProps extends PasswordProps, ControlFieldProps {
    ariaLabel?: string;
}

/**
 * A field wrapper for the Password component.
 *
 * This component takes properties from the Field and Password components.
 *
 * @name PasswordField
 * @phase UXReview
 *
 * @generated
 */
@Component({
    selector: 'ui-password-field',
    standalone: true,
    imports: [UIField, UIPassword],
    template: `
        <ui-field
            [errorMessage]="errorMessage()"
            [label]="label()"
            [helperText]="helperText()"
            [labelTrailing]="labelTrailing()"
            [controlId]="controlId()"
            [style]="style()"
            [required]="required()">
            <ui-password
                [ariaLabelledBy]="labelledById()"
                [ariaDescribedBy]="describedById()"
                [ariaErrorMessage]="errorMessageId()"
                (change)="value.set($event)"
                [ariaLabel]="ariaLabel()"
                [disabled]="disabled() ?? false"
                [id]="controlId()"
                [name]="name()"
                [readOnly]="readOnly() ?? false"
                [value]="value()"
                [required]="required() ?? false"
                [placeholder]="placeholder()" />
        </ui-field>
    `,
    host: {
        'data-bspk': 'password-field',
        '[id]': 'controlId()+"-field"',
    },
    styleUrl: '../field/field.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UIPasswordField implements AsSignal<PasswordFieldProps> {
    readonly errorMessage = input<PasswordFieldProps['errorMessage']>(undefined);
    readonly label = input.required<PasswordFieldProps['label']>();
    readonly helperText = input<PasswordFieldProps['helperText']>(undefined);
    readonly labelTrailing = input<PasswordFieldProps['labelTrailing']>(undefined);
    readonly style = input<PasswordFieldProps['style']>(undefined);
    readonly required = input<PasswordFieldProps['required']>(false);
    readonly id = input<PasswordFieldProps['id']>(undefined);
    readonly name = input.required<PasswordFieldProps['name']>();
    readonly value = model<PasswordFieldProps['value']>(undefined);
    readonly disabled = input<PasswordFieldProps['disabled']>(false);
    readonly readOnly = input<PasswordFieldProps['readOnly']>(false);
    readonly placeholder = input<PasswordFieldProps['placeholder']>(undefined);
    readonly ariaLabel = input<PasswordFieldProps['ariaLabel']>(undefined);

    readonly labelledById = computed(() => labelledById(this.controlId()));

    readonly describedById = computed(() => (this.helperText() && describedById(this.controlId())) || undefined);
    readonly errorMessageId = computed(() => (this.errorMessage() && errorMessageId(this.controlId())) || undefined);

    readonly controlId = computed(() => this.id() || uniqueId('UIPasswordField-'));
}
