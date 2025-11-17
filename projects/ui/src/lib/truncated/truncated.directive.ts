import { Directive, ElementRef, Renderer2, AfterViewChecked, Input } from '@angular/core';

@Directive({
    selector: '[truncated]',
    host: {
        '[attr.data-truncated]': 'true',
    },
})
// export class TruncatedDirective implements AfterViewChecked {
//     @Input('truncated') truncatedClass: string = 'data-truncated';

//     private lastContent = '';
//     private applied = false;

//     constructor(
//         private el: ElementRef,
//         private renderer: Renderer2,
//     ) {}

//     ngAfterViewChecked() {
//         const element = this.el.nativeElement as HTMLElement;
//         const content = element.textContent?.trim() || '';

//         if (content !== this.lastContent) {
//             this.lastContent = content;
//             const isTruncated = element.scrollWidth > element.clientWidth;
//             if (isTruncated && !this.applied) {
//                 this.renderer.addClass(element, this.truncatedClass);
//                 this.applied = true;
//             } else if (!isTruncated && this.applied) {
//                 this.renderer.removeClass(element, this.truncatedClass);
//                 this.applied = false;
//             }
//         }
//     }
// }
export class TruncatedDirective implements AfterViewChecked {
    @Input('truncated') set truncatedClass(val: string) {
        this._truncatedClass = val && val.trim().length > 0 ? val : 'truncated-ellipsis';
    }
    private _truncatedClass = 'truncated-ellipsis';
    private lastContent = '';
    private lastTruncated = false;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {}

    ngAfterViewChecked() {
        const element = this.el.nativeElement as HTMLElement;
        const content = element.textContent?.trim() || '';
        const isTruncated = element.scrollWidth > element.clientWidth;

        // Only update if content or truncation state changed
        if (content !== this.lastContent || isTruncated !== this.lastTruncated) {
            if (isTruncated) {
                this.renderer.addClass(element, this._truncatedClass);
            } else {
                this.renderer.removeClass(element, this._truncatedClass);
            }
            this.lastContent = content;
            this.lastTruncated = isTruncated;
        }
    }
}
