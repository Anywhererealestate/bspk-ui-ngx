import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { RadioProps } from '../radio/radio';
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
            [attr.aria-describedby]="ariaDescribedBy"
            [attr.aria-errormessage]="ariaErrorMessage"
            [attr.id]="id"
            role="radiogroup"
            data-bspk="radio-group"
            style="display: flex; flex-direction: column; gap: 0; max-width: 100%; --list-item-height: auto;">
            @for (option of options; track option.value) {
                <ui-radio-option
                    [label]="option.label"
                    [description]="option.description"
                    [radioInput]="getRadioProps(option)"
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
export class UIRadioGroup {
    @Input() options: RadioGroupOption[] = [];
    @Input() name!: string;
    @Input() value?: string;
    @Input() disabled = false;
    @Input() invalid?: boolean;
    @Input() required?: boolean;
    @Input() id?: string;
    @Input() ariaDescribedBy?: string;
    @Input() ariaErrorMessage?: string;

    @Output() valueChange = new EventEmitter<string>();

    getRadioProps(option: RadioGroupOption): RadioProps {
        return {
            name: this.name,
            value: option.value,
            checked: this.value === option.value,
            disabled: this.disabled || option.disabled,
            required: this.required,
            invalid: this.invalid,
            change: (event: Event) => {
                // Optionally, you can extract the checked value from the event if needed
                this.onRadioChange(option.value, (event.target as HTMLInputElement).checked);
            },
        };
    }

    onRadioChange(value: string, checked: boolean) {
        if (checked) {
            this.valueChange.emit(value);
        }
    }
}
