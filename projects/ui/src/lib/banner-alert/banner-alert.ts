import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IconCheckCircleFill, IconClose, IconErrorFill, IconInfoFill, IconWarningFill } from '../icons';
import { UIButton } from '../button';

export type AlertVariant = 'error' | 'informational' | 'success' | 'warning';
export type BannerAlertCallToActionConfig = { label: string; onClick: () => void };

@Component({
  selector: 'ui-banner-alert',
  imports: [UIButton, IconErrorFill, IconInfoFill, IconCheckCircleFill, IconWarningFill],
  templateUrl: './banner-alert.html',
  styleUrl: './banner-alert.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})

export class UIBannerAlert {
  /**
   * The color variant of the banner alert.
   *
   * @default informational
   */
  @Input() variant?: AlertVariant = 'informational';
  /**
   * Is the alert elevated. If true a drop shadow is added.
   *
   * @default false
   */
  @Input() elevated?: boolean = false;
  /**
   * The header of the banner alert.
   *
   * @required
   */
  @Input() header: string = '';
  /**
   * The body of the banner alert.
   *
   * @type multiline
   * @required
   */
  @Input() body: string = '';
  /**
   * This property may be undefined or an object containing required CallToActionButton properties.
   *
   * @type CallToActionButton
   */
  @Input() callToAction?: BannerAlertCallToActionConfig;
  /**
   * Function to call when the banner alert is closed.
   *
   * @type () => void
   * @required
   */
  @Output() onClose = new EventEmitter<void>();

  IconClose = IconClose;

  emitClose() {
      this.onClose.emit();
  }
}
