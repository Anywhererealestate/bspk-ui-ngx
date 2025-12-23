import { Component, ViewEncapsulation, ElementRef, AfterViewInit, model, viewChild } from '@angular/core';
import { TooltipProps, UITooltipDirective } from '../tooltip/tooltip.directive';

@Component({
    selector: 'ui-truncated',
    imports: [UITooltipDirective],
    styleUrls: ['./truncated.scss'],
    template: `<span data-truncated [ui-tooltip]="tooltip()" #el>
        <ng-content></ng-content>
    </span> `,
    encapsulation: ViewEncapsulation.None,
})
export class UITruncated implements AfterViewInit {
    /**
     * The content to render.
     *
     * @example
     *     Some really long text that might be truncated when displayed in a small container.
     *
     * @exampleType string
     * @required
     */
    readonly elRef = viewChild.required<ElementRef<HTMLElement>>('el');

    protected readonly tooltip = model<TooltipProps | string | undefined>('');

    ngAfterViewInit() {
        const el = this.elRef()?.nativeElement;

        if (el && el.scrollWidth > el.clientWidth) {
            this.tooltip.set(el.textContent?.trim() || '');
        }
    }
}
