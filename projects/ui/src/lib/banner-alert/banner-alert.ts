import { Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { AlertVariant } from '../../types/utils';
import { ButtonSize, UIButton } from '../button';
import { IconCheckCircleFill, IconClose, IconErrorFill, IconInfoFill, IconWarningFill } from '../icons';

export interface CallToActionButton {
    /**
     * The label of the call to action button.
     *
     * @required
     */
    label: string;
    /**
     * The callback function for the call to action button.
     *
     * @required
     */
    onClick: () => void;
    /** The size of the call to action button. */
    size?: ButtonSize;
}

@Component({
    selector: 'ui-banner-alert',
    imports: [UIButton, IconErrorFill, IconInfoFill, IconCheckCircleFill, IconWarningFill],
    templateUrl: './banner-alert.html',
    styleUrl: './banner-alert.scss',
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    host: {
        'data-bspk': 'banner-alert',
        '[attr.data-elevated]': 'elevated() || undefined',
        '[attr.data-variant]': 'variant()',
        role: 'alert',
    },
})
export class UIBannerAlert {
    /**
     * Function to call when the banner alert is closed.
     *
     * @required
     */
    @Output() onClose = new EventEmitter<void>();
    /**
     * The color variant of the banner alert.
     *
     * @default informational
     */
    readonly variant = input<AlertVariant | undefined>('informational');
    /**
     * Is the alert elevated. If true a drop shadow is added.
     *
     * @default false
     */
    readonly elevated = input<boolean | undefined>(false);
    /**
     * The header of the banner alert.
     *
     * @required
     */
    readonly header = input('');
    /**
     * The body of the banner alert.
     *
     * @exampleType multiline
     * @required
     */
    readonly body = input('');
    /**
     * This property may be undefined or an object containing required CallToActionButton properties.
     *
     * @type CallToActionButton
     */
    readonly callToAction = input<CallToActionButton>();

    IconClose = IconClose;

    emitClose() {
        this.onClose?.emit();
    }
}
