import { Component, computed, input, output, ViewEncapsulation } from '@angular/core';
import { AsInputSignal } from '../../types/common';
import { uniqueId } from '../../utils';
import { FieldProps, UIField, describedById, errorMessageId, labelledById } from '../field';
import { UIInput } from '../input';

@Component({
    selector: 'ui-input-field',
    standalone: true,
    imports: [UIField, UIInput],
    template: `
        <ui-field
            [errorMessage]="errorMessage()"
            [label]="label()"
            [helperText]="helperText()"
            [labelTrailing]="labelTrailing()"
            [controlId]="controlId()"
            [style]="style()"
            [required]="required()">
            <ui-input
                [ariaLabelledBy]="labelledById()"
                [ariaDescribedBy]="describedById()"
                [ariaErrorMessage]="errorMessageId()"
                (valueChange)="valueChange.emit($event)"
                [ariaLabel]="ariaLabel()"
                [autoComplete]="autoComplete()"
                [disabled]="disabled()"
                [id]="controlId()"
                [invalid]="invalid()"
                [leading]="leading()"
                [name]="name()"
                [owner]="'input-field'"
                [placeholder]="placeholder()"
                [placeholder]="placeholder()"
                [readOnly]="readOnly()"
                [value]="value()"
                [required]="required()"
                [showClearButton]="showClearButton()"
                [size]="size()"
                [trailing]="trailing()"
                [type]="type()" />
        </ui-field>
    `,
    host: {
        'data-bspk': 'input-field',
        '[id]': 'controlId()+"-field"',
    },
    styleUrl: '../field/field.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UIInputField extends UIInput implements AsInputSignal<Omit<FieldProps, 'controlId' | 'label'>> {
    readonly valueChange = output<string | undefined>();

    readonly errorMessage = input<string | undefined>(undefined);
    readonly label = input.required<string>();
    readonly helperText = input<string | undefined>(undefined);
    readonly labelTrailing = input<string | undefined>(undefined);
    readonly style = input<string | undefined>(undefined);

    readonly labelledById = computed(() => labelledById(this.controlId()));

    readonly describedById = computed(
        () => this.ariaDescribedBy() || (this.helperText() && describedById(this.controlId())) || undefined,
    );
    readonly errorMessageId = computed(
        () => this.ariaErrorMessage() || (this.errorMessage() && errorMessageId(this.controlId())) || undefined,
    );

    readonly controlId = computed(() => this.id() || uniqueId('input-field-'));
}
