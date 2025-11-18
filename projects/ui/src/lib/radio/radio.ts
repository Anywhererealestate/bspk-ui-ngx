import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ui-radio',
    standalone: true,
    imports: [],
    templateUrl: './radio.html',
    styleUrl: './radio.scss',
})
export class Radio {
    /**
     * The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name) of the control.
     *
     * @required
     */
    @Input() name?: string;

    /**
     * The value of the field control.
     *
     * @required
     */
    @Input() value?: string;

    /**
     * The aria-label for the element.
     *
     * This is used to provide an accessible name for the element when a visible label is not present.
     *
     * Ensure this is provided when using the element in isolation to maintain accessibility.
     */
    @Input('aria-label') ariaLabel?: string;

    /**
     * Marks the radio as checked.
     *
     * @default false
     */
    @Input() checked = false;

    /**
     * Determines if the element is [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled).
     *
     * @default false
     */
    @Input() disabled?: boolean;

    /** The id of the element. If not provided one will be generated. */
    @Input() id?: string;

    /**
     * Indicates that the element is in an invalid state and displays the error theme.
     *
     * If set to true, an accompanying error message should be provided.
     *
     * @default false
     */
    @Input() invalid?: boolean;

    /**
     * Determines if the element is [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).
     *
     * @default false
     */
    @Input() required?: boolean;

    @Input('aria-describedby') ariaDescribedby?: string;

    @Input('aria-labelledby') ariaLabelledby?: string;

    @Output() checkedChange = new EventEmitter<boolean>();
    /**
     * The function to call when the radio is checked.
     *
     * @required
     */
    @Output() change = new EventEmitter<Event>();

    onInputChange(event: Event) {
        const input = event.target as HTMLInputElement;
        this.checkedChange.emit(input.checked);
        this.change.emit(event);
    }
}
