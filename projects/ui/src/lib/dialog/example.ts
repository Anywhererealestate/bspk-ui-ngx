import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIButton } from '../button/button';
import { UIFlexDirective } from '../flex/flex.directive';
import { IconClose } from '../icons';
import { UIDialog } from './dialog';

@Component({
    selector: 'ui-dialog-example',
    standalone: true,
    imports: [CommonModule, UIDialog, UIButton, UIFlexDirective],
    template: `
        <h2>Dialog</h2>

        <ui-button label="Open Dialog" (click)="open = true"></ui-button>

        <ui-dialog [open]="open" (onClose)="open = false" placement="center">
            <div style="padding: var(--spacing-sizing-04)">
                <div ui-flex direction="row" justify="between" style="margin-bottom: var(--spacing-sizing-04)">
                    <h4>Dialog Title</h4>
                    <ui-button
                        label="Close"
                        variant="tertiary"
                        (click)="open = false"
                        [icon]="iconClose"
                        [iconOnly]="true" />
                </div>
                <p>This is the content of the dialog.</p>
                <ui-button label="Cancel" variant="secondary" (click)="open = false"></ui-button>
            </div>
        </ui-dialog>

        <h3>Contained Dialog (Right, no Scrim)</h3>
        <div
            #container
            style="border: 1px solid var(--stroke-neutral-base); padding: var(--spacing-sizing-04); min-height: 200px; position: relative; overflow: hidden;">
            <ui-button label="Open Contained" (click)="openContained = true"></ui-button>
            <ui-dialog
                [open]="openContained"
                (onClose)="openContained = false"
                [showScrim]="false"
                [container]="container"
                placement="right">
                <div style="padding: var(--spacing-sizing-04)">
                    <div ui-flex align="baseline" justify="between" style="margin-bottom: var(--spacing-sizing-04)">
                        <h4>Contained</h4>
                        <ui-button
                            label="Close"
                            variant="tertiary"
                            (click)="openContained = false"
                            [icon]="iconClose"
                            [iconOnly]="true" />
                    </div>
                    <p>Hello, I am a contained dialog!</p>
                </div>
            </ui-dialog>
        </div>

        <h3>Dialog top</h3>
        <ui-button label="Open Top Dialog" (click)="openTop = true"></ui-button>

        <ui-dialog [open]="openTop" (onClose)="openTop = false" placement="top">
            <div style="padding: var(--spacing-sizing-04)">
                <div ui-flex align="baseline" justify="between" style="margin-bottom: var(--spacing-sizing-04)">
                    <h4>Dialog Title</h4>
                    <ui-button
                        label="Close"
                        variant="tertiary"
                        (click)="openTop = false"
                        [icon]="iconClose"
                        [iconOnly]="true" />
                </div>
                <p>This is the content of the top dialog.</p>
                <ui-button label="Cancel" variant="secondary" (click)="openTop = false"></ui-button>
            </div>
        </ui-dialog>

        <h3>Dialog right</h3>
        <ui-button label="Open Right Dialog" (click)="openRight = true"></ui-button>

        <ui-dialog [open]="openRight" (onClose)="openRight = false" placement="right">
            <div style="padding: var(--spacing-sizing-04)">
                <div ui-flex align="baseline" justify="between" style="margin-bottom: var(--spacing-sizing-04)">
                    <h4>Dialog Title</h4>
                    <ui-button
                        label="Close"
                        variant="tertiary"
                        (click)="openRight = false"
                        [icon]="iconClose"
                        [iconOnly]="true" />
                </div>
                <p>This is the content of the right dialog.</p>
                <ui-button label="Cancel" variant="secondary" (click)="openRight = false"></ui-button>
            </div>
        </ui-dialog>

        <h3>Dialog bottom</h3>
        <ui-button label="Open Bottom Dialog" (click)="openBottom = true"></ui-button>

        <ui-dialog [open]="openBottom" (onClose)="openBottom = false" placement="bottom">
            <div style="padding: var(--spacing-sizing-04)">
                <div ui-flex align="baseline" justify="between" style="margin-bottom: var(--spacing-sizing-04)">
                    <h4>Dialog Title</h4>
                    <ui-button
                        label="Close"
                        variant="tertiary"
                        (click)="openBottom = false"
                        [icon]="iconClose"
                        [iconOnly]="true" />
                </div>
                <p>This is the content of the bottom dialog.</p>
                <ui-button label="Cancel" variant="secondary" (click)="openBottom = false"></ui-button>
            </div>
        </ui-dialog>

        <h3>Dialog Left</h3>
        <ui-button label="Open Left Dialog" (click)="openLeft = true"></ui-button>

        <ui-dialog [open]="openLeft" (onClose)="openLeft = false" placement="left">
            <div style="padding: var(--spacing-sizing-04)">
                <div ui-flex align="baseline" justify="between" style="margin-bottom: var(--spacing-sizing-04)">
                    <h4>Dialog Title</h4>
                    <ui-button
                        label="Close"
                        variant="tertiary"
                        (click)="openLeft = false"
                        [icon]="iconClose"
                        [iconOnly]="true" />
                </div>
                <p>This is the content of the left dialog.</p>
                <ui-button label="Cancel" variant="secondary" (click)="openLeft = false"></ui-button>
            </div>
        </ui-dialog>

        <h3>Dialog no scrim</h3>
        <ui-button label="Open Dialog No Scrim" (click)="openNoScrim = true"></ui-button>

        <ui-dialog [open]="openNoScrim" (onClose)="openNoScrim = false" placement="center" [showScrim]="false">
            <div style="padding: var(--spacing-sizing-04)">
                <div ui-flex align="baseline" justify="between" style="margin-bottom: var(--spacing-sizing-04)">
                    <h4>Dialog Title</h4>
                    <ui-button
                        label="Close"
                        variant="tertiary"
                        (click)="openNoScrim = false"
                        [icon]="iconClose"
                        [iconOnly]="true" />
                </div>
                <p>This is the content of the dialog without a scrim.</p>
                <ui-button label="Cancel" variant="secondary" (click)="openNoScrim = false"></ui-button>
            </div>
        </ui-dialog>

        <h3>Dialog width full</h3>
        <ui-button label="Open Full Width Dialog" (click)="openWidthFull = true"></ui-button>

        <ui-dialog [open]="openWidthFull" (onClose)="openWidthFull = false" placement="center" [widthFull]="true">
            <div style="padding: var(--spacing-sizing-04)">
                <div ui-flex align="baseline" justify="between" style="margin-bottom: var(--spacing-sizing-04)">
                    <h4>Dialog Title</h4>
                    <ui-button
                        label="Close"
                        variant="tertiary"
                        (click)="openWidthFull = false"
                        [icon]="iconClose"
                        [iconOnly]="true" />
                </div>
                <p>This is the content of the full width dialog.</p>
                <ui-button label="Cancel" variant="secondary" (click)="openWidthFull = false"></ui-button>
            </div>
        </ui-dialog>
    `,
})
export class UIDialogExample {
    open = false;
    openContained = false;
    openTop = false;
    openRight = false;
    openLeft = false;
    openBottom = false;
    openNoScrim = false;
    openWidthFull = false;
    iconClose = IconClose;
}
