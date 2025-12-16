import { Component } from '@angular/core';
import { UIButton } from '../button/button';
import { UIModal } from './modal';

@Component({
    selector: 'ui-modal-example',
    standalone: true,
    imports: [UIModal, UIButton],
    template: `
        <ui-button label="Open Modal" (onClick)="open = true"></ui-button>
        <ui-modal
            [description]="'Example description'"
            [header]="'Example header'"
            [open]="open"
            (onClose)="open = false">
            Example Modal body
        </ui-modal>
    `,
})
export class UIModalExample {
    open = false;
}
