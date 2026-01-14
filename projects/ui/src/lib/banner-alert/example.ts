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
        <h2>BannerAlert</h2>

        <h3>Default</h3>
        <ui-banner-alert header="Example Header" body="Example body text"> </ui-banner-alert>

        <h3>variant="informational"</h3>
        <ui-banner-alert header="Example Header" body="Example body text" variant="informational"> </ui-banner-alert>

        <h3>variant="success"</h3>
        <ui-banner-alert header="Example Header" body="Example body text" variant="success"></ui-banner-alert>

        <h3>variant="error"</h3>
        <ui-banner-alert header="Example Header" body="Example body text" variant="error"></ui-banner-alert>

        <h3>variant="warning"</h3>
        <ui-banner-alert header="Example Header" body="Example body text" variant="warning"></ui-banner-alert>

        <h3>Elevated</h3>
        <ui-banner-alert header="Example Header" body="Example body text" [elevated]="true"> </ui-banner-alert>

        <h3>onClose</h3>
        <ui-banner-alert header="Example Header" body="Example body text" (onClose)="onClose()"> </ui-banner-alert>

        <h3>callToAction</h3>
        <ui-banner-alert
            header="Example Header"
            body="Example body text"
            [callToAction]="{ label: 'Click me', onClick: onCta }">
        </ui-banner-alert>

        <h3>onClose + callToAction</h3>
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
