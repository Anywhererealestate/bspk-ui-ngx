import { CommonModule } from '@angular/common';
import { Component, input, viewChild, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

// Assume these are your Angular equivalents:
import { UIAvatar, UIAvatarProps } from '../avatar/avatar';
import { UIListItem } from '../list-item/list-item';
import { UIMenu } from '../menu/menu';
import { UIPortalDirective } from '../portal'; // Update import to your portal directive

@Component({
    selector: 'ui-avatar-group-overflow',
    standalone: true,
    imports: [CommonModule, UIAvatar, UIListItem, UIMenu, UIPortalDirective],
    template: `
        <button
            #overflowBtn
            [attr.aria-activedescendant]="activeElementId || null"
            [attr.aria-controls]="open ? menuId : null"
            [attr.aria-expanded]="open"
            aria-haspopup="menu"
            aria-label="Show {{ overflow() }} more avatar{{ overflow() > 1 ? 's' : '' }}"
            data-bspk="avatar"
            data-bspk-owner="avatar-overflow"
            [attr.data-size]="size()"
            (blur)="closeMenu()"
            (click)="toggleMenu()"
            (keydown)="onKeyDown($event)"
            role="combobox">
            <span data-overflow-count>+{{ overflow() }}</span>
        </button>
        @if (open) {
            <ng-container>
                <div [ui-portal]="overflowBtn">
                    <ui-menu
                        [id]="menuId"
                        [style.width]="'fit-content'"
                        [style.paddingRight]="'var(--spacing-sizing-04)'"
                        [style.--list-item-height]="'var(--spacing-sizing-12)'"
                        [style.maxHeight]="maxMenuHeight"
                        role="menu">
                        @for (item of items(); track item.id) {
                            <ui-list-item [active]="activeElementId === item.id" [label]="item.name">
                                <span data-leading>
                                    <ui-avatar
                                        [hideTooltip]="true"
                                        [size]="'small'"
                                        [id]="item.id"
                                        [name]="item.name"
                                        [image]="item.image"
                                        [initials]="item.initials">
                                    </ui-avatar>
                                </span>
                            </ui-list-item>
                        }
                    </ui-menu>
                </div>
            </ng-container>
        }

        <ng-template #avatar let-item>
            <ui-avatar
                [hideTooltip]="true"
                [size]="'small'"
                [id]="item.id"
                [name]="item.name"
                [image]="item.image"
                [initials]="item.initials"></ui-avatar>
        </ng-template>
    `,
    encapsulation: ViewEncapsulation.None,
    host: {
        // 'data-bspk': 'avatar',
        // 'data-bspk-owner': 'avatar-overflow',
    },
})
export class UIAvatarGroupOverflow implements OnInit {
    readonly overflowBtn = viewChild<ElementRef<HTMLButtonElement>>('overflowBtn');

    // readonly name = input.required<string>();
    readonly overflow = input<number>(0);
    readonly size = input<string>('medium');
    readonly items = input<UIAvatarProps[]>([]);

    activeElementId: string | null = null;
    open = false;
    menuId = '';

    get maxMenuHeight() {
        return this.items.length > 5 ? 'calc(var(--spacing-sizing-12) * 5)' : '';
    }
    ngOnInit() {
        const items = this.items();
        this.menuId = `avatar-overflow-menu-${items[0]?.id || 'menu'}`;
    }

    closeMenu() {
        this.open = false;
        this.activeElementId = null;
    }

    toggleMenu() {
        this.open = !this.open;
        const items = this.items();
        if (this.open && items.length) {
            this.activeElementId = items[0].id;
        } else {
            this.activeElementId = null;
        }
    }

    onKeyDown(event: KeyboardEvent) {
        if (!this.open) return;
        const items = this.items();
        const idx = items.findIndex((i) => i.id === this.activeElementId);
        if (event.key === 'ArrowDown') {
            const nextIdx = (idx + 1) % items.length;
            this.activeElementId = items[nextIdx].id;
            event.preventDefault();
        } else if (event.key === 'ArrowUp') {
            const prevIdx = (idx - 1 + items.length) % items.length;
            this.activeElementId = items[prevIdx].id;
            event.preventDefault();
        } else if (event.key === 'Escape') {
            this.closeMenu();
            event.preventDefault();
        }
    }

    avatarTemplate(item: UIAvatarProps) {
        return {
            ...item,
            hideTooltip: true,
            size: 'small',
        };
    }
}
