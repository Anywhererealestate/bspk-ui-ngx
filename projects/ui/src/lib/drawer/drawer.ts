import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { UIButton } from '../button/button';
import { UIDialog } from '../dialog/dialog';
import { IconClose } from '../icons/close';

@Component({
    selector: 'ui-drawer',
    standalone: true,
    imports: [CommonModule, UIDialog, UIButton, IconClose],
    templateUrl: './drawer.html',
    styleUrls: ['./drawer.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UIDrawer {
    /** Drawer header. */
    @Input() header = '';

    /** Whether the drawer is open. */
    @Input() open = false;

    /** When true the drawer is temporarily displayed above all other content until closed. */
    @Input() modal = true;

    /** Show a close button in the header. */
    @Input() closeButton = false;

    /** The placement of the drawer. */
    @Input() placement: 'bottom' | 'left' | 'right' | 'top' = 'right';

    /** Disable the dialog focus trap. */
    @Input() disableFocusTrap = false;

    @Output() onClose = new EventEmitter<void>();

    public emitClose() {
        this.onClose.emit();
    }
}

/** Copyright 2025 Anywhere Real Estate - CC BY 4.0 */
/** Copyright 2025 Anywhere Real Estate - CC BY 4.0 */
