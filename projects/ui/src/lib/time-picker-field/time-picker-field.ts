import { Component, computed, input, model, ViewEncapsulation } from '@angular/core';
import { AsSignal } from '../../types/common';
import { uniqueId } from '../../utils/random';
import { ControlFieldProps, UIField, describedById, errorMessageId, labelledById } from '../field';
import { TimePickerProps, UITimePicker } from '../time-picker';

export interface TimePickerFieldProps extends TimePickerProps, ControlFieldProps {}

/**
 * A field wrapper for the TimePicker component.
 *
 * @name TimePickerField
 * @phase UXReview
 */
@Component({
    selector: 'ui-time-picker-field',
    standalone: true,
    imports: [UIField, UITimePicker],
    template: `
        <ui-field
            [errorMessage]="errorMessage()"
            [label]="label()"
            [helperText]="helperText()"
            [labelTrailing]="labelTrailing()"
            [controlId]="controlId()"
            [style]="style()"
            [required]="required()">
            <ui-time-picker
                [ariaLabelledBy]="labelledById()"
                [ariaDescribedBy]="describedById()"
                [ariaErrorMessage]="errorMessageId()"
                (valueChange)="value.set($event)"
                [ariaLabel]="ariaLabel()"
                [disabled]="disabled() ?? false"
                [id]="controlId()"
                [invalid]="invalid() ?? false"
                [name]="name()"
                [readOnly]="readOnly() ?? false"
                [value]="value()"
                [required]="required() ?? false"
                [size]="size()" />
        </ui-field>
    `,
    host: {
        'data-bspk': 'time-picker-field',
        '[id]': 'controlId()+"-field"',
    },
    styleUrl: '../field/field.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UITimePickerField implements AsSignal<TimePickerFieldProps> {
    readonly errorMessage = input<TimePickerFieldProps['errorMessage']>(undefined);
    readonly label = input.required<TimePickerFieldProps['label']>();
    readonly helperText = input<TimePickerFieldProps['helperText']>(undefined);
    readonly labelTrailing = input<TimePickerFieldProps['labelTrailing']>(undefined);
    readonly style = input<TimePickerFieldProps['style']>(undefined);
    readonly required = input<TimePickerFieldProps['required']>(false);
    readonly id = input<TimePickerFieldProps['id']>(undefined);
    readonly name = input<TimePickerFieldProps['name']>();
    readonly value = model<TimePickerFieldProps['value']>(undefined);
    readonly disabled = input<TimePickerFieldProps['disabled']>(false);
    readonly readOnly = input<TimePickerFieldProps['readOnly']>(false);
    readonly invalid = input<TimePickerFieldProps['invalid']>(false);
    readonly ariaLabel = input<TimePickerFieldProps['ariaLabel']>(undefined);
    readonly size = input<TimePickerFieldProps['size']>('medium');

    readonly labelledById = computed(() => labelledById(this.controlId()));
    readonly describedById = computed(() => (this.helperText() && describedById(this.controlId())) || undefined);
    readonly errorMessageId = computed(() => (this.errorMessage() && errorMessageId(this.controlId())) || undefined);
    readonly controlId = computed(() => this.id() || uniqueId('UITimePickerField-'));
}
