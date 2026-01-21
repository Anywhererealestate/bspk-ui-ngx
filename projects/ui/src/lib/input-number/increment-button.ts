import { Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';

@Component({
    selector: 'ui-increment-button',
    standalone: true,
    imports: [],
    template: ``,
    styleUrl: './input-number.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        '[attr.aria-label]': 'label',
        '[attr.disabled]': 'disabledState ? "" : null',
        'data-bspk': 'input-number--increment-button',
        '(click)': 'onClick.emit($event)',
    },
})
export class UIIncrementButton {
    @Output() onClick = new EventEmitter<MouseEvent>();
    readonly disabled = input<boolean | undefined>(false);
    readonly kind = input.required<'add' | 'remove'>();

    get disabledState() {
        return this.disabled() || false;
    }
    get label() {
        return this.kind() === 'add' ? 'Increase value' : 'Decrease value';
    }
}
