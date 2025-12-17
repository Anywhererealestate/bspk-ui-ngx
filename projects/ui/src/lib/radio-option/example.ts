import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RadioProps } from '../radio/radio';
import { UIRadioOption } from './radio-option';

@Component({
    selector: 'ui-radio-option-example',
    standalone: true,
    imports: [CommonModule, UIRadioOption],
    template: `
        <h2>Radio Option</h2>
        <h3>basic</h3>
        <ui-radio-option
            label="Minimal props"
            description="only name, value and id set"
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
            [radioInput]="radioOptionProps(3)"
            (checkedChange)="onCheckedChange(3, $event)">
        </ui-radio-option>

        <h3>disabled = true</h3>
        <ui-radio-option
            label="Option 4"
            description="This is option 4"
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

        <h3>invalid = true</h3>
        <ui-radio-option
            label="Option 6"
            description="This is option 6"
            [radioInput]="radioOptionProps(6)"
            (checkedChange)="onCheckedChange(6, $event)">
        </ui-radio-option>

        <h3>required = true</h3>
        <ui-radio-option
            label="Option 7"
            description="This is option 7"
            [radioInput]="radioOptionProps(7)"
            (checkedChange)="onCheckedChange(7, $event)">
        </ui-radio-option>

        <h3>required = false</h3>
        <ui-radio-option
            label="Option 8"
            description="This is option 8"
            [radioInput]="radioOptionProps(8)"
            (checkedChange)="onCheckedChange(8, $event)">
        </ui-radio-option>

        <h3>disabled = true, invlaid = true</h3>
        <ui-radio-option
            label="Option 9"
            description="This is option 9"
            [radioInput]="radioOptionProps(9)"
            (checkedChange)="onCheckedChange(9, $event)">
        </ui-radio-option>

        <h3>checked = true, disabled = true, invlaid = true</h3>
        <ui-radio-option
            label="Option 10"
            description="This is option 10"
            [radioInput]="radioOptionProps(10)"
            (checkedChange)="onCheckedChange(10, $event)">
        </ui-radio-option>
    `,
})
export class UIRadioOptionExample {
    // Option-specific config
    optionConfig: Record<number, Partial<RadioProps>> = {
        1: { name: 'radio1', value: 'option1', id: 'example id' },
        2: { name: 'radio2', value: 'option2', checked: true },
        3: { name: 'radio3', value: 'option3', checked: true, disabled: true },
        4: { name: 'radio4', value: 'option4', disabled: true },
        5: { name: 'radio5', value: 'option5', checked: true, invalid: true },
        6: { name: 'radio6', value: 'option6', invalid: true },
        7: { name: 'radio7', value: 'option7', required: true },
        8: { name: 'radio8', value: 'option8', required: false },
        9: { name: 'radio9', value: 'option9', invalid: true, disabled: true },
        10: { name: 'radio10', value: 'option10', invalid: true, disabled: true, checked: true },
    };

    radioOptionProps(idx: number): RadioProps {
        return {
            ...this.optionConfig[idx],
            change: () => {
                this.onCheckedChange(idx, !this.optionConfig[idx].checked);
            },
        } as RadioProps;
    }

    onCheckedChange(idx: number, checked: boolean) {
        this.optionConfig[idx].checked = checked;
    }
}
