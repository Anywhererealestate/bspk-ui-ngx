import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { IconCheckCircleFill, IconErrorFill, IconInfoFill, IconWarningFill } from '../icons';

export type AlertVariant = 'error' | 'informational' | 'success' | 'warning';

@Component({
    selector: 'ui-inline-alert',
    imports: [IconCheckCircleFill, IconErrorFill, IconInfoFill, IconWarningFill],
    templateUrl: './inline-alert.html',
    styleUrl: './inline-alert.scss',
    host: {
        'data-bspk': 'inline-alert',
        role: 'alert',
    },
    encapsulation: ViewEncapsulation.None,
})
/**
 * Inline alerts provide contextual feedback messages for typical user actions with a handful of available and flexible
 * alert messages.
 *
 * @name InlineAlert
 * @phase Stable
 */
export class UIInlineAlert {
    /**
     * The color variant of the inline alert.
     *
     * @default informational
     */
    @Input() variant: AlertVariant = 'informational';
    /** The id of the inline alert. */
    id?: string;

    @HostBinding('attr.data-variant') get dataVariant(): AlertVariant | undefined {
        return this.variant;
    }

    @HostBinding('attr.data-bspk-owner') get dataBspkOwner(): string | undefined {
        return undefined;
    }
}
