import { Component, ViewEncapsulation, ElementRef, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { TooltipDirective, TooltipProps } from '../tooltip/tooltip.directive';

@Component({
    selector: 'ui-truncated',
    imports: [TooltipDirective],
    styleUrls: ['./truncated.scss'],
    templateUrl: './truncated.html',
    encapsulation: ViewEncapsulation.None,
})
export class Truncated implements AfterViewInit {
    tooltip: TooltipProps | string = '';

    @ViewChild('el', { static: false }) elRef!: ElementRef<HTMLElement>;

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
        const el = this.elRef?.nativeElement;

        if (el && el.scrollWidth > el.clientWidth && this.tooltip === '') {
            this.tooltip = { label: el.textContent?.trim() || '', showTail: true };
            this.cdr.detectChanges();
        }
    }
}
