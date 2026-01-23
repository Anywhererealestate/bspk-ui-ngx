import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { IconAdd } from '../icons/add';
import { UIBannerAlert } from './banner-alert';

@Component({
    selector: 'ui-badge-example',
    standalone: true,
    imports: [CommonModule, UIBannerAlert],
    template: `
        <h4>Default</h4>
        <ui-banner-alert header="Example Header" body="Example body text"> </ui-banner-alert>

        <h4>variant="informational"</h4>
        <ui-banner-alert header="Example Header" body="Example body text" variant="informational"> </ui-banner-alert>

        <h4>variant="success"</h4>
        <ui-banner-alert header="Example Header" body="Example body text" variant="success"></ui-banner-alert>

        <h4>variant="error"</h4>
        <ui-banner-alert header="Example Header" body="Example body text" variant="error"></ui-banner-alert>

        <h4>variant="warning"</h4>
        <ui-banner-alert header="Example Header" body="Example body text" variant="warning"></ui-banner-alert>

        <h4>Elevated</h4>
        <ui-banner-alert header="Example Header" body="Example body text" [elevated]="true"> </ui-banner-alert>

        <h4>onClose</h4>
        <ui-banner-alert header="Example Header" body="Example body text" (onClose)="onClose()"> </ui-banner-alert>

        <h4>callToAction</h4>
        <ui-banner-alert
            header="Example Header"
            body="Example body text"
            [callToAction]="{ label: 'Click me', onClick: onCta }">
        </ui-banner-alert>

        <h4>onClose + callToAction</h4>
        <ui-banner-alert
            header="Example Header"
            body="Example body text"
            (onClose)="onClose()"
            [callToAction]="{ label: 'Click me', onClick: onCta }">
        </ui-banner-alert>
    `,
})
export class UIBannerAlertExample {
    protected readonly iconAdd = IconAdd;

    onClose() {
        sendSnackbar('Banner closed');
    }

    onCta() {
        sendSnackbar('Call to action clicked');
    }
}
