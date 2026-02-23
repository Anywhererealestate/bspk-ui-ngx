import { Component, ViewEncapsulation, input } from '@angular/core';
import { AsSignal, CommonProps } from '../../types/common';
import { UIListItem } from '../list-item';

export interface ToggleOptionProps {
    disabled?: CommonProps['disabled'];
    /**
     * The label of the option. Also used as the aria-label of the control.
     *
     * @required
     */
    label: string;
    /** The description of the option. */
    description?: string;
}

/**
 * A utility component that wraps a checkbox, radio, or switch with a list-item layout.
 *
 * ```html
 * <ui-toggle-option label="Enable notifications" [description]="'Get updates by email'">
 *     <ui-switch data-leading [checked]="on()" (checkedChange)="on.set($event)"></ui-switch>
 * </ui-toggle-option>
 * ```
 *
 * @name ToggleOption
 * @phase Dev
 */
@Component({
    selector: 'ui-toggle-option',
    standalone: true,
    imports: [UIListItem],
    template: `
        <ui-list-item
            as="label"
            [label]="label()"
            [subText]="description()"
            [disabled]="disabled()"
            owner="toggle-option"
            width="hug"
            [attr.aria-disabled]="disabled() ? true : null">
            <span data-leading>
                <ng-content></ng-content>
            </span>
        </ui-list-item>
    `,
    encapsulation: ViewEncapsulation.None,
    host: {
        style: 'display: contents;',
    },
})
export class UIToggleOption implements AsSignal<ToggleOptionProps> {
    readonly label = input.required<string>();
    readonly description = input<string | undefined>(undefined);
    readonly disabled = input<boolean>(false);
}
