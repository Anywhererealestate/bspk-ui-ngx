import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIButton } from '../button';
import { UIModal } from './modal';

@Component({
    selector: 'ui-modal-example',
    standalone: true,
    imports: [CommonModule, UIModal, UIButton],
    template: `
        <h2>Modal</h2>

        <ui-button label="Open Modal" (click)="open = true"></ui-button>

        <ui-modal [open]="open" (onClose)="open = false" header="Example modal" description="This is a demo modal">
            <p>Modal content — Add any content here.</p>
        </ui-modal>
    `,
})
export class UIModalExample {
    protected open = false;
}
