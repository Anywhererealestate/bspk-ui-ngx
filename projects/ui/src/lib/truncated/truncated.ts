import { Component, ViewEncapsulation, input } from '@angular/core';
import { AsSignal } from '../../types/common';
import { UITooltipDirective } from '../tooltip';

export interface TruncatedProps {
    /**
     * The label to display in the tooltip when the text is truncated.
     * If not provided, the text content will be used.
     */
    label?: string;
}

/**
 * A utility component that displays a tooltip with the full text when hovered and text is truncated.
 *
 * @name Truncated
 * @phase Utility
 */
@Component({
    selector: 'ui-truncated',
    standalone: true,
    imports: [UITooltipDirective],
    template: `
        <span
            data-truncated
            [ui-tooltip]="tooltipConfig()"
            role="note">
            <ng-content></ng-content>
        </span>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class UITruncated implements AsSignal<TruncatedProps> {
    readonly label = input<string | undefined>(undefined);

    tooltipConfig(): { truncated: true; label?: string } {
        const l = this.label();
        return l !== undefined ? { truncated: true, label: l } : { truncated: true };
    }
}
