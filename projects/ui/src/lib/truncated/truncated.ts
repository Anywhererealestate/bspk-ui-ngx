import { Component, Input, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tooltip } from '../tooltip';

@Component({
    selector: 'ui-truncated',
    standalone: true,
    imports: [CommonModule, Tooltip],
    templateUrl: './truncated.html',
    styleUrl: './truncated.scss',
})
export class Truncated implements AfterViewInit {
    @Input() label?: string;
    @Input() elementType: string = 'span';
    @Input() children: string = '';

    isTruncated = false;

    constructor(
        private el: ElementRef,
        private cdr: ChangeDetectorRef,
    ) {}

    ngAfterViewInit() {
        const el = this.el.nativeElement.querySelector('[data-bspk-utility="truncated"]');
        if (el && el.scrollWidth > el.clientWidth) {
            this.isTruncated = true;
            this.cdr.detectChanges();
        }
    }
}
