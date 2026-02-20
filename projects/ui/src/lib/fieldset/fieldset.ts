import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core';
import { UIInlineAlert } from '../inline-alert';

export interface FieldsetProps {
  label: string;
  helperText?: string;
  labelTrailing?: string;
  errorMessage?: string;
  required?: boolean;
  controlId?: string;
}

/** Local per-instance id generator (no shared utilities). */
let __fieldsetId = 0;
function nextId(prefix: string) {
  __fieldsetId += 1;
  return `${prefix}-${__fieldsetId}`;
}

@Component({
  standalone: true,
  selector: 'ui-fieldset',
  imports: [CommonModule, UIInlineAlert],
  template: `
    <div data-bspk-utility="field">
      <fieldset role="group">
        <legend>
          <span data-field-label [id]="labelledById()">
            <span>{{ label() }}</span>
            <span *ngIf="required()" data-required> (Required)</span>
            <span *ngIf="labelTrailing()" aria-hidden="true" data-trailing>{{ labelTrailing() }}</span>
          </span>
        </legend>

        <ng-content></ng-content>

        <ng-container *ngIf="errorMessage(); else helper">
          <ui-inline-alert
            [id]="errorMessageId()"
            [label]="errorMessage()!"
            [owner]="'field-error'"
            [variant]="'error'"
          ></ui-inline-alert>
        </ng-container>

        <ng-template #helper>
          <p *ngIf="helperText()" data-field-description [id]="describedById()">
            {{ helperText() }}
          </p>
        </ng-template>
      </fieldset>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UIFieldset {
  readonly label = input.required<string>();
  readonly helperText = input<string | undefined>(undefined);
  readonly labelTrailing = input<string | undefined>(undefined);
  readonly errorMessage = input<string | undefined>(undefined);
  readonly required = input<boolean>(false);

  readonly controlId = input<string | undefined>(undefined);

  private readonly baseId = computed(() => this.controlId() || nextId('fieldset'));

  readonly labelledById = computed(() => `${this.baseId()}-label`);
  readonly describedById = computed(() => `${this.baseId()}-description`);
  readonly errorMessageId = computed(() => `${this.baseId()}-error`);
}