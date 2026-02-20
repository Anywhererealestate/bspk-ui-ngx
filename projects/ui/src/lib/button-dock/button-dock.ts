import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { UIButton, ButtonVariant } from '../button';

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
 * React renders two <Button> with enforced: size="medium", variant primary/secondary.
 * Icons are not used here.
 */
@Component({
  standalone: true,
  selector: 'ui-button-dock',
  imports: [CommonModule, UIButton],
  template: `
    <div
      data-bspk="button-dock"
      [attr.data-mode]="mode()"
      [attr.data-arrangement]="finalArrangement"
    >
      <ui-button
        *ngIf="secondaryButton() as s"
        [label]="s.label"
        [disabled]="!!s.disabled"
        [ariaLabel]="s.ariaLabel"
        [size]="'medium'"
        [variant]="'secondary' as ButtonVariant"
        (click)="secondaryClick.emit()"
      ></ui-button>

      <ui-button
        *ngIf="primaryButton() as p"
        [label]="p.label"
        [disabled]="!!p.disabled"
        [ariaLabel]="p.ariaLabel"
        [size]="'medium'"
        [variant]="'primary' as ButtonVariant"
        (click)="primaryClick.emit()"
      ></ui-button>
    </div>
  `,
  host: {
    style: 'display:block;',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UIButtonDock {
  readonly primaryButton = input.required<ButtonDockButton>();
  readonly secondaryButton = input<ButtonDockButton | undefined>(undefined);

  readonly arrangement = input<ButtonDockArrangement>('fill');
  readonly mode = input<ButtonDockMode>('inline');

  @Output() primaryClick = new EventEmitter<void>();
  @Output() secondaryClick = new EventEmitter<void>();

  get finalArrangement(): ButtonDockArrangement {
    return this.secondaryButton() ? this.arrangement() : 'fill';
  }
}