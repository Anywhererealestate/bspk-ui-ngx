import { Component, effect, ElementRef, input, ViewEncapsulation, inject, Input, ViewContainerRef  } from '@angular/core';
import { BspkIcon } from '../../types/bspk-icon';

@Component({
    selector: 'ui-icon',
    imports: [],
    template: '',
    styles: 'ui-icon { display: contents; }',
    encapsulation: ViewEncapsulation.None,
})
export class UIIcon {
    /** @see https://bspk.anywhere.re/icons */
    @Input() icon!: BspkIcon;
    @Input() width?: string;

    constructor() {
        const elementRef = inject(ElementRef);
        const viewContainerRef = inject(ViewContainerRef);

        effect(async (onCleanup) => {
            let canceled = false;
            onCleanup(() => {
                canceled = true;
            });

            // If icon is a component (BspkIcon), render it dynamically
            if (typeof this.icon === 'function') {
                viewContainerRef.clear();
                const ref = viewContainerRef.createComponent(this.icon);
                if (this.width) {
                    (ref.instance as { width?: string }).width = this.width;
                }
                return;
            }
        });
    }
}