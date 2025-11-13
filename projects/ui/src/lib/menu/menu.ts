import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ui-menu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './menu.html',
    styleUrl: './menu.scss',
})
export class Menu {
    /** The id of the element. If not provided one will be generated. */
    @Input() id?: string;

    /** Identifies the parent component. Helps with styling, debugging, and/or testing purposes. */
    @Input() owner?: string;

    /**
     * A label for the menu for screen readers.
     *
     * This is required if the role is set to "menu" or "listbox".
     */
    @Input() label?: string;

    /** The width of the menu. */
    @Input() width?: string;

    /** The ARIA role of the menu. */
    @Input() role?: string = 'menu'; // or 'listbox', etc.

    /**
     * Inline styles to apply to the element.
     *
     * Allows for CSS variables to be passed in as well.
     */
    @Input() style?: { [key: string]: any };

    get menuStyles() {
        return { ...(this.style || {}), ...(this.width ? { width: this.width } : {}) };
    }
}
