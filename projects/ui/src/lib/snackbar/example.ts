import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIButton } from '../button';
import { IconCloud } from '../icons/cloud';
import { UISnackbar } from '../snackbar';
import { UISwitchOption } from '../switch-option';

@Component({
    selector: 'ui-snackbar-example',
    standalone: true,
    imports: [CommonModule, UIButton, UISnackbar, UISwitchOption],
    template: `
        <h4>Default</h4>
        <ui-button label="Default" (click)="openDefault = true" />
        <ui-snackbar
            text="example-text"
            [open]="openDefault"
            (onClose)="openDefault = false"
            (openChange)="openDefault = $event ?? false">
            Example Content
        </ui-snackbar>

        <h4>closeButton: true</h4>
        <ui-button label="closeButton = true" (click)="openCloseButton = true" />
        <ui-snackbar
            [closeButton]="true"
            text="With close button"
            [open]="openCloseButton"
            (onClose)="openCloseButton = false"
            (openChange)="openCloseButton = $event ?? false">
            With close button
        </ui-snackbar>

        <h4>closeButton: false + timeout: 2000</h4>
        <ui-button label="No Close Button + Timeout set" (click)="openNoButton = true" />
        <ui-snackbar
            [closeButton]="false"
            text="No close button"
            [open]="openNoButton"
            (onClose)="openNoButton = false"
            [timeout]="2000"
            (openChange)="openNoButton = $event ?? false">
            Example Content
        </ui-snackbar>

        <h4>closeButtonLabel: example-closeButtonLabel</h4>
        <ui-button label="closeButtonLabel" (click)="openCloseButtonLabel = true" />
        <ui-snackbar
            closeButtonLabel="example-closeButtonLabel"
            text="example-text"
            [open]="openCloseButtonLabel"
            (onClose)="openCloseButtonLabel = false"
            (openChange)="openCloseButtonLabel = $event ?? false">
            Example Content
        </ui-snackbar>

        <h4>icon: 'iconCloud'</h4>
        <ui-button label="with icon" (click)="openIcon = true" />
        <ui-snackbar
            [icon]="iconCloud"
            text="example-text"
            [open]="openIcon"
            (onClose)="openIcon = false"
            (openChange)="openIcon = $event ?? false">
            Example Content
        </ui-snackbar>

        <h4>id: example-id</h4>
        <ui-button label="id example" (click)="openId = true" />
        <ui-snackbar
            id="example-id"
            text="example-text"
            [open]="openId"
            (onClose)="openId = false"
            (openChange)="openId = $event ?? false">
            Example Content
        </ui-snackbar>

        <h4>open: true</h4>
        flip this switch to true to show the snackbar, then click the close button or wait for the timeout to see the
        onClose and openChange events in action
        <ui-switch-option
            name="openTrueSwitch"
            label="open set to true"
            [checked]="openTrueSwitch"
            (checkedChange)="openTrueSwitch = $event ?? false"
            value="true" />

        <ui-button label="open switched to true" (click)="openTrueSwitch = true" />
        <ui-snackbar
            [open]="openTrueSwitch"
            text="example-text"
            (onClose)="openTrueSwitch = false"
            (openChange)="openTrueSwitch = $event ?? false">
            Example Content
        </ui-snackbar>

        <h4>open: false</h4>
        <ui-button label="open set to false" (click)="openSetFalse = false" />
        <ui-snackbar
            [open]="openSetFalse"
            text="example-text"
            (onClose)="openSetFalse = false"
            (openChange)="openSetFalse = $event ?? false">
            Example Content
        </ui-snackbar>

        <h4>text: example-text</h4>
        <ui-button label="example text" (click)="openExampleText = true" />
        <ui-snackbar
            text="example-text"
            [open]="openExampleText"
            (onClose)="openExampleText = false"
            (openChange)="openExampleText = $event ?? false">
            Example Content
        </ui-snackbar>
    `,
})
export class UISnackbarExample {
    iconCloud = IconCloud;

    openDefault = false;
    openCloseButton = false;
    openNoButton = false;
    openCloseButtonLabel = false;
    openIcon = false;
    openId = false;
    openTrueSwitch = false;
    openSetFalse = false;
    openExampleText = false;
}
