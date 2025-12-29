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
    /** Common props */
    id?: string;
    /** Owner tag for theming/analytics parity. */
    owner?: string;
    /** Optional ARIA role. */
    role?: string;
    /** Optional style object (not applied directly; width is mapped). */
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
    /** A label for the menu for screen readers. This is required if the role is set to "menu" or "listbox". */
    readonly label = input<MenuProps['label']>(undefined);
    /** The width of the menu. */
    readonly width = input<MenuProps['width']>(undefined);
    /** Owner tag for theming/analytics parity. */
    readonly owner = input<MenuProps['owner']>(undefined);
    /** Element id. */
    readonly id = input<MenuProps['id']>(undefined);
    /** Optional ARIA role. */
    readonly role = input<MenuProps['role']>(undefined);
    /** Optional style object (not applied directly; width is mapped). */
    readonly style = input<MenuProps['style']>(undefined);
}
