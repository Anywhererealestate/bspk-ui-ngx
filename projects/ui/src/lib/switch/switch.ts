import { Component, Output, EventEmitter, ViewEncapsulation, input, booleanAttribute } from '@angular/core';

/**
 * A control element that allows users to toggle between two states, typically representing on/off. This is the base
 * element and if used directly you must wrap it with a label.
 *
 * @name UISwitch
 * @phase Dev
 */
@Component({
    selector: 'ui-switch',
    standalone: true,
    imports: [],
    template: `
        <input
            type="checkbox"
            [attr.aria-label]="ariaLabel()"
            [checked]="checked()"
            [disabled]="disabled()"
            [attr.name]="name()"
            [attr.id]="id()"
            [attr.value]="value()"
            (change)="onInputChange($event)" />
        <span aria-hidden="true"></span>
    `,
    styleUrl: './switch.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        'data-bspk': 'switch',
    },
})
export class UISwitch {
    /** Emits the new checked state (true or false) */
    @Output() checkedChange = new EventEmitter<boolean>();

    /** The value of the switch. */
    readonly value = input.required<string | undefined>();

    /** Marks the control as checked. */
    readonly checked = input(false, { transform: booleanAttribute });

    /** The aria-label for the element. */
    readonly ariaLabel = input<string | undefined>(undefined);

    /** The name of the control. */
    readonly name = input<string | undefined>(undefined);

    /** The id of the control. */
    readonly id = input<string | undefined>(undefined);

    /** Determines if the element is disabled. */
    readonly disabled = input(false, { transform: booleanAttribute });

    onInputChange(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.checkedChange.emit(inputElement.checked);
    }
}
