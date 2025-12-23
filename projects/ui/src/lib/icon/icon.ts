import { Component, ViewEncapsulation, inject, ViewContainerRef, AfterViewInit, input } from '@angular/core';
import { BspkIcon } from '../../types/bspk-icon';

@Component({
    selector: 'ui-icon',
    template: '',
    styles: 'ui-icon { display: contents; }',
    encapsulation: ViewEncapsulation.None,
})
export class UIIcon implements AfterViewInit {
    /** @see https://bspk.anywhere.re/icons */
    readonly icon = input.required<BspkIcon>();
    readonly width = input<string>();

    viewContainerRef = inject(ViewContainerRef);

    ngAfterViewInit() {
        const iconValue = this.icon();
        if (typeof iconValue !== 'function') return;

        const icon = this.viewContainerRef.createComponent(iconValue).instance;

        icon.width = this.width();
    }
}
