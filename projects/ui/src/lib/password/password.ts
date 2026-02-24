import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
    ViewEncapsulation,
    input,
    model,
} from '@angular/core';
import { uniqueId } from '@ui/utils/random';
import { AsSignal } from '../../types/common';
import { UIInput } from '../input';

export interface PasswordProps {
    id?: string;
    name?: string | undefined;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    placeholder?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    ariaErrorMessage?: string;
    ariaLabel?: string;
}

/**
 * A password input control that wraps the standard input with type password.
 *
 * ```html
 * <ui-password name="password" [(value)]="passwordValue" placeholder="Enter password" />
 * ```
 *
 * @name Password
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-password',
    imports: [CommonModule, UIInput],
    styleUrl: './password.scss',
    host: {
        'data-bspk-owner': 'password',
    },
    template: `
        <ui-input
            [id]="id()"
            [name]="name() ?? ''"
            [type]="'password'"
            [(value)]="value"
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
export class UIPassword implements AsSignal<PasswordProps> {
    @Output() change = new EventEmitter<string>();

    readonly id = input<PasswordProps['id']>(uniqueId('password'));
    readonly name = input.required<PasswordProps['name']>();

    readonly value = model<PasswordProps['value']>('');
    readonly defaultValue = input<PasswordProps['defaultValue']>();

    readonly disabled = input<PasswordProps['disabled']>(false);
    readonly readOnly = input<PasswordProps['readOnly']>(false);
    readonly required = input<PasswordProps['required']>(false);
    readonly placeholder = input<PasswordProps['placeholder']>();

    readonly ariaLabelledBy = input<PasswordProps['ariaLabelledBy']>();
    readonly ariaDescribedBy = input<PasswordProps['ariaDescribedBy']>();
    readonly ariaErrorMessage = input<PasswordProps['ariaErrorMessage']>();
    readonly ariaLabel = input<PasswordProps['ariaLabel']>();
}
