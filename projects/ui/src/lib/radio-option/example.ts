import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIRadioOption } from './radio-option';
import { RadioProps } from '../radio/radio';

@Component({
    selector: 'ui-radio-option-example',
    standalone: true,
    imports: [CommonModule, UIRadioOption],
    template: `
        <h2>Radio Option</h2>
        <h3>basic</h3>
        <ui-radio-option
            label="Option 1"
            description="This is option 1"
            [radioInput]="radioOptionProps(1)"
            (checkedChange)="onCheckedChange(1, $event)">
        </ui-radio-option>

        <h3>checked = true</h3>
        <ui-radio-option
            label="Option 2"
            description="This is option 2"
            [radioInput]="radioOptionProps(2)"
            (checkedChange)="onCheckedChange(2, $event)">
        </ui-radio-option>

        <h3>checked = true, disabled = true</h3>
        <ui-radio-option
            label="Option 3"
            description="This is option 3"
            [disabled]="true"
            [radioInput]="radioOptionProps(3)"
            (checkedChange)="onCheckedChange(3, $event)">
        </ui-radio-option>

        <h3>checked = false, disabled = true</h3>
        <ui-radio-option
            label="Option 4"
            description="This is option 4"
            [disabled]="true"
            [radioInput]="radioOptionProps(4)"
            (checkedChange)="onCheckedChange(4, $event)">
        </ui-radio-option>

        <h3>checked = true, invalid = true</h3>
        <ui-radio-option
            label="Option 5"
            description="This is option 5"
            [radioInput]="radioOptionProps(5)"
            (checkedChange)="onCheckedChange(5, $event)">
        </ui-radio-option>

        <h3>checked = false, invalid = true</h3>
        <ui-radio-option
            label="Option 6"
            description="This is option 6"
            [radioInput]="radioOptionProps(6)"
            (checkedChange)="onCheckedChange(6, $event)">
        </ui-radio-option>

        <h3>checked = false, required = true</h3>
        <ui-radio-option
            label="Option 7"
            description="This is option 7"
            [radioInput]="radioOptionProps(7)"
            (checkedChange)="onCheckedChange(7, $event)">
        </ui-radio-option>

        <h3>checked = false, required = false</h3>
        <ui-radio-option
            label="Option 8"
            description="This is option 8"
            [radioInput]="radioOptionProps(8)"
            (checkedChange)="onCheckedChange(8, $event)">
        </ui-radio-option>

        <h3>checked = false, disabled = true, invlaid = true</h3>
        <ui-radio-option
            label="Option 9"
            description="This is option 9"
            [disabled]="true"
            [radioInput]="radioOptionProps(9)"
            (checkedChange)="onCheckedChange(9, $event)">
        </ui-radio-option>

        <h3>checked = true, disabled = true, invlaid = true</h3>
        <ui-radio-option
            label="Option 10"
            description="This is option 10"
            [disabled]="true"
            [radioInput]="radioOptionProps(10)"
            (checkedChange)="onCheckedChange(10, $event)">
        </ui-radio-option>
    `,
})
export class UIRadioOptionExample {
    // Use a single state object for all checked values
    checked: Record<number, boolean> = {
        1: false,
        2: true,
        3: true,
        4: false,
        5: true,
        6: false,
        7: false,
        8: false,
        9: false,
        10: true,
    };

    // Option-specific config
    optionConfig: Record<number, Partial<RadioProps>> = {
        1: { name: 'radio1', value: 'option1', required: false, invalid: false },
        2: { name: 'radio2', value: 'option2', required: false, invalid: false },
        3: { name: 'radio3', value: 'option3', required: false, invalid: false },
        4: { name: 'radio4', value: 'option4', required: false, invalid: false },
        5: { name: 'radio5', value: 'option5', required: false, invalid: true },
        6: { name: 'radio6', value: 'option6', required: false, invalid: true },
        7: { name: 'radio7', value: 'option7', required: true, invalid: false },
        8: { name: 'radio8', value: 'option8', required: false, invalid: false },
        9: { name: 'radio9', value: 'option9', required: false, invalid: true, disabled: true },
        10: { name: 'radio10', value: 'option10', required: false, invalid: true, disabled: true },
    };

    radioOptionProps(idx: number): RadioProps {
        return {
            ...this.optionConfig[idx],
            checked: this.checked[idx],
            // Provide a no-op or meaningful change handler if required by RadioProps
            change: () => {
                this.onCheckedChange(idx, !this.checked[idx]);
            },
        } as RadioProps;
    }

    onCheckedChange(idx: number, checked: boolean) {
        this.checked[idx] = checked;
    }
}
