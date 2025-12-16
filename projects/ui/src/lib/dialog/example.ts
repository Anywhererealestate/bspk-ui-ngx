import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { sendSnackbar } from '../../utils/sendSnackbar';
import { UIButton } from '../button';
import { DialogPlacement, UIDialog } from './dialog';

type Container = 'body' | 'testContainer';

@Component({
    selector: 'ui-dialog-example',
    standalone: true,
    imports: [CommonModule, UIDialog, UIButton],
    template: `
        <h2>Dialog</h2>

        <h3>Placement</h3>
        @for (placement of placements; track placement) {
            <p>
                <ui-button
                    [label]="'Open ' + placement + ' Dialog'"
                    (click)="openDialog('body', placement)"></ui-button>
            </p>

            <ui-dialog
                [open]="open['body'][placement]"
                (onClose)="closeDialog('body', placement)"
                [placement]="placement">
                <div style="padding: 20px">
                    <p>This is {{ placement }} demo dialog content.</p>
                    <div style="display: flex; gap: 10px">
                        <ui-button label="Close" (click)="closeDialog('body', placement)"></ui-button>
                        <ui-button variant="tertiary" label="Snackbar" (click)="snackbar()"></ui-button>
                    </div>
                </div>
            </ui-dialog>
        }

        <h3>Container</h3>

        <div
            #testContainer
            style="margin: 40px 0; padding: 20px; border: 1px solid var(--stroke-neutral-base); min-height: 200px; position: relative;">
            <p>This is a container for testing portal functionality.</p>
        </div>

        @for (placement of placements; track placement) {
            <p>
                <ui-button
                    [label]="'Open ' + placement + ' Dialog'"
                    (click)="openDialog('testContainer', placement)"></ui-button>
            </p>

            <ui-dialog
                [open]="open['testContainer'][placement]"
                (onClose)="closeDialog('testContainer', placement)"
                [placement]="placement"
                [container]="testContainer">
                <div style="padding: 20px">
                    <p>This is {{ placement }} demo dialog content.</p>
                    <div style="display: flex; gap: 10px">
                        <ui-button label="Close" (click)="closeDialog('testContainer', placement)"></ui-button>
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

    protected open: Record<Container, Record<DialogPlacement, boolean>> = {
        body: {
            bottom: false,
            center: false,
            left: false,
            right: false,
            top: false,
        },
        testContainer: {
            bottom: false,
            center: false,
            left: false,
            right: false,
            top: false,
        },
    };

    openDialog(container: Container, placement: DialogPlacement) {
        this.open[container][placement] = true;
    }

    closeDialog(container: Container, placement: DialogPlacement) {
        this.open[container][placement] = false;
    }

    snackbar() {
        sendSnackbar('Dialog button clicked');
    }
}
