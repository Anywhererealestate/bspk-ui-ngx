import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { AsSignal } from '../../types/common';
import { ButtonProps, UIButton } from '../button';

export interface ButtonDockProps {
    /**
     * The primary button in the dock. If a secondary button is provided the primary will render on the right side.
     *
     * @required
     */
    primaryButton: ButtonProps;
    /**
     * Secondary button. If provided will render on the left side.
     *
     * @required
     */
    secondaryButton?: ButtonProps;
    /**
     * If more than one button is provided defines how the buttons should be arranged.
     *
     * @default fill
     */
    arrangement?: 'fill' | 'spread';
    /**
     * If the dock should render inline or fixed to the bottom of the viewport.
     *
     * @default inline
     */
    mode?: 'fixed' | 'inline';
}

/**
 * A dock that renders two buttons with enforced size medium and primary/secondary variants.
 *
 * ```html
 * <ui-button-dock
 *     [primaryButton]="{ label: 'Submit' }"
 *     [secondaryButton]="{ label: 'Cancel' }"
 *     (primaryClick)="onSubmit()"
 *     (secondaryClick)="onCancel()" />
 * ```
 *
 * @name ButtonDock
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-button-dock',
    imports: [CommonModule, UIButton],
    styleUrl: './button-dock.scss',
    template: `
        <div data-bspk="button-dock" [attr.data-mode]="mode()" [attr.data-arrangement]="finalArrangement">
            @if (secondaryButton(); as s) {
                <ui-button
                    [label]="s.label"
                    [disabled]="!!s.disabled"
                    [ariaLabel]="s.ariaLabel"
                    [size]="'medium'"
                    [variant]="'secondary'"
                    (click)="secondaryClick.emit()"></ui-button>
            }

            @if (primaryButton(); as p) {
                <ui-button
                    [label]="p.label"
                    [disabled]="!!p.disabled"
                    [ariaLabel]="p.ariaLabel"
                    [size]="'medium'"
                    [variant]="'primary'"
                    (click)="primaryClick.emit()"></ui-button>
            }
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIButtonDock implements AsSignal<ButtonDockProps> {
    @Output() primaryClick = new EventEmitter<void>();
    @Output() secondaryClick = new EventEmitter<void>();

    readonly primaryButton = input.required<ButtonDockProps['primaryButton']>();
    readonly secondaryButton = input<ButtonDockProps['secondaryButton']>();

    readonly arrangement = input<ButtonDockProps['arrangement']>('fill');
    readonly mode = input<ButtonDockProps['mode']>('inline');

    get finalArrangement() {
        return this.secondaryButton() ? this.arrangement() : 'fill';
    }
}
