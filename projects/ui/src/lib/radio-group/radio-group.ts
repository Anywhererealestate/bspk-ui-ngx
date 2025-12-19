import { Component, ViewEncapsulation, input, Output, EventEmitter } from '@angular/core';
import { UIRadioOption } from '../radio-option/radio-option';

export interface RadioGroupOption {
    value: string;
    label: string;
    description?: string;
    checked?: boolean;
    disabled?: boolean;
}

/**
 * A group of radios that allows users to choose one or more items from a list or turn an feature on or off.
 *
 * For a more complete example with field usage, see the RadioGroupField component.
 *
 * @example
 *     import { useState } from 'react';
 *     import { RadioGroup } from '@bspk/ui/RadioGroup';
 *
 *     () => {
 *     const [selectedOption, setSelectedOption] = useState<string>('1');
 *
 *     return (
 *     <RadioGroup
 *     name="example-name"
 *     onChange={(nextValue) => setSelectedOption(nextValue)}
 *     options={[
 *     {
 *     value: '1',
 *     label: 'Option 1',
 *     description: 'Description here',
 *     },
 *     { value: '2', label: 'Option 2' },
 *     { value: '3', label: 'Option 3' },
 *     ]}
 *     value={selectedOption}
 *     />
 *     );
 *     };
 *
 * @name RadioGroup
 * @phase UXReview
 */

@Component({
    selector: 'ui-radio-group',
    standalone: true,
    imports: [UIRadioOption],
    template: `
        <div
            [attr.aria-describedby]="ariaDescribedBy() || null"
            [attr.aria-errormessage]="ariaErrorMessage() || null"
            [attr.id]="id()"
            role="radiogroup"
            data-bspk="radio-group"
            style="display: flex; flex-direction: column; gap: 0; max-width: 100%; --list-item-height: auto;">
            @for (option of options(); track option.value) {
                <ui-radio-option
                    [label]="option.label"
                    [description]="option.description"
                    [name]="name()"
                    [value]="option.value"
                    [checked]="value() === option.value"
                    [disabled]="disabled() || option.disabled"
                    [required]="required()"
                    [invalid]="invalid()"
                    (checkedChange)="onRadioChange(option.value, $event)">
                </ui-radio-option>
            }
        </div>
    `,
    // styleUrl: './radio-group.scss',
    host: {
        'data-bspk': 'radio-group',
        'style.display': 'flex',
        'style.flex-direction': 'column',
        'style.gap': '0',
        'style.max-width': '100%',
        'style.--list-item-height': 'auto',
    },
    encapsulation: ViewEncapsulation.None,
})
export class UIRadioGroup extends UIRadioOption {
    @Output() valueChange = new EventEmitter<string>();

    options = input<RadioGroupOption[]>([]);
    ariaDescribedBy = input<string | null>(null);
    ariaErrorMessage = input<string | null>(null);

    onRadioChange(value: string, checked: boolean) {
        if (checked) {
            this.valueChange.emit(value);
        }
    }
}
