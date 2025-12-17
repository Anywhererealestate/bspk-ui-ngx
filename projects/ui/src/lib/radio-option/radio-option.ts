import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UIListItem } from '../list-item';
import { UIRadio, RadioProps } from '../radio/radio';

/**
 * A control that allows users to choose one or more items from a list or turn an feature on or off.
 *
 * If only a radio button is needed, consider using the Radio component directly.
 *
 * @name RadioOption
 * @phase Utility
 */

@Component({
    selector: 'ui-radio-option',
    imports: [UIRadio, UIListItem],
    template: `<ui-list-item
        [label]="label"
        [subText]="description ?? ''"
        [disabled]="radioInput?.disabled"
        data-bspk="radio-option"
        [attr.aria-disabled]="radioInput?.disabled ?? null"
        as="label">
        <ui-radio
            data-leading
            [id]="radioInput?.id"
            [name]="radioInput?.name ?? ''"
            [value]="radioInput?.value"
            [checked]="radioInput?.checked ?? false"
            [disabled]="radioInput?.disabled"
            [required]="radioInput?.required ?? false"
            [invalid]="radioInput?.invalid ?? false"
            [ariaLabel]="ariaLabel"
            (checkedChange)="checkedChange.emit($event)">
        </ui-radio>
    </ui-list-item>`,
})
export class UIRadioOption {
    /** The label of the option. Also used as the aria-label of the control. */
    @Input() label!: string;
    /** The description of the option. */
    @Input() description?: string;
    /** The input properties for the radio control. */
    @Input() radioInput?: RadioProps;
    /** Emits the new checked state (true or false) */
    @Output() checkedChange = new EventEmitter<boolean>();
    /** The aria-label for the radio element. Combines label and description if both are present. */
    get ariaLabel(): string | undefined {
        return this.description ? `${this.label} - ${this.description}` : this.label;
    }
}
