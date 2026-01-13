import { Component, ElementRef, input, model, viewChild, ViewEncapsulation } from '@angular/core';
import { AsInputSignal, CommonProps, FieldControlProps } from '../../types/common';
import { IconCancel } from '../icons/cancel';
import { UIIncrementButton } from './increment-button';

export type InputProps = CommonProps<'owner' | 'size'> &
    FieldControlProps & {
        /**
         * The amount to increment or decrement the value by when the (+) or (-) buttons are pressed.
         *
         * @default 1
         */
        step?: number;
    };

/**
 * A input element that allows users to either input a numerical value or singularly increase or decrease the values by
 * pressing the (+) or (-).
 *
 * The value of the input is a number. The value is clamped to the min and max values if they are provided.
 *
 * For a more complete example with field usage, see the InputNumberField component.
 *
 * @example
 *     <ui-input-number
 *     [value]="inputValue()"
 *     (valueChange)="updateInput($event)"
 *     id="default-input-number"
 *     name="default-input-number"
 *     ariaLabel="Input Number Label "/>
 *
 * @name InputNumber
 * @phase UXReview
 */
@Component({
    selector: 'ui-input-number',
    imports: [UIIncrementButton],
    template: `
        <ui-increment-button
            kind="remove"
            (click)="incrementHandler('remove')"
            [disabled]="disabled()"></ui-increment-button>
        <input
            data-main-input
            [attr.aria-labelledby]="ariaLabelledBy() || null"
            [attr.aria-describedby]="ariaDescribedBy() || null"
            [attr.ariaErrorMessage]="ariaErrorMessage() || null"
            [attr.aria-label]="ariaLabel() || null"
            [attr.aria-invalid]="invalid() || null"
            [attr.data-invalid]="invalid() || null"
            [disabled]="this.disabled()"
            [attr.id]="id() || null"
            [attr.name]="name() || null"
            [readOnly]="readOnly() || null"
            [required]="required() || null"
            [value]="value() || ''"
            (input)="handleInput($event)"
            inputMode="numeric"
            type="number"
            #inputEl />
        <ui-increment-button kind="add" (click)="incrementHandler('add')" [disabled]="disabled()"></ui-increment-button>
    `,
    styleUrl: './input-number.scss',
    providers: [],
    host: {
        'data-bspk': 'input-number',
        '[attr.data-size]': 'size()',
        '[attr.data-invalid]': 'invalid() || null',
    },
    encapsulation: ViewEncapsulation.None,
})
export class UIInputNumber implements AsInputSignal<InputProps> {
    public IconCancel = IconCancel;

    readonly inputEl = viewChild.required<ElementRef<HTMLInputElement>>('inputEl');

    readonly value = model<InputProps['value']>('');
    readonly name = input.required<InputProps['name']>();

    readonly disabled = input<InputProps['disabled']>(false);
    readonly invalid = input<InputProps['invalid']>(false);
    readonly readOnly = input<InputProps['readOnly']>(false);
    readonly required = input<InputProps['required']>(false);
    readonly size = input<InputProps['size']>('medium');
    readonly id = input<InputProps['id']>(undefined);
    readonly owner = input<InputProps['owner']>(undefined);
    readonly ariaLabel = input<InputProps['ariaLabel']>(undefined);
    readonly step = input<InputProps['step']>(1);

    readonly ariaLabelledBy = input<InputProps['ariaLabelledBy']>(undefined);
    readonly ariaDescribedBy = input<InputProps['ariaDescribedBy']>(undefined);
    readonly ariaErrorMessage = input<InputProps['ariaErrorMessage']>(undefined);

    incrementHandler(kind: 'add' | 'remove') {
        if (this.readOnly() || this.disabled()) {
            return;
        }

        const newValue = this.value() ? Number(this.value()) : 0;
        const stepValue = this.step() || 1;

        if (kind === 'add') {
            this.value.set((newValue + stepValue).toString());
        } else {
            this.value.set((newValue - stepValue).toString());
        }
    }

    handleInput(event: Event) {
        this.value.set((event.target as HTMLInputElement).value);
    }
}
