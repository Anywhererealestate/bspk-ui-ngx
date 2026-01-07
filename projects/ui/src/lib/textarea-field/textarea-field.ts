import { Component, computed, input, output, ViewEncapsulation } from '@angular/core';
import { AsInputSignal } from '../../types/common';
import { uniqueId } from '../../utils';
import { describedById, errorMessageId, FieldProps, labelledById, UIField } from '../field';
import { UITextarea } from '../textarea';

@Component({
    selector: 'ui-textarea-field',
    standalone: true,
    imports: [UIField, UITextarea],
    template: `
        <ui-field
            [errorMessage]="errorMessage()"
            [label]="label()"
            [helperText]="helperText()"
            [labelTrailing]="labelTrailing()"
            [controlId]="controlId()"
            [style]="style()"
            [required]="required()">
            <ui-textarea
                [ariaLabelledBy]="labelledById()"
                [ariaDescribedBy]="describedById()"
                [ariaErrorMessage]="errorMessageId()"
                (valueChange)="valueChange.emit($event)"
                [ariaLabel]="ariaLabel()"
                [disabled]="disabled()"
                [id]="controlId()"
                [invalid]="invalid()"
                [name]="name()"
                [placeholder]="placeholder()"
                [readOnly]="readOnly()"
                [value]="value()"
                [required]="required()"
                [size]="size()"
                [maxLength]="maxLength()"
                [minRows]="minRows()"
                [maxRows]="maxRows()" />
        </ui-field>
    `,
    host: {
        'data-bspk': 'textarea-field',
        '[id]': 'controlId()+"-field"',
    },
    styleUrl: '../field/field.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UITextareaField extends UITextarea implements AsInputSignal<Omit<FieldProps, 'controlId' | 'label'>> {
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
