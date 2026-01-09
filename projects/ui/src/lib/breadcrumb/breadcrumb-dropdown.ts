import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { AsInputSignal } from '../../types/common';
import { DropdownMenuUtility } from '../../utils/dropdown-menu';
import { ScrollLimitStyleProps } from '../../utils/scroll-limit-style';
import { UIButton } from '../button';
import { IconChevronRight } from '../icons/chevron-right';
import { IconMoreHoriz } from '../icons/more-horiz';
import { UIListItem } from '../list-item';
import { UIMenu } from '../menu';
import { BreadcrumbLink } from './utils';

export type BreadcrumbDropdownProps = ScrollLimitStyleProps & {
    items: BreadcrumbLink[];
    id?: string;
};

/**
 * The BreadcrumbDropdown component is used to display a dropdown menu within a breadcrumb navigation.
 *
 * @name BreadcrumbDropdown
 * @parent Breadcrumb
 */
@Component({
    selector: 'ui-breadcrumb-dropdown',
    template: `<li>
        <ui-button
            [icon]="iconMoreHoriz"
            [label]="'Access to ' + items().length + ' pages'"
            [iconOnly]="true"
            variant="tertiary"
            size="small"
            [attr.aria-expanded]="!!open()"
            [attr.aria-haspopup]="'listbox'"
            [attr.aria-controls]="open() ? menuId() : null"
            (onClick)="toggleDropdown()"
            #reference
            (keydown)="handleKeydown($event)"
            [id]="safeId() + '-reference'" />
        <ui-menu
            #floating
            [id]="menuId()"
            label="Expanded breadcrumb"
            owner="Breadcrumb"
            role="listbox"
            [ngStyle]="ngMenuStyle()">
            @for (item of menuItems(); track item.href) {
                <ui-list-item
                    as="a"
                    [tabIndex]="-1"
                    [id]="item.id"
                    [label]="item.label"
                    [href]="item.href"
                    [active]="arrowNavigation.activeElementId === item.id" />
            }
        </ui-menu>
        <icon-chevron-right aria-hidden="true" width="24" />
    </li>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, UIButton, UIListItem, UIMenu, IconChevronRight],
    encapsulation: ViewEncapsulation.None,
    host: {
        style: 'display: contents;',
    },
})
export class UIBreadcrumbDropdown
    extends DropdownMenuUtility<BreadcrumbLink>
    implements AsInputSignal<BreadcrumbDropdownProps>
{
    readonly iconChevronRight = IconChevronRight;
    readonly iconMoreHoriz = IconMoreHoriz;

    override menuStyle = {
        maxWidth: '300px',
        minWidth: '150px',
    };
}
