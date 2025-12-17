import { Component, Output, EventEmitter, ViewEncapsulation, input, booleanAttribute } from '@angular/core';

/**
 * A round control that allows user to choose one option from a set. This is the base element and if used directly you
 * must wrap it with a label. This will more often be used in the RadioOption or RadioGroup component.
 *
 * <ui-radio name="example" [value]="'option1'" (checkedChange)="selected = $event ? 'option1' : selected"
 * [disabled]="false" [invalid]="false" [required]="true" aria-label="Option 1"
 *
 * > </ui-radio>
 *
 * @name Radio
 * @phase Utility
 */

export interface RadioProps {
    name: string;
    value: string;
    ariaLabel?: string;
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    invalid?: boolean;
    required?: boolean;
    change: (event: Event) => void;
    selected?: boolean;
    click?: (event: Event) => void;
}

@Component({
    selector: 'ui-radio',
    standalone: true,
    imports: [],
    template: `<input
            [attr.name]="name()"
            [attr.id]="id()"
            [attr.aria-label]="ariaLabel()"
            type="radio"
            [attr.value]="value()"
            [checked]="checked()"
            [attr.checked]="checked() ? '' : null"
            [required]="required()"
            [attr.data-invalid]="invalid() ? true : null"
            [disabled]="disabled()"
            (change)="onInputChange($event)" />
        <span aria-hidden="true"></span>`,
    styleUrl: './radio.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        'data-bspk': 'radio',
    },
})
export class UIRadio {
    /** Emits the new checked state (true or false) */
    @Output() checkedChange = new EventEmitter<boolean>();

    /**
     * The function to call when the radio is checked.
     *
     * @required
     */
    readonly change = input<((event: Event) => void) | undefined>(undefined);

    /**
     * The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.
     *
     * @required
     */
    readonly name = input<string | undefined>(undefined);

    /**
     * The value of the field control.
     *
     * @required
     */
    readonly value = input<string | undefined>(undefined);

    /**
     * The aria-label for the element.
     *
     * This is used to provide an accessible name for the element when a visible label is not present.
     *
     * Ensure this is provided when using the element in isolation to maintain accessibility.
     */
    readonly ariaLabel = input<string | undefined>(undefined);

    /**
     * Marks the radio as checked.
     *
     * @default false
     */
    readonly checked = input(false, { transform: booleanAttribute });

    /**
     * Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).
     *
     * @default false
     */
    readonly disabled = input(false, { transform: booleanAttribute });

    /** The id of the element. If not provided one will be generated. */
    readonly id = input<string | undefined>(undefined);

    /**
     * Indicates that the element is in an invalid state and displays the error theme.
     *
     * If set to true, an accompanying error message should be provided.
     *
     * @default false
     */
    readonly invalid = input(false, { transform: booleanAttribute });

    /**
     * Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).
     *
     * @default false
     */
    readonly required = input(false, { transform: booleanAttribute });

    onInputChange(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.checkedChange.emit(inputElement.checked);
    }
}
