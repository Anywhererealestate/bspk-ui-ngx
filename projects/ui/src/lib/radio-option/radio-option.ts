import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UIToggleOption } from '../toggle-option/toggle-option';
import { UIRadio, RadioProps } from '../radio/radio';

@Component({
    selector: 'ui-radio-option',
    imports: [UIRadio, UIToggleOption],
    templateUrl: './radio-option.html',
    styleUrl: './radio-option.scss',
})
export class UIRadioOption {
    @Input() label?: string;
    @Input() description?: string;
    @Input() disabled?: boolean;
    @Input() name?: string;
    @Input() value?: string;
    @Input() checked?: boolean;
    @Input() required?: boolean;
    @Input() invalid?: boolean;

    get ariaLabel(): string | undefined {
        return this.description ? `${this.label} - ${this.description}` : this.label;
    }

    @Output() checkedChange = new EventEmitter<boolean>();
}
