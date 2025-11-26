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

    // constructor() {
    //     const elementRef = inject(ElementRef);
    //     const iconRegistry = inject(ICON_REGISTRY);

    //     effect(async (onCleanup) => {
    //         let canceled = false;
    //         onCleanup(() => {
    //             canceled = true;
    //         });
    //         const res = await iconRegistry.getIcon(this.name());
    //         if (canceled) return;

    //         elementRef.nativeElement.innerHTML = res;
    //         if (this.width) elementRef.nativeElement.children[0]?.setAttribute('width', this.width);
    //     });
    // }

    constructor() {
        const elementRef = inject(ElementRef);
        // ICON_REGISTRY is an object, not a service
        const iconRegistry = ICON_REGISTRY;

        // effect(() => {
        //     const svg = iconRegistry[this.name()];
        //     elementRef.nativeElement.innerHTML = svg || '';
        //     if (this.width && elementRef.nativeElement.children[0]) {
        //         elementRef.nativeElement.children[0].setAttribute('width', this.width);
        //     }
        // });
        effect(() => {
            // const name = this.name() as keyof typeof ICON_REGISTRY;
            // const svg = ICON_REGISTRY[name];
            const name = this.name();
            const svg = ICON_REGISTRY[name as keyof typeof ICON_REGISTRY] ?? '';
            elementRef.nativeElement.innerHTML = svg || '';
            if (this.width && elementRef.nativeElement.children[0]) {
                elementRef.nativeElement.children[0].setAttribute('width', this.width);
            }
        });
    }

    // constructor() {
    //     const elementRef = inject(ElementRef);

    //     effect(() => {
    //         const name = this.name();
    //         const svg = ICON_REGISTRY[name] ?? '';
    //         elementRef.nativeElement.innerHTML = svg;
    //         if (this.width && elementRef.nativeElement.children[0]) {
    //             elementRef.nativeElement.children[0].setAttribute('width', this.width);
    //         }
    //     });
    // }
}
