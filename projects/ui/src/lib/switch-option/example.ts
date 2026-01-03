import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UISwitchOption } from './switch-option';

@Component({
    selector: 'ui-switch-option-example',
    standalone: true,
    imports: [CommonModule, UISwitchOption],
    template: `
        <h2>Switch Option</h2>
        @for (ex of examples; track $index) {
            <h3>{{ ex.label }}</h3>
            <ui-switch-option
                [label]="'This is ' + ex.label"
                [description]="'This is description for ' + ex.label"
                [id]="ex.id"
                [name]="ex.name || 'example-switch-group'"
                [value]="ex.value || ex.label || 'option' + $index"
                [checked]="ex.checked"
                [disabled]="ex.disabled"
                [ariaLabel]="ex.ariaLabel"
                (checkedChange)="onCheckedChange($index, $event)" />
        }
    `,
})
export class UISwitchOptionExample {
    examples: (Partial<{
        label: string;
        description: string;
        name: string;
        value: string;
        checked: boolean;
        disabled: boolean;
        invalid: boolean;
        required: boolean;
        ariaLabel: string;
    }> & { id: string })[] = [
        { label: 'basic' },
        { label: 'checked = true', checked: true },
        { label: 'checked = true, disabled = true', checked: true, disabled: true },
        { label: 'disabled = true', disabled: true },
        { label: 'checked = true, invalid = true', checked: true, invalid: true },
        { label: 'invalid = true', invalid: true },
        { label: 'required = true', required: true },
        { label: 'required = false', required: false },
        { label: 'disabled = true, invalid = true', invalid: true, disabled: true },
        { label: 'checked = true, disabled = true, invalid = true', invalid: true, disabled: true, checked: true },
    ].map((config, idx) => ({
        id: `switch-option-example-${idx}`,
        name: `example-switch-group-${idx}`,
        value: `option-${idx}`,
        ...config,
    }));

    onCheckedChange(idx: number, checked: boolean) {
        this.examples[idx].checked = checked;
        // Optionally, show a snackbar or log for feedback
        // sendSnackbar(`Switch ${idx} checked: ${checked}`);
    }
}
