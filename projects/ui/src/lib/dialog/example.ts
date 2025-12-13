import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { sendSnackbar } from '../../utils/sendSnackbar';
import { UIButton } from '../button';
import { DialogPlacement, UIDialog } from './dialog';

@Component({
    selector: 'ui-dialog-example',
    standalone: true,
    imports: [CommonModule, UIDialog, UIButton],
    template: `
        <h2>Dialog</h2>

        @for (placement of placements; track placement) {
            <p><ui-button [label]="'Open ' + placement + ' Dialog'" (click)="openDialog(placement)"></ui-button></p>

            <ui-dialog [open]="open[placement]" (onClose)="closeDialog(placement)" [placement]="placement">
                <div style="padding: 20px">
                    <p>This is {{ placement }} demo dialog content.</p>
                    <div style="display: flex; gap: 10px">
                        <ui-button label="Close" (click)="closeDialog(placement)"></ui-button>
                        <ui-button variant="tertiary" label="Snackbar" (click)="snackbar()"></ui-button>
                    </div>
                </div>
            </ui-dialog>
        }
    `,
    encapsulation: ViewEncapsulation.None,
})
export class UIDialogExample {
    placements: DialogPlacement[] = ['bottom', 'center', 'left', 'right', 'top'];

    protected open: Record<DialogPlacement, boolean> = {
        bottom: false,
        center: false,
        left: false,
        right: false,
        top: false,
    };

    openDialog(placement: DialogPlacement) {
        this.open[placement] = true;
    }

    closeDialog(placement: DialogPlacement) {
        this.open[placement] = false;
    }

    snackbar() {
        sendSnackbar('Dialog button clicked');
    }
}
