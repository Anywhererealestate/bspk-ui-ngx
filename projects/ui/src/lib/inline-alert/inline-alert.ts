import { Component, input, ViewEncapsulation } from '@angular/core';
import { AlertVariant } from '../../types/common';
import { IconCheckCircleFill, IconErrorFill, IconInfoFill } from '../icons';
import { UITxtDirective } from '../txt/txt.directive';
import { UIWarningTwoTone } from './warning-two-tone';

/**
 * Inline alerts provide contextual feedback messages for typical user actions with a handful of available and flexible
 * alert messages.
 *
 * @name InlineAlert
 * @phase Dev
 */

@Component({
    selector: 'ui-inline-alert',
    imports: [IconCheckCircleFill, IconErrorFill, IconInfoFill, UITxtDirective, UIWarningTwoTone],
    template: `@if (variant() === 'error') {
            <icon-error-fill />
        } @else if (variant() === 'informational') {
            <icon-info-fill />
        } @else if (variant() === 'success') {
            <icon-check-circle-fill />
        } @else if (variant() === 'warning') {
            <ui-warning-two-tone />
        }
        <div ui-txt="body-small">
            {{ label() }}
        </div>`,
    styleUrl: './inline-alert.scss',
    host: {
        'data-bspk': 'inline-alert',
        role: 'alert',
        '[attr.data-variant]': 'variant()',
        '[attr.id]': 'id()',
        '[attr.data-bspk-owner]': 'owner()',
    },
    encapsulation: ViewEncapsulation.None,
})
export class UIInlineAlert {
    /**
     * The alert message content.
     *
     * @required
     */
    readonly label = input<string>('');
    /**
     * The color variant of the inline alert.
     *
     * @default informational
     */
    readonly variant = input<AlertVariant>('informational');
    /** The id of the inline alert. */
    readonly id = input<string | null>(null);
    /** Identifies the parent component. Helps with styling, debugging, and/or testing purposes. */
    readonly owner = input<string | null>(null);
}
