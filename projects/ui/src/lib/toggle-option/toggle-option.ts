import { Component, Input } from '@angular/core';

@Component({
    selector: 'ui-toggle-option',
    imports: [],
    templateUrl: './toggle-option.html',
    styleUrl: './toggle-option.scss',
})
export class UIToggleOption {
    @Input() label?: string;
    @Input() description?: string;
    @Input() disabled?: boolean;
}
