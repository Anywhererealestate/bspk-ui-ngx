import { NgTemplateOutlet } from '@angular/common';
import { Component, Output, EventEmitter, ViewEncapsulation, input, computed } from '@angular/core';
import { AsInputSignal, CommonProps } from '../../types/common';
import { UITooltipDirective } from '../tooltip';

export type ListItemProps = CommonProps<
    | 'active'
    | 'ariaDisabled'
    | 'ariaLabel'
    | 'ariaReadonly'
    | 'ariaRole'
    | 'ariaSelected'
    | 'disabled'
    | 'htmlFor'
    | 'id'
    | 'owner'
    | 'readOnly'
    | 'style'
    | 'tabIndex'
> & {
    /**
     * The element type to render as.
     *
     * @default div
     */
    as?: 'a' | 'button' | 'div' | 'label';
    /**
     * The label to display in the ListItem.
     *
     * @required
     */
    label: string;
    /** The subtext to display in the ListItem. */
    subText?: string;
    /**
     * The [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href) of the list item.
     *
     * If the href is provided, the ListItem will render as an anchor element (`<a>`).
     */
    href?: string;
    /**
     * Determines how the ListItem uses horizontal space.
     *
     * If set to 'fill', options expand to fill the container's width.
     *
     * If set to 'hug', options only take up as much space as the content requires.
     *
     * @default fill
     */
    width?: 'fill' | 'hug';
};

/**
 * A hybrid interactive component that is used frequently to organize content and offers a wide range of control and
 * navigation in most experiences.
 *
 * With its flexible and simple structure, the list item element is core and can meet the needs of many uses cases.
 *
 * The ListItem has three main elements: leading element, label, and trailing element.
 *
 * Leading elements should be one of the following Icon, Img, Avatar.
 *
 * Trailing elements should be one of the following Icon, Checkbox, Button, Radio, Switch, Tag, Txt.
 *
 * @name ListItem
 * @phase Dev
 */
@Component({
    selector: 'ui-list-item',
    standalone: true,
    imports: [NgTemplateOutlet, UITooltipDirective],
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./list-item.scss'],
    template: `
        <ng-template #inner>
            <ng-content select="[data-leading]"></ng-content>
            <span data-item-label>
                <span data-text [ui-tooltip]="{ truncated: true }">
                    {{ label() }}
                </span>
                @if (subText()) {
                    <span data-sub-text>{{ subText() }}</span>
                }
            </span>
            <ng-content select="[data-trailing]"></ng-content>
        </ng-template>
        @if (As === 'a') {
            <a
                [attr.aria-label]="ariaLabel() || undefined"
                [attr.aria-selected]="ariaSelected()"
                [attr.role]="role"
                [attr.tabindex]="tabindex"
                [attr.href]="href()"
                [attr.data-action]="actionable || undefined"
                [attr.data-active]="active() || undefined"
                data-bspk="list-item"
                [attr.data-bspk-owner]="owner() || undefined"
                [attr.data-disabled]="isDisabled || undefined"
                [attr.data-readonly]="isReadonly || undefined"
                [attr.data-width]="width() === 'hug' ? 'hug' : undefined"
                [id]="id()"
                (click)="onClick($event)"
                (keydown.enter)="onClick($event)">
                <ng-container *ngTemplateOutlet="inner"></ng-container>
            </a>
        } @else if (As === 'button') {
            <button
                type="button"
                [attr.aria-label]="ariaLabel() || undefined"
                [attr.aria-selected]="ariaSelected()"
                [attr.role]="role"
                [attr.tabindex]="tabindex"
                [attr.data-action]="actionable || undefined"
                [attr.data-active]="active() || undefined"
                data-bspk="list-item"
                [attr.data-bspk-owner]="owner() || undefined"
                [attr.data-disabled]="isDisabled || undefined"
                [attr.data-readonly]="isReadonly || undefined"
                [attr.data-width]="width() === 'hug' ? 'hug' : undefined"
                [id]="id()"
                (click)="onClick($event)">
                <ng-container *ngTemplateOutlet="inner"></ng-container>
            </button>
        } @else if (As === 'label') {
            <label
                [attr.aria-label]="ariaLabel() || undefined"
                [attr.aria-selected]="ariaSelected()"
                [attr.role]="role"
                [attr.tabindex]="tabindex"
                [attr.data-action]="actionable || undefined"
                [attr.data-active]="active() || undefined"
                data-bspk="list-item"
                [attr.data-bspk-owner]="owner() || undefined"
                [attr.data-disabled]="isDisabled || undefined"
                [attr.data-readonly]="isReadonly || undefined"
                [attr.data-width]="width() === 'hug' ? 'hug' : undefined"
                [id]="id()"
                [attr.for]="htmlFor()"
                (click)="onClick($event)"
                (keydown.enter)="onClick($event)">
                <ng-container *ngTemplateOutlet="inner"></ng-container>
            </label>
        } @else {
            <div
                [attr.aria-label]="ariaLabel() || undefined"
                [attr.aria-selected]="ariaSelected()"
                [attr.role]="role"
                [attr.tabindex]="tabindex"
                [attr.data-action]="actionable || undefined"
                [attr.data-active]="active() || undefined"
                data-bspk="list-item"
                [attr.data-bspk-owner]="owner() || undefined"
                [attr.data-disabled]="isDisabled || undefined"
                [attr.data-readonly]="isReadonly || undefined"
                [attr.data-width]="width() === 'hug' ? 'hug' : undefined"
                [id]="id()"
                (click)="onClick($event)"
                (keydown.enter)="onClick($event)">
                <ng-container *ngTemplateOutlet="inner"></ng-container>
            </div>
        }
    `,
    host: {
        style: 'display: contents;',
        '[id]': 'listItemId()',
    },
})
export class UIListItem implements AsInputSignal<ListItemProps> {
    @Output() clicked = new EventEmitter<Event>();

