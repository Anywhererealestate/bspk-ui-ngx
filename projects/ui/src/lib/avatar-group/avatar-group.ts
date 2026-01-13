import { CommonModule } from '@angular/common';
import { Component, input, ViewEncapsulation } from '@angular/core';
import { UIAvatar, UIAvatarProps, SizeVariant } from '../avatar/avatar';
import { UIAvatarGroupOverflow } from './overflow';

export type AvatarItem = Pick<UIAvatarProps, 'color' | 'image' | 'initials' | 'name' | 'showIcon' | 'size'>;

@Component({
    selector: 'ui-avatar-group',
    standalone: true,
    imports: [CommonModule, UIAvatar, UIAvatarGroupOverflow],
    template: `
        <div
            data-bspk="avatar-group"
            [attr.data-max]="max()"
            [attr.data-size]="size()"
            [attr.data-variant]="variant()"
            [ngStyle]="style">
            <div data-wrap>
                @for (item of visibleItems; track item.id) {
                    <ui-avatar
                        [name]="item.name"
                        [image]="item.image"
                        [initials]="item.initials"
                        [id]="item.id"
                        [size]="size()"
                        (click)="onAvatarClick()"></ui-avatar>
                }
                @if (overflowItems.length > 0) {
                    <ui-avatar-group-overflow
                        [items]="overflowItems"
                        [overflow]="overflowItems.length"
                        [size]="size()"></ui-avatar-group-overflow>
                }
            </div>
        </div>
    `,
    styleUrl: './avatar-group.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        style: `display: contents;`,
    },
})
export class UIAvatarGroup {
    readonly items = input<any[]>([]);
    readonly size = input<SizeVariant>('small');
    readonly max = input<number>(5);
    readonly variant = input<'spread' | 'stacked'>('stacked');
    readonly style = input<Record<string, string> | null>(null);

    get visibleItems(): (AvatarItem & { id: string })[] {
        // Use .value() for signals created by input()
        const items = this.items();
        const max = this.max();
        return items.slice(0, max).map((item, idx) => ({
            ...item,
            id: `${item.name?.replace(/\s+/g, '-').toLowerCase()}-${idx}`,
        }));
    }

    get overflowItems(): (AvatarItem & { id: string })[] {
        const items = this.items();
        const max = this.max();
        return items.slice(max).map((item, idx) => ({
            ...item,
            id: `${item.name?.replace(/\s+/g, '-').toLowerCase()}-overflow-${idx}`,
        }));
    }

    onAvatarClick() {
        // Placeholder for avatar click handling
    }
}
