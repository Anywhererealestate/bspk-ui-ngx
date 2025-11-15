import { Component, Input, ElementRef, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tooltip } from '../tooltip';

@Component({
    selector: 'ui-truncated',
    standalone: true,
    imports: [CommonModule, Tooltip],
    templateUrl: './truncated.html',
    styleUrl: './truncated.scss',
})
// export class Truncated implements AfterViewInit {
//     @Input() label?: string;
//     @Input() elementType: string = 'span';
//     @Input() children: string = '';

//     isTruncated = false;

//     constructor(
//         private el: ElementRef,
//         private cdr: ChangeDetectorRef,
//     ) {}

//     ngAfterViewInit() {
//         const el = this.el.nativeElement.querySelector('[data-bspk-utility="truncated"]');
//         if (el && el.scrollWidth > el.clientWidth) {
//             this.isTruncated = true;
//             this.cdr.detectChanges();
//         }
//     }
// }
export class Truncated implements AfterViewChecked {
    @Input() label?: string;
    @Input() elementType: string = 'span';
    isTruncated = true;
    private lastContent = '';

    constructor(
        private el: ElementRef,
        private cdr: ChangeDetectorRef,
    ) {}

    ngAfterViewChecked() {
        const el = this.el.nativeElement.querySelector('[data-bspk-utility="truncated"]');
        if (!el) return;

        const content = el.textContent?.trim() || '';
        // Only run logic if content has changed
        if (content !== this.lastContent) {
            this.lastContent = content;
            const wasTruncated = this.isTruncated;
            this.isTruncated = el.scrollWidth > el.clientWidth;
            if (!this.label && this.isTruncated) {
                this.label = content;
            }
            // Only trigger change detection if truncation state changed
            if (wasTruncated !== this.isTruncated) {
                this.cdr.detectChanges();
            }
        }
    }
}
