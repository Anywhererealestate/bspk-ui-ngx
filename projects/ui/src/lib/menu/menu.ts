import { Component, ViewEncapsulation, input } from '@angular/core';
import { AsInputSignal } from '../../types/utils';

export interface MenuProps {
    /**
     * The items to display in the menu. These should be ListItem and Divider components.
     *
     * @required
     */
    // children are projected via Angular's content projection
    /**
     * A label for the menu for screen readers.
     *
     * This is required if the role is set to "menu" or "listbox".
     */
    label?: string;
    /**
     * The width of the menu.
     *
     * @type HTMLElement.style.width
     * @exampleType string
     */
    width?: string;
    /** The id of the element. If not provided one will be generated. */
    id?: string;
    /** Identifies the parent component. Helps with styling, debugging, and/or testing purposes. */
    owner?: string;
    /** The ARIA role of the element. */
    role?: string;
    /**
     * Inline styles to apply to the element.
     *
     * Allows for CSS variables to be passed in as well. (not applied directly; width is mapped).
     */
    style?: string;
}

/**
 * A container housing a simple list of options presented to the customer to select one option at a time.
 *
 * @example
 *     <ui-menu>
 *     <ui-list-item label="List Item"></ui-list-item>
 *     <ui-list-item label="List Item"></ui-list-item>
 *     <ui-list-item label="List Item"></ui-list-item>
 *     </ui-menu>
 *
 * @name Menu
 * @phase Stable
 */
@Component({
    selector: 'ui-menu',
    standalone: true,
    // Host-based rendering: base is a div, so attach all attributes to host
    template: `<ng-content></ng-content>`,
    styleUrl: './menu.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        '[attr.aria-label]': 'label() || null',
        '[attr.data-bspk-owner]': 'owner() || null',
        'data-bspk-utility': 'menu',
        '[attr.id]': 'id() || null',
        '[attr.role]': 'role() || null',
        '[style.width]': 'width() || null',
        '[style]': 'style()',
    },
})
export class UIMenu implements AsInputSignal<MenuProps> {
    readonly label = input<MenuProps['label']>(undefined);
    readonly width = input<MenuProps['width']>(undefined);
    readonly owner = input<MenuProps['owner']>(undefined);
    readonly id = input<MenuProps['id']>(undefined);
    readonly role = input<MenuProps['role']>(undefined);
    readonly style = input<MenuProps['style']>(undefined);
}
