import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { uniqueId } from '@ui/utils/random';
import { UIInput } from '../input';

export interface PasswordProps {
    id?: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    placeholder?: string;
}

/**
 * A password input control that wraps the standard input with type password.
 *
 * ```html
 * <ui-password
 *   name="password"
 *   [value]="passwordValue()"
 *   placeholder="Enter password"
 *   (change)="passwordValue.set($event)" />
 * ```
 *
 * @name Password
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-password',
    imports: [CommonModule, UIInput],
    template: `
        <ui-input
            [id]="id()"
            [name]="name() ?? ''"
            [type]="'password'"
            [value]="value() ?? ''"
            [disabled]="disabled()"
            [readOnly]="readOnly()"
            [required]="required()"
            [placeholder]="placeholder()"
            [ariaLabelledBy]="ariaLabelledBy()"
            [ariaDescribedBy]="ariaDescribedBy()"
            [ariaErrorMessage]="ariaErrorMessage()"
            [ariaLabel]="ariaLabel()"
            (valueChange)="change.emit($event)"></ui-input>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIPassword {
    @Output() change = new EventEmitter<string>();

    readonly id = input<string>(uniqueId('password'));
    readonly name = input.required<string | undefined>();

    readonly value = input<string | undefined>();
    readonly defaultValue = input<string | undefined>();

    readonly disabled = input<boolean>(false);
    readonly readOnly = input<boolean>(false);
    readonly required = input<boolean>(false);
    readonly placeholder = input<string | undefined>();

    readonly ariaLabelledBy = input<string | undefined>();
    readonly ariaDescribedBy = input<string | undefined>();
    readonly ariaErrorMessage = input<string | undefined>();
    readonly ariaLabel = input<string | undefined>();
}
