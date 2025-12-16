import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
    ViewEncapsulation,
    signal,
    input,
    OnInit,
    AfterViewInit,
} from '@angular/core';
import { randomString } from '../../utils/randomString';

/**
 * A component that allows users to input large amounts of text that could span multiple lines.
 *
 * This component gives you a textarea HTML element that automatically adjusts its height to match the length of the
 * content within maximum and minimum rows. A character counter when a maxLength is set to show the number of characters
 * remaining below the limit.
 *
 * For a more complete example with field usage, see the TextareaField component.
 *
 * @example
 *     import { useState } from 'react';
 *     import { Textarea } from '@bspk/ui/Textarea';
 *
 *     () => {
 *     const [value, setValue] = useState<string | undefined>('');
 *
 *     return (
 *     <div style={{ width: 320 }}>
 *     <Field>
 *     <FieldLabel>Example Textarea</FieldLabel>
 *     <Textarea name="example-name" onChange={setValue} value={value} />
 *     <FieldDescription>This is an example textarea field.</FieldDescription>
 *     </Field>
 *     </div>
 *     );
 *     };
 *
 * @element
 *
 * @name Textarea
 * @phase Stable
 */
@Component({
    selector: 'ui-textarea',
    standalone: true,
    template: `
        <textarea
            #el
            data-main-input
            [attr.aria-label]="ariaLabel() || null"
            [attr.aria-invalid]="invalid() || null"
            [disabled]="disabled()"
            [id]="computedId()"
            [attr.name]="name() || null"
            [attr.placeholder]="placeholder() || null"
            [attr.maxLength]="maxLength() ?? null"
            [readOnly]="readOnly() || null"
            [required]="required() || null"
            [value]="value() ?? ''"
            (blur)="handleBlur($event)"
            (input)="handleInput($event)"
            wrap="hard"></textarea>
        <div aria-hidden="true" data-replicated-value>{{ replicated() }}</div>
    `,
    styleUrl: './textarea.scss',
    host: {
        'data-bspk': 'textarea',
        '[attr.data-disabled]': 'disabled() ? true : null',
        '[attr.data-invalid]': 'invalid() ? true : null',
        '[attr.data-readonly]': 'readOnly() ? true : null',
        '[attr.data-size]': 'size()',
        '[style.--min-rows]': 'minRows()',
        '[style.--max-rows]': 'maxRows()',
    },
    encapsulation: ViewEncapsulation.None,
})
export class UITextarea implements OnInit, AfterViewInit {
    /** Emits the current value when the user types. */
    @Output() valueChange = new EventEmitter<string>();
    /** React-style change event: emits [value, event]. */
    @Output() onChange = new EventEmitter<[string, Event]>();
    @ViewChild('el') el?: ElementRef<HTMLTextAreaElement>;

    @Input() innerRef?: (el: HTMLTextAreaElement | null) => void;

    /** The placeholder of the field. */
    readonly placeholder = input<string | undefined>(undefined);

    /** The ref of the field. */

    /**
     * The maximum number of characters that the field will accept.
     *
     * @minimum 1
     */
    readonly maxLength = input<number | undefined>(undefined);

    /**
     * The minimum number of rows that the textarea will show.
     *
     * @default 3
     * @minimum 3
     * @maximum 10
     */
    readonly minRows = input<number>(4);

    /**
     * The maximum number of rows that the textarea will show.
     *
     * When set the textarea will automatically adjust its height to fit the content up to this limit.
     *
     * @default 10
     * @minimum 3
     * @maximum 10
     */
    readonly maxRows = input<number>(10);

    // CommonProps<'size'>
    readonly size = input<'large' | 'medium' | 'small'>('medium');

    // FieldControlProps<string, ChangeEvent<HTMLTextAreaElement>>
    readonly value = input<string | undefined>('');
    readonly name = input<string | undefined>(undefined);
    readonly id = input<string | undefined>(undefined);
    readonly invalid = input<boolean>(false);
    readonly required = input<boolean>(false);
    readonly readOnly = input<boolean>(false);
    readonly disabled = input<boolean>(false);
    readonly ariaLabel = input<string | undefined>(undefined);
    readonly replicated = signal<string>('');

    private readonly _autoId = signal<string>(randomString());

    computedId() {
        return this.id() || this._autoId();
    }

    ngOnInit() {
        this.replicated.set(`${this.value() ?? ''}\n`);
    }

    ngAfterViewInit() {
        this.innerRef?.(this.el?.nativeElement ?? null);
    }

    handleBlur(event: FocusEvent) {
        const target = event.target as HTMLTextAreaElement;
        target.scrollTop = 0;
    }

    handleInput(event: Event) {
        const target = event.target as HTMLTextAreaElement;
        const val = target.value;
        this.replicated.set(`${val}\n`);
        this.valueChange.emit(val);
        this.onChange.emit([val, event]);
    }
}
