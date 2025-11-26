import { Component, effect, ElementRef, input, ViewEncapsulation, inject, Input } from '@angular/core';

import { ICON_REGISTRY } from './icon-registry';

@Component({
    selector: 'ui-icon',
    imports: [],
    template: '',
    styles: 'ui-icon { display: contents; }',
    encapsulation: ViewEncapsulation.None,
})
export class UIIcon {
    /** @see https://bspk.anywhere.re/icons */
    name = input.required<string>();
    @Input() width?: string;

    constructor() {
        const elementRef = inject(ElementRef);
        const iconRegistry = ICON_REGISTRY;

        effect(() => {
            // option 1
            // const name = this.name() as keyof typeof ICON_REGISTRY;
            // const svg = ICON_REGISTRY[name];

            // option 2
            const name = this.name();
            const svg = ICON_REGISTRY[name as keyof typeof ICON_REGISTRY] ?? '';
            elementRef.nativeElement.innerHTML = svg || '';
            if (this.width && elementRef.nativeElement.children[0]) {
                elementRef.nativeElement.children[0].setAttribute('width', this.width);
            }
        });
    }
}
