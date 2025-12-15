import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UIListItem } from '../list-item';
import { UIRadio, RadioProps } from '../radio/radio';

@Component({
    selector: 'ui-radio-option',
    imports: [UIRadio, UIListItem],
    template: ` <ui-list-item
        label="label"
        description="description"
        [disabled]="disabled"
        data-bspk="radio-option"
        [attr.aria-disabled]="disabled ?? null"
        as="label">
        <ui-radio
            data-leading
            [name]="radioInput?.name ?? ''"
            [value]="radioInput?.value"
            [checked]="radioInput?.checked ?? false"
            [disabled]="disabled"
            [required]="radioInput?.required ?? false"
            [invalid]="radioInput?.invalid ?? false"
            [ariaLabel]="ariaLabel"
            (checkedChange)="checkedChange.emit($event)">
        </ui-radio>
    </ui-list-item>`,
})
export class UIRadioOption {
    @Input() label?: string;
    @Input() description?: string;
    @Input() disabled?: boolean;
    @Input() radioInput?: RadioProps;

    @Output() checkedChange = new EventEmitter<boolean>();

    get ariaLabel(): string | undefined {
        return this.description ? `${this.label} - ${this.description}` : this.label;
    }
}
