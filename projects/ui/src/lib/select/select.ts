import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, input, model, signal } from '@angular/core';
import { AsInputSignal, CommonProps, FieldControlProps } from '../../types/common';
import { DropdownMenuUtility } from '../../utils/dropdown-menu';
import { IconKeyboardArrowDown } from '../icons/keyboard-arrow-down';
import { UIListItem } from '../list-item/list-item';
import { UIMenu } from '../menu/menu';

export type SelectOption = CommonProps<'disabled'> & { label: string; value: string };
export type SelectItem = SelectOption & { id: string; ariaLabel?: string; ariaSelected?: boolean };

export type SelectProps = CommonProps<'size'> &
    FieldControlProps<string> & {
        /**
         * Array of options to display in the select
         *
         * @example
         *     [
         *         { id: '1', label: 'Option 1' },
         *         { id: '2', label: 'Option 2' },
         *         { id: '3', label: 'Option 3' },
         *         { id: '4', label: 'Option 4' },
         *         { id: '5', label: 'Option 5' },
         *         { id: '6', label: 'Option 6' },
         *         { id: '7', label: 'Option 7' },
         *         { id: '8', label: 'Option 8' },
         *         { id: '9', label: 'Option 9' },
         *         { id: '10', label: 'Option 10' },
         *     ];
         *
         * @type Array<SelectOption>
         * @required
         */
        items: SelectOption[];
        /**
         * Placeholder for the select
         *
         * @default Select one
         */
        placeholder?: string;
        /**
         * The width of the menu.
         *
         * If not provided, the menu will match the width of the select control.
         */
        menuWidth?: HTMLElement['style']['width'];
        /**
         * The maximum number of ListItems to show before scrolling is enabled.
         *
         * Used in conjunction with scrollListItemsStyle utility.
         */
        scrollLimit?: number;
    };

/**
 * A field element that allows users to select one option from a list of available choices.
 *
 * For a more complete example with field usage, see the SelectField component.
 *
 * @example
 *     <ui-field controlId="example-select" helperText="Choose one option" label="Select an option">
 *     <ui-select
 *     [id]="'example-select'"
 *     [name]="'example-select'"
 *     [options]="OPTIONS"
 *     [placeholder]="'Select an option'"
 *     [scrollLimit]="5"
 *     [size]="'medium'"
 *     [(value)]="selected">
 *     </ui-select>
 *     </ui-field>
 *
 * @name Select
 * @phase Stable
 */
@Component({
    selector: 'ui-select',
    standalone: true,
    imports: [CommonModule, UIListItem, UIMenu, IconKeyboardArrowDown],
    encapsulation: ViewEncapsulation.None,
    styleUrl: './select.scss',
    template: `
        <input [attr.name]="name() || null" type="hidden" [value]="value() || ''" />
        <button
            type="button"
            [attr.aria-label]="
                (ariaLabel() ? ariaLabel() + ' ' : '') + (selectedItem?.label || placeholder() || 'Select one')
            "
            [attr.aria-activedescendant]="open() ? activeElementId() : null"
            aria-autocomplete="list"
            [attr.aria-controls]="open() ? menuId() : null"
            [attr.aria-describedby]="ariaDescribedBy() || null"
            [attr.aria-disabled]="disabled() || readOnly() ? true : null"
            [attr.aria-errormessage]="ariaErrorMessage() || null"
            [attr.aria-expanded]="open()"
            aria-haspopup="listbox"
            [attr.aria-readonly]="readOnly() || null"
            [attr.aria-required]="required() || null"
            data-bspk="select"
            [attr.data-invalid]="invalid() || null"
            [attr.data-open]="open() || null"
            [attr.data-size]="size() || 'medium'"
            [id]="safeId() + '-reference'"
            (click)="toggleDropdown()"
            (keydown)="handleKeydown($event)"
            #reference>
            <ui-list-item
                [owner]="'select'"
                [attr.data-placeholder]="selectedItem ? null : true"
                [id]="safeId() + '-selected-value'"
                [label]="selectedItem?.label || placeholder() || 'Select one'"
                [as]="'div'"
                [tabIndex]="-1"
                (focus)="reference.focus()"
                style="pointer-events: none;"
                #selected></ui-list-item>
            <icon-keyboard-arrow-down [width]="'20px'"></icon-keyboard-arrow-down>
        </button>
        <ui-menu #floating [id]="menuId()" [owner]="'select'" role="listbox" [ngStyle]="ngMenuStyle()">
            @for (item of menuItems(); track item.id) {
                <ui-list-item
                    [owner]="'select'"
                    [attr.aria-selected]="value() === item.value"
                    [as]="'div'"
                    [active]="activeElementId() === item.id"
                    [label]="item.label"
                    [tabIndex]="-1"
                    (clicked)="onItemClick(item)"
                    [id]="item.id"
                    [active]="arrowNavigation.activeElementId === item.id"></ui-list-item>
            }
        </ui-menu>
    `,
})
export class UISelect extends DropdownMenuUtility<SelectOption> implements AsInputSignal<SelectProps> {
    readonly value = model<SelectProps['value']>('');
    readonly name = input.required<SelectProps['name']>();

    readonly placeholder = input<SelectProps['placeholder']>('Select one');
    readonly size = input<SelectProps['size']>('medium');
    readonly disabled = input<SelectProps['disabled']>(false);
    readonly invalid = input<SelectProps['invalid']>(false);
    readonly readOnly = input<SelectProps['readOnly']>(false);
    readonly required = input<SelectProps['required']>(false);
    readonly ariaLabel = input<SelectProps['ariaLabel']>(undefined);
    readonly menuWidth = input<SelectProps['menuWidth']>(undefined);
    readonly ariaDescribedBy = input<SelectProps['ariaDescribedBy']>(undefined);
    readonly ariaErrorMessage = input<SelectProps['ariaErrorMessage']>(undefined);

    readonly activeElementId = signal<string | null>(null);

    override refWidth = true;

    get selectedItem(): SelectItem | undefined {
        return this.menuItems().find((item) => item.value === this.value());
    }

    onItemClick(item: SelectItem) {
        if (item.disabled) return;
        this.value.set(item.value);
        this.closeMenu();
    }
}
