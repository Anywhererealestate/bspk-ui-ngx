import { Component, ViewEncapsulation, input } from '@angular/core';
import { AsInputSignal, CommonProps } from '../../types/common';
import { UIInlineAlert } from '../inline-alert/inline-alert';

/**
 * Wrapper component for form controls.
 *
 * Children should be one of the following: DatePicker, Input, InputNumber, InputPhone, Password, Select, Textarea, or
 * TimePicker.
 *
 * @example
 *     import { Input } from '@bspk/ui/Input';
 *     import { Field } from '@bspk/ui/Field';
 *
 *     () => {
 *     const [state, setState] = useState<string | undefined>(undefined);
 *
 *     return (
 *     <Field controlId="example-control-id" helperText="This is an example description." label="Example label">
 *     <Input
 *     aria-label="example aria-label"
 *     id="example-control-id"
 *     name="example-text"
 *     onChange={(next) => {
 *     setState(next);
 *     }}
 *     value={state}
 *     />
 *     </Field>
 *     );
 *     };
 *
 * @name Field
 * @phase Utility
 */
export interface FieldProps extends CommonProps<'style'> {
    /** Displays an error message and marks the field as invalid. */
    errorMessage?: string;
    /**
     * The label of the field.
     *
     * @required
     */
    label: string;
    /**
     * This text provides additional context or instructions for the field.
     *
     * If an errorMessage is present, the helperText will not be displayed.
     */
    helperText?: string;
    /** The trailing element of the label. */
    labelTrailing?: string;
    /** Marks the field as required. */
    required?: boolean;
    /**
     * The id attribute of the form control rendered in children (e.g., Input, Select, Textarea). Used to associate the
     * label (htmlFor) with the control for accessibility. Must exactly match the control's id.
     *
     * @required
     */
    controlId: string;
}

@Component({
    selector: 'ui-field',
    standalone: true,
    imports: [UIInlineAlert],
    template: `
        <label data-field-label [attr.htmlFor]="controlId()" [attr.id]="labelledById()">
            <span>{{ label() }}</span>
            @if (required()) {
                <span data-required>(Required)</span>
            }
            @if (labelTrailing()) {
                <span aria-hidden="true" data-trailing>{{ labelTrailing() }}</span>
            }
        </label>
        <ng-content />
        @if (errorMessage()) {
            <ui-inline-alert [id]="errorMessageId()" [label]="errorMessage()!" owner="field-error" variant="error" />
        } @else if (helperText()) {
            <p data-field-description [attr.id]="describedById()">{{ helperText() }}</p>
        }
    `,
    styleUrl: './field.scss',
    host: {
        'data-bspk-utility': 'field',
        role: 'group',
        '[style]': 'style() || null',
    },
    encapsulation: ViewEncapsulation.None,
})
export class UIField implements AsInputSignal<FieldProps> {
    // Inputs (no JSDoc on class inputs per requirements)
    readonly errorMessage = input<string | undefined>(undefined);
    readonly label = input.required<string>();
    readonly helperText = input<string | undefined>(undefined);
    readonly labelTrailing = input<string | undefined>(undefined);
    readonly required = input<boolean | undefined>(undefined);
    readonly controlId = input.required<string>();
    readonly style = input<string | undefined>(undefined);

    labelledById(): string {
        return `${this.controlId()}-label`;
    }

    errorMessageId(): string {
        return `${this.controlId()}-field-error`;
    }

    describedById(): string {
        return `${this.controlId()}-description`;
    }
}
