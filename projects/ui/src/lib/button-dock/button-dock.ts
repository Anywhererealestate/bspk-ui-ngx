import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { UIButton } from '../button';

export type ButtonDockArrangement = 'fill' | 'hug';
export type ButtonDockMode = 'inline' | 'stacked';

export interface ButtonDockButton {
    label: string;
    disabled?: boolean;
    ariaLabel?: string;
}

export interface ButtonDockProps {
    primaryButton: ButtonDockButton;
    secondaryButton?: ButtonDockButton;
    arrangement?: ButtonDockArrangement;
    mode?: ButtonDockMode;
}

/**
 * A dock that renders two buttons with enforced size medium and primary/secondary variants.
 *
 * ```html
 * <ui-button-dock
 *   [primaryButton]="{ label: 'Submit' }"
 *   [secondaryButton]="{ label: 'Cancel' }"
 *   (primaryClick)="onSubmit()"
 *   (secondaryClick)="onCancel()" />
 * ```
 *
 * @name ButtonDock
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-button-dock',
    imports: [CommonModule, UIButton],
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
    host: {
        style: 'display:block;',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIButtonDock {
    @Output() primaryClick = new EventEmitter<void>();
    @Output() secondaryClick = new EventEmitter<void>();

    readonly primaryButton = input.required<ButtonDockButton>();
    readonly secondaryButton = input<ButtonDockButton | undefined>();

    readonly arrangement = input<ButtonDockArrangement>('fill');
    readonly mode = input<ButtonDockMode>('inline');

    get finalArrangement(): ButtonDockArrangement {
        return this.secondaryButton() ? this.arrangement() : 'fill';
    }
}
