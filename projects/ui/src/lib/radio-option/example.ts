import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIRadioOption } from './radio-option';

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
            [value]="'option1'"
            [name]="'example'"></ui-radio-option>
    `,
})
export class UIRadioOptionExample {}