    readonly active = input<ListItemProps['active']>();
    readonly owner = input<ListItemProps['owner']>();
    readonly ariaLabel = input<ListItemProps['ariaLabel']>();
    readonly ariaSelected = input<ListItemProps['ariaSelected']>();
    readonly ariaDisabled = input<ListItemProps['ariaDisabled']>();
    readonly ariaReadonly = input<ListItemProps['ariaReadonly']>();
    readonly htmlFor = input<ListItemProps['htmlFor']>();
    readonly disabled = input<ListItemProps['disabled']>();
    readonly readOnly = input<ListItemProps['readOnly']>();
    readonly as = input<ListItemProps['as']>('div');
    readonly href = input<ListItemProps['href']>();
    readonly label = input.required<ListItemProps['label']>();
    readonly subText = input<ListItemProps['subText']>();
    readonly width = input<ListItemProps['width']>();
    readonly tabIndex = input<ListItemProps['tabIndex']>();
    readonly id = input<ListItemProps['id']>();
    readonly listItemId = computed(() => (this.id() ? `list-item-${this.id()}` : undefined));

    get tabindex() {
        // allow explicit tabIndex to override actionable state
        return this.tabIndex() !== undefined ? this.tabIndex() : this.actionable ? 0 : -1;
    }

    get isReadonly() {
        return !!(this.readOnly() || this.ariaReadonly());
    }
    get isDisabled() {
        return !!(this.disabled() || this.ariaDisabled());
    }
    get actionable() {
        return (
            !!(this.href() || this.as() === 'button' || this.clicked.observed) && !this.isReadonly && !this.isDisabled
        );
    }

    get As() {
        const as = this.as();
        if (as) return as;
        if (this.href()) return 'a';
        return 'div';
    }

    get role(): string | undefined {
        if (!this.actionable) return undefined;
        if (this.as() === 'button') return undefined;
        return undefined;
    }

    onClick(event: Event) {
        if (this.isReadonly || this.isDisabled) return;
        this.clicked.emit(event);
    }
}
