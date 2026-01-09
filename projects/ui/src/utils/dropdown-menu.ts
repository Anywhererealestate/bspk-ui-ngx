import { Component, computed, ElementRef, inject, input, Renderer2, signal, viewChild } from '@angular/core';
import { ListItemProps } from '../lib/list-item/list-item';
import { AsInputSignal } from '../types/common';
import { ArrowNavigationUtility } from './arrow-navigation';
import { FloatingUtility } from './floating';
import { keydownHandler } from './keydown-handler';
import { OutsideClickUtility } from './outside-click';
import { uniqueId } from './random';
import { scrollLimitStyle, ScrollLimitStyleProps } from './scroll-limit-style';

export type DropdownProps<T extends ListItemProps> = ScrollLimitStyleProps & {
    id?: string;
    items: T[];
    safeId: string;
};

@Component({
    template: '',
})
export class DropdownMenuUtility<T extends ListItemProps> implements AsInputSignal<DropdownProps<T>> {
    render = inject(Renderer2);

    outsideClick = new OutsideClickUtility();
    floating = new FloatingUtility(this.render);
    arrowNavigation = new ArrowNavigationUtility();

    readonly menu = viewChild('floating', { read: ElementRef });
    readonly reference = viewChild('reference', { read: ElementRef });

    readonly open = signal<boolean>(false);

    readonly id = input<DropdownProps<T>['id']>();
    readonly safeId = input<DropdownProps<T>['safeId']>(this.id() || uniqueId('dropdown'));

    readonly items = input<DropdownProps<T>['items']>([]);
    readonly scrollLimit = input<DropdownProps<T>['scrollLimit']>();

    readonly menuId = computed(() => `${this.safeId()}-menu`);

    readonly menuItems = computed(() => this.items().map((item, index) => ({ ...item, id: this.itemId(index) })));

    menuStyle: Record<string, unknown> = {};

    readonly ngMenuStyle = computed(() => {
        return {
            ...scrollLimitStyle(this.scrollLimit(), this.menuItems().length),
            width: 'fit-content',
            display: this.open() ? 'block' : 'none',
            ...this.menuStyle,
        };
    });

    refWidth = false;

    get itemId(): (index: number) => string {
        return (index: number) => `${this.safeId()}-item-${index}`;
    }

    openMenu(): void {
        this.open.set(true);

        this.arrowNavigation.init({
            ids: this.menuItems()
                .filter((i) => !i.disabled)
                .map((i) => i.id),
            defaultActiveId: undefined,
            activeElementId: this.menuItems()[0]?.id || null,
        });

        this.outsideClick.init({
            elements: [this.menu()?.nativeElement, this.reference()?.nativeElement],
            disabled: false,
            handleTabs: true,
            callback: () => this.closeMenu(),
        });

        this.floating.compute({
            offsetOptions: 4,
            refWidth: this.refWidth,
            reference: this.reference()?.nativeElement,
            floating: this.menu()?.nativeElement,
        });
    }

    closeMenu(): void {
        this.open.set(false);

        this.floating.destroy();
        this.arrowNavigation.destroy();
        this.outsideClick.destroy();
    }

    toggleDropdown(force?: boolean): void {
        if (!this.open() || force) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    }

    handleKeydown(event: KeyboardEvent): void {
        this.arrowNavigation.handleKeydown(event);

        const SpaceEnter = () => {
            if (!this.open()) this.openMenu();
            else document.querySelector<HTMLElement>(`[id="${this.arrowNavigation.activeElementId}"]`)?.click();
        };

        keydownHandler(
            {
                ArrowDown: () => {
                    if (!this.open()) this.openMenu();
                },
                Escape: () => this.closeMenu(),
                Enter: SpaceEnter,
                Space: SpaceEnter,
                'Ctrl+Option+Space': SpaceEnter,
            },
            {
                preventDefault: true,
                stopPropagation: true,
            },
        )(event);
    }
}
