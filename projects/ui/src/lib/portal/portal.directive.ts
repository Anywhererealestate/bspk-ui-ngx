import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

export type PortalContainer = HTMLElement | null | undefined;

@Directive({ selector: '[ui-portal]' })
export class UIPortalDirective implements AfterViewInit, OnDestroy {
    /** The target element to render the portal into. Defaults to `document.body` in the browser. */
    @Input('ui-portal') target?: PortalContainer;

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        // Ignore server-side rendering and missing element refs
        if (typeof document === 'undefined' || !this.elRef || !this.elRef.nativeElement) return;

        (this.target || document.body)?.appendChild(this.elRef.nativeElement);
    }

    ngOnDestroy() {
        if (this.elRef.nativeElement.parentNode) {
            this.elRef.nativeElement.parentNode.removeChild(this.elRef.nativeElement);
        }
    }
}
