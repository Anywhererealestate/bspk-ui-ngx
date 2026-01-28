import { Component, ViewEncapsulation, inject, ViewContainerRef, AfterViewInit, input, DoCheck } from '@angular/core';
import { BspkIcon } from '../../types/bspk-icon';

@Component({
    selector: 'ui-icon',
    template: '',
    styles: 'ui-icon { display: contents; }',
    encapsulation: ViewEncapsulation.None,
})
export class UIIcon implements AfterViewInit, DoCheck {
    /** @see https://bspk.anywhere.re/icons */
    readonly icon = input.required<BspkIcon>();
    readonly width = input<string>();

    viewContainerRef = inject(ViewContainerRef);
    private lastIcon: BspkIcon | undefined;

    ngAfterViewInit() {
        this.renderIcon();
    }

    ngDoCheck() {
        this.renderIcon();
    }

    private renderIcon() {
        const iconValue = this.icon();

        if (iconValue === this.lastIcon) return;

        this.lastIcon = iconValue;

        if (typeof iconValue !== 'function') return;

        this.viewContainerRef.clear();

        const icon = this.viewContainerRef.createComponent(iconValue).instance;
        icon.width = this.width();
    }
}
