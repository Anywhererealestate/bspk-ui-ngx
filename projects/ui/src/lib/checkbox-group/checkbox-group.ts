import { Component, ViewEncapsulation, input, Output, EventEmitter } from '@angular/core';
import { UICheckboxOption } from '../checkbox-option';

export interface CheckboxGroupOption {
    value: string;
    label: string;
    description?: string;
    checked?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
}

@Component({
    selector: 'ui-checkbox-group',
    standalone: true,
    imports: [UICheckboxOption],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div role="group">
            @if (selectAll()) {
                <ui-checkbox-option
                    name="select-all"
                    [label]="selectAllProps()?.label ?? selectAllLabel"
                    [ariaLabel]="selectAllProps()?.ariaLabel ?? selectAllLabel"
                    [description]="selectAllProps()?.description"
                    [checked]="allChecked()"
                    [indeterminate]="someChecked() && !allChecked()"
                    [disabled]="disabled()"
                    [invalid]="invalid()"
                    [value]="'all'"
                    (checkedChange)="onSelectAllChange($event)">
                </ui-checkbox-option>
            }
            @for (option of options(); track option.value) {
                <ui-checkbox-option
                    name="checkbox-group-option-{{ option.value }}"
                    [label]="option.label"
                    [value]="option.value"
                    [checked]="isChecked(option.value)"
                    [description]="option.description"
                    [disabled]="disabled() || option.disabled"
                    [invalid]="invalid()"
                    (checkedChange)="onOptionChange(option.value, $event)">
                </ui-checkbox-option>
            }
        </div>
    `,
})
export class UICheckboxGroup {
    @Output() valueChange = new EventEmitter<string[]>();
    readonly options = input<CheckboxGroupOption[]>([]);
    readonly value = input<string[]>([]);
    readonly selectAll = input<boolean>(false);
    readonly selectAllProps = input<Partial<CheckboxGroupOption> | undefined>(undefined);
    readonly disabled = input<boolean>(false);
    readonly invalid = input<boolean>(false);
    selectAllLabel = 'All';

    isChecked(optionValue: string): boolean {
        const value = this.value();
        return Array.isArray(value) ? value.includes(optionValue) : false;
    }
    availableOptions() {
        return this.options().filter((o) => !o.disabled);
    }
    allChecked() {
        const opts = this.availableOptions();
        const val = this.value();
        return opts.length > 0 && Array.isArray(val) && opts.every((o) => val.includes(o.value));
    }
    someChecked() {
        const opts = this.availableOptions();
        const val = this.value();
        return Array.isArray(val) && opts.some((o) => val.includes(o.value));
    }
    onSelectAllChange(checked: boolean) {
        const opts = this.availableOptions();
        this.valueChange.emit(checked ? opts.map((o) => o.value) : []);
    }
    onOptionChange(optionValue: string, checked: boolean) {
        const value = this.value();
        const current: string[] = Array.isArray(value) ? value : [];
        if (checked) {
            this.valueChange.emit([...current, optionValue]);
        } else {
            this.valueChange.emit(current.filter((v) => v !== optionValue));
        }
    }
}
