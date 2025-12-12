import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'ui-list-item',
    standalone: true,
    imports: [NgTemplateOutlet],
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./list-item.scss'],
    template: `
        <ng-template #inner>
            <ng-content select="[data-leading]"></ng-content>
            <span data-item-label>
                <span data-text>{{ label }}</span>
                @if (subText) {
                    <span data-sub-text>{{ subText }}</span>
                }
            </span>
            <ng-content select="[data-trailing]"></ng-content>
        </ng-template>
        @if (As === 'a') {
            <a
                [attr.aria-label]="ariaLabel || undefined"
                [attr.aria-selected]="ariaSelected"
                [attr.role]="role"
                [attr.tabindex]="tabIndex ?? (actionable ? 0 : -1)"
                [attr.href]="href"
                [attr.data-action]="actionable || undefined"
                [attr.data-active]="active || undefined"
                data-bspk="list-item"
                [attr.data-bspk-owner]="owner || undefined"
                [attr.data-disabled]="isDisabled || undefined"
                [attr.data-readonly]="isReadonly || undefined"
                [attr.data-width]="width === 'hug' ? 'hug' : undefined"
                [id]="id"
                (click)="onClick($event)"
                (keydown.enter)="onClick($event)">
                <ng-container *ngTemplateOutlet="inner"></ng-container>
            </a>
        } @else if (As === 'button') {
            <button
                type="button"
                [attr.aria-label]="ariaLabel || undefined"
                [attr.aria-selected]="ariaSelected"
                [attr.role]="role"
                [attr.tabindex]="tabIndex ?? (actionable ? 0 : -1)"
                [attr.data-action]="actionable || undefined"
                [attr.data-active]="active || undefined"
                data-bspk="list-item"
                [attr.data-bspk-owner]="owner || undefined"
                [attr.data-disabled]="isDisabled || undefined"
                [attr.data-readonly]="isReadonly || undefined"
                [attr.data-width]="width === 'hug' ? 'hug' : undefined"
                [id]="id"
                (click)="onClick($event)">
                <ng-container *ngTemplateOutlet="inner"></ng-container>
            </button>
        } @else if (As === 'label') {
            <label
                [attr.aria-label]="ariaLabel || undefined"
                [attr.aria-selected]="ariaSelected"
                [attr.role]="role"
                [attr.tabindex]="tabIndex ?? (actionable ? 0 : -1)"
                [attr.data-action]="actionable || undefined"
                [attr.data-active]="active || undefined"
                data-bspk="list-item"
                [attr.data-bspk-owner]="owner || undefined"
                [attr.data-disabled]="isDisabled || undefined"
                [attr.data-readonly]="isReadonly || undefined"
                [attr.data-width]="width === 'hug' ? 'hug' : undefined"
                [id]="id"
                [attr.for]="htmlFor"
                (click)="onClick($event)"
                (keydown.enter)="onClick($event)">
                <ng-container *ngTemplateOutlet="inner"></ng-container>
            </label>
        } @else {
            <div
                [attr.aria-label]="ariaLabel || undefined"
                [attr.aria-selected]="ariaSelected"
                [attr.role]="role"
                [attr.tabindex]="tabIndex ?? (actionable ? 0 : -1)"
                [attr.data-action]="actionable || undefined"
                [attr.data-active]="active || undefined"
                data-bspk="list-item"
                [attr.data-bspk-owner]="owner || undefined"
                [attr.data-disabled]="isDisabled || undefined"
                [attr.data-readonly]="isReadonly || undefined"
                [attr.data-width]="width === 'hug' ? 'hug' : undefined"
                [id]="id"
                (click)="onClick($event)"
                (keydown.enter)="onClick($event)">
                <ng-container *ngTemplateOutlet="inner"></ng-container>
            </div>
        }
    `,
    host: {
        style: 'display: contents;',
    },
})
export class UIListItem {
    @Input() active?: boolean;
    @Input() owner?: string;
    @Input() ariaLabel?: string | null;
    @Input() ariaSelected?: boolean | null;
    @Input() ariaDisabled?: boolean | null;
    @Input() ariaReadonly?: boolean | null;
    @Input() htmlFor?: string;
    @Input() disabled?: boolean;
    @Input() readonly?: boolean;

    @Input() as: 'div' | 'a' | 'button' | 'label' = 'div';
    @Input() href?: string;

    @Input() label!: string;
    @Input() subText?: string;

    @Input() width?: 'fill' | 'hug';

    @Input() tabIndex?: number | null;

    @Output() clicked = new EventEmitter<Event>();

    id = `${Math.random().toString(36).slice(2)}`;

    get isReadonly() {
        return !!(this.readonly || this.ariaReadonly);
    }
    get isDisabled() {
        return !!(this.disabled || this.ariaDisabled);
    }
    get actionable() {
        return !!(this.href && !this.isReadonly && !this.isDisabled) || this.as === 'button';
    }

    get As() {
        if (this.as) return this.as;
        if (this.href) return 'a';
        return 'div';
    }

    get role(): string | undefined {
        if (!this.actionable) return undefined;
        if (this.as === 'button') return undefined;
        return undefined;
    }

    onClick(event: Event) {
        if (this.isReadonly || this.isDisabled) return;
        this.clicked.emit(event);
    }
}
