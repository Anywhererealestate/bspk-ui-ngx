import { CommonModule } from '@angular/common';
import { Component, input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BspkIcon } from '../../types/bspk-icon';
import { AsInputSignal, CommonProps } from '../../types/common';
import { UIIcon } from '../icon';
import { UITooltipDirective } from '../tooltip';

export type FabSize = 'medium' | 'small';
export type FabVariant = 'neutral' | 'primary' | 'secondary';
export type FabPlacement = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
export type FabContainer = 'local' | 'page';

export type FabIconType = BspkIcon;

export type FabProps = CommonProps<'ariaLabel' | 'owner' | 'style'> & {
    /** The label of the button. */
    label?: string;
    /**
     * The icon of the button.
     *
     * @type BspkIcon
     */
    icon?: FabIconType;
    /**
     * The size of the button.
     *
     * @default small
     */
    size?: FabSize;
    /**
     * The style variant of the button.
     *
     * @default primary
     */
    variant?: FabVariant;
    /**
     * The placement of the button on the container.
     *
     * @default bottom-right
     */
    placement?: FabPlacement;
    /**
     * The container to render the button in.
     *
     * @default local
     */
    container?: FabContainer;
    /**
     * When true the button label is hidden and only the icon is shown. When label isn't showing it is used in a tooltip
     * and as the aria-label prop.
     *
     * Ignored if `icon` is not provided.
     *
     * @default false
     */
    iconOnly?: boolean;
    /** The tool tip text that appears when hovered. */
    tooltip?: string;
};

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
            (mouseenter)="onMouseEnter($event)">
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
export class UIFab implements AsInputSignal<FabProps> {
    @Output() onClick = new EventEmitter<Event>();

    // Event forwarding for accessibility
    @Output() blur = new EventEmitter<FocusEvent>();
    @Output() focus = new EventEmitter<FocusEvent>();
    @Output() mouseLeaveEvent = new EventEmitter<MouseEvent>();
    @Output() mouseEnterEvent = new EventEmitter<MouseEvent>();

    readonly ariaLabel = input<FabProps['ariaLabel']>();
    readonly label = input<FabProps['label']>('');
    readonly icon = input<FabProps['icon']>();
    readonly tooltip = input<FabProps['tooltip']>();
    readonly size = input<FabProps['size']>('small');
    readonly variant = input<FabProps['variant']>('primary');
    readonly placement = input<FabProps['placement']>('bottom-right');
    readonly container = input<FabProps['container']>('local');
    readonly iconOnly = input<FabProps['iconOnly']>(false);

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
        this.mouseLeaveEvent.emit(event);
    }
    onMouseEnter(event: MouseEvent) {
        this.mouseEnterEvent.emit(event);
    }
}
