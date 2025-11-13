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
    @Input() id?: string;
    @Input() owner?: string;
    @Input() label?: string;
    @Input() width?: string;
    @Input() role?: string = 'menu'; // or 'listbox', etc.
    @Input() style?: { [key: string]: any };

    get menuStyles() {
        return { ...(this.style || {}), ...(this.width ? { width: this.width } : {}) };
    }
}
