import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { UIButton, ButtonVariant } from '../button';
import { UIFlex } from '../flex';
import { UITxt } from '../txt';

export type EmptyStateBodyAlign = 'center' | 'left';

export interface EmptyStateCallToAction {
  label: string;
  size?: 'large' | 'medium' | 'small';
}

export interface EmptyStateProps {
  header: string;
  body: string;
  bodyAlign?: EmptyStateBodyAlign;
  callToAction?: EmptyStateCallToAction;
}

/**
 * React uses: Flex + Txt + optional Button.
 * Icon usage: none.
 */
@Component({
  standalone: true,
  selector: 'ui-empty-state',
  imports: [CommonModule, UIFlex, UITxt, UIButton],
  template: `
    <ui-flex data-bspk="empty-state" [align]="'center'" [direction]="'column'" [gap]="'16'">
      <ng-content></ng-content>

      <ui-flex
        [align]="bodyAlign() === 'left' ? 'flex-start' : 'center'"
        [direction]="'column'"
        [gap]="'4'"
        [style.textAlign]="bodyAlign()"
      >
        <ui-txt [variant]="'heading-h5'">{{ header() }}</ui-txt>
        <ui-txt [variant]="'body-base'">{{ body() }}</ui-txt>
      </ui-flex>

      <ui-button
        *ngIf="callToAction() as cta"
        [label]="cta.label"
        [size]="cta.size || 'medium'"
        [variant]="'primary' as ButtonVariant"
        (click)="callToActionClick.emit()"
      ></ui-button>
    </ui-flex>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UIEmptyState {
  readonly header = input.required<string>();
  readonly body = input.required<string>();
  readonly bodyAlign = input<EmptyStateBodyAlign>('center');
  readonly callToAction = input<EmptyStateCallToAction | undefined>(undefined);

  @Output() callToActionClick = new EventEmitter<void>();
}