import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BspkIcon } from '../../types/bspk-icon';
import { BadgeProps, UIBadge } from '../badge';
import { UIIcon } from '../icon';

export interface ChipProps {
    disabled?: boolean;
    flat?: boolean;
    label: string;
    selected?: boolean;
    leadingIcon?: BspkIcon;
    trailingIcon?: BspkIcon;
    trailingBadge?: BadgeProps;
    click?: (event: Event) => void;
}

/**
 * Dynamically generated options that are suggested to the user as responses or prompts.
 *
 * @example
 *     import { Chip } from '@bspk/ui/Chip';
 *
 *     <Chip label="Label" click={() => sendSnackbar('Chip clicked!')}>
 *     Example Chip
 *     </Chip>;
 *
 * @name Chip
 * @phase UXReview
 */
@Component({
    selector: 'ui-chip',
    standalone: true,
    imports: [UIBadge, UIIcon],
    template: `<button
        data-bspk="chip"
        [attr.data-disabled]="disabled || undefined"
        [attr.data-flat]="flat || undefined"
        [attr.data-selected]="selected || undefined"
        data-touch-target-parent
        [disabled]="disabled"
        (click)="handleOnClick($event)">
        @if (leadingIcon) {
            <span [attr.aria-hidden]="true" data-chip-icon>
                <ui-icon [icon]="leadingIcon"></ui-icon>
            </span>
        }

        <span>{{ label }}</span>

        @if (trailingIcon) {
            <span [attr.aria-hidden]="true" data-chip-icon>
                <ui-icon [icon]="trailingIcon"></ui-icon>
            </span>
        }

        @if (trailingBadge && !trailingIcon) {
            <ui-badge
                [count]="trailingBadge.count"
                [size]="
                    trailingBadge.size === 'small' || trailingBadge.size === 'x-small' ? trailingBadge.size : 'small'
                "
                [surfaceBorder]="trailingBadge.surfaceBorder ?? false"></ui-badge>
        }
        <span data-touch-target></span>
    </button>`,
    styleUrls: ['./chip.scss'],
    host: {
        style: 'display: contents;',
    },
})
export class UIChip {
    /**
     * Is the chip disabled.
     *
     * @default false
     */
    @Input() disabled = false;

    /**
     * Is the chip elevated or flat. If flat the drop shadow is removed.
     *
     * @default false
     */
    @Input() flat = false;

    /**
     * The label of the chip.
     *
     * @example
     *     Hello I am Chip
     *
     * @required
     */
    @Input() label!: string;

    /**
     * Visual indication of whether the chip is currently selected.
     *
     * @default false
     */
    @Input() selected = false;

    /**
     * The leading icon of the chip.
     *
     * @type BspkIcon
     */
    @Input() leadingIcon?: BspkIcon;

    /**
     * The trailing icon of the chip.
     *
     * You can only have one of the trailing options, trailingIcon **or** trailingBadge. If both are present the
     * trailingIcon will be visible.
     *
     * @type BspkIcon
     */
    @Input() trailingIcon?: BspkIcon;

    /**
     * The trailing Badge for use in the ChipFilter.
     *
     * If a trailingIcon is provided the Badge will **not** be visible.
     */
    @Input() trailingBadge?: BadgeProps;

    /** The function to call when the chip is clicked. */
    @Output() onClick = new EventEmitter<Event>();

    handleOnClick(event: MouseEvent) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
    }
}
