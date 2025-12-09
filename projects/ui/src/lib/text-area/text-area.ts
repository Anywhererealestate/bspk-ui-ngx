import { Component, Input, input } from '@angular/core';
import { provideValidator, provideValueAccessor, TextInputControlValueAccessor, randomString } from '../../utils';
import { provideNgxMask } from 'ngx-mask';

@Component({
    selector: 'ui-text-area',
    imports: [],
    templateUrl: './text-area.html',
    styleUrl: './text-area.scss',
    providers: [provideValueAccessor(Input), provideValidator(Input), provideNgxMask()],
    host: {
        '[attr.data-size]': 'size()',
        '[attr.data-invalid]': 'invalid() || null',
        '[attr.aria-label]': 'label()',
        '(input)': 'handleInput($event)',
        '(blur)': 'handleBlur($event)',
    },
})
export class TextArea extends TextInputControlValueAccessor {
    /**
     * The maximum number of characters that the field will accept.
     *
     * @minimum 1
     */
    @Input() maxLength?: number;
    /**
     * The minimum number of rows that the textarea will show.
     *
     * @default 3
     * @minimum 3
     * @maximum 10
     */
    @Input() minRows?: number;
    /**
     * The maximum number of rows that the textarea will show.
     *
     * When set the textarea will automatically adjust its height to fit the content up to this limit.
     *
     * @default 10
     * @minimum 3
     * @maximum 10
     */
    @Input() maxRows?: number;

    readonly controlId = input(randomString());
}
