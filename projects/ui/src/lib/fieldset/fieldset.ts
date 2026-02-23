import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core';
import { uniqueId } from '@ui/utils/random';
import { UIInlineAlert } from '../inline-alert';

export interface FieldsetProps {
    label: string;
    helperText?: string;
    labelTrailing?: string;
    errorMessage?: string;
    required?: boolean;
    controlId?: string;
}

/**
 * A fieldset that groups a label, optional helper/error text, and projected form controls.
 *
 * ```html
 * <ui-fieldset label="Email" [required]="true" helperText="We'll never share your email.">
 *   <input type="email" />
 * </ui-fieldset>
 * ```
 *
 * @name Fieldset
 * @phase Dev
 */
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
                        @if (required()) {
                            <span data-required> (Required)</span>
                        }
                        @if (labelTrailing()) {
                            <span aria-hidden="true" data-trailing>{{ labelTrailing() }}</span>
                        }
                    </span>
                </legend>

                <ng-content></ng-content>

                @if (errorMessage()) {
                    <ui-inline-alert
                        [id]="errorMessageId()"
                        [label]="errorMessage()!"
                        [owner]="'field-error'"
                        [variant]="'error'"></ui-inline-alert>
                } @else {
                    @if (helperText()) {
                        <p data-field-description [id]="describedById()">
                            {{ helperText() }}
                        </p>
                    }
                }
            </fieldset>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIFieldset {
    readonly label = input.required<string>();
    readonly helperText = input<string | undefined>();
    readonly labelTrailing = input<string | undefined>();
    readonly errorMessage = input<string | undefined>();
    readonly required = input<boolean>(false);

    readonly controlId = input<string | undefined>();

    readonly labelledById = computed(() => `${this.baseId()}-label`);
    readonly describedById = computed(() => `${this.baseId()}-description`);
    readonly errorMessageId = computed(() => `${this.baseId()}-error`);

    private readonly baseId = computed(() => this.controlId() || uniqueId('fieldset'));
}
