import { Component, input, ViewEncapsulation, viewChild, inject, effect } from '@angular/core';

import { provideNgxMask } from 'ngx-mask';
import { provideValidator, provideValueAccessor, TextInputControlValueAccessor, randomString } from '../../utils';
import { NgxMaskDirective, NgxMaskService } from 'ngx-mask';
import { Mask } from '../../utils/mask';

@Component({
    selector: 'ui-input',
    imports: [],
    templateUrl: './input.html',
    styleUrl: './input.scss',
    providers: [provideValueAccessor(Input), provideValidator(Input), provideNgxMask()],
    host: {
        'data-bspk': 'input',
        '[attr.data-size]': 'size()',
        '[attr.data-invalid]': 'invalid() || null',
    },
    encapsulation: ViewEncapsulation.None,
})
export class Input extends TextInputControlValueAccessor {
    readonly controlId = input(randomString());
    readonly leading = input<string>();
    readonly trailing = input<string>();
    readonly mask = input<Mask>();
    private readonly maskDirective = viewChild(NgxMaskDirective);
    private readonly maskService = inject(NgxMaskService);

    constructor() {
        super();

        effect(() => {
            this.maskDirective()?.writeValue(this.value());
        });
    }

    override onInit() {
        this.maskDirective()?.writeValue(this.value());
    }

    override handleInput(event: Event) {
        const raw = (event.target as HTMLInputElement).value;
        const out = this.mask()?.dropSpecialCharacters ? this.maskService.removeMask(raw) : raw;
        this.value.set(out);
        this.onChange(out);
    }
}
