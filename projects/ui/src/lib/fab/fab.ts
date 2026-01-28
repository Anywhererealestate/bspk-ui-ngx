import { CommonModule } from '@angular/common';
import { Component, input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BspkIcon } from '../../types/bspk-icon';
import { UIIcon } from '../icon';
import { UITooltipDirective } from '../tooltip';

export type FabSize = 'medium' | 'small';
export type FabVariant = 'neutral' | 'primary' | 'secondary';
export type FabPlacement = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
export type FabContainer = 'local' | 'page';

export type FabIconType = BspkIcon;

@Component({
    selector: 'ui-fab',
    template: `
        <button
            [ui-tooltip]="tooltipLabel"
            type="button"
            [attr.aria-label]="ariaLabel() || label()"
            data-bspk="fab"
            [attr.data-container]="container()"
            [attr.data-placement]="placement()"
            [attr.data-position]="container() === 'page' ? 'fixed' : 'absolute'"
            [attr.data-round]="iconOnly() ? true : null"
            [attr.data-size]="size()"
            [attr.data-variant]="variant()"
            (click)="onClick.emit($event)"
            (blur)="onBlur($event)"
            (focus)="onFocus($event)"
            (mouseleave)="onMouseLeave($event)"
            (mouseover)="onMouseOver($event)"
            [disabled]="disabled()">
            @if (!label()) {
                <ng-content></ng-content>
            } @else {
                @if (icon()) {
                    <span [attr.aria-hidden]="true" [attr.data-fab-icon]="true">
                        <ui-icon [icon]="icon()!"></ui-icon>
                    </span>
                }
                @if (shouldShowLabel) {
                    <span [attr.data-button-label]="true">{{ label() }}</span>
                }
            }
            <span [attr.data-touch-target]="true"></span>
        </button>
    `,
    styleUrl: './fab.scss',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [CommonModule, UIIcon, UITooltipDirective],
})
export class UIFab {
    @Output() onClick = new EventEmitter<Event>();

    // Event forwarding for accessibility
    @Output() blur = new EventEmitter<FocusEvent>();
    @Output() focus = new EventEmitter<FocusEvent>();
    @Output() mouseleave = new EventEmitter<MouseEvent>();
    @Output() mouseover = new EventEmitter<MouseEvent>();

    readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
    readonly label = input<string>('');
    readonly icon = input<FabIconType | undefined>();
    readonly tooltip = input<string | undefined>(undefined);
    readonly size = input<FabSize>('small');
    readonly variant = input<FabVariant>('primary');
    readonly placement = input<FabPlacement>('bottom-right');
    readonly container = input<FabContainer>('local');
    readonly iconOnly = input<boolean>(false);
    readonly disabled = input<boolean>(false);

    get tooltipLabel(): string | undefined {
        return this.tooltip() || (this.iconOnly() ? this.label() : undefined);
    }

    get shouldShowLabel(): boolean {
        return !this.iconOnly();
    }

    isIconTemplate() {
        return typeof this.icon() !== 'string';
    }

    onBlur(event: FocusEvent) {
        this.blur.emit(event);
    }
    onFocus(event: FocusEvent) {
        this.focus.emit(event);
    }
    onMouseLeave(event: MouseEvent) {
        this.mouseleave.emit(event);
    }
    onMouseOver(event: MouseEvent) {
        this.mouseover.emit(event);
    }
}
