import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
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

let __pwdId = 0;
function nextPwdId() {
    __pwdId += 1;
    return `pwd-${__pwdId}`;
}

/**
 * Minimal password input wrapper. React versions often add "show/hide" with icons. Icons are removed, so this stays as
 * a password-type input only.
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

    readonly id = input<string>(nextPwdId());
    readonly name = input.required<string | undefined>(undefined);

    readonly value = input<string | undefined>(undefined);
    readonly defaultValue = input<string | undefined>(undefined);

    readonly disabled = input<boolean>(false);
    readonly readOnly = input<boolean>(false);
    readonly required = input<boolean>(false);
    readonly placeholder = input<string | undefined>(undefined);

    readonly ariaLabelledBy = input<string | undefined>(undefined);
    readonly ariaDescribedBy = input<string | undefined>(undefined);
    readonly ariaErrorMessage = input<string | undefined>(undefined);
    readonly ariaLabel = input<string | undefined>(undefined);
}
