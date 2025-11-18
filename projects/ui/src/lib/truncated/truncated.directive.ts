import { Directive, ElementRef, Renderer2, AfterViewChecked, Input } from '@angular/core';

@Directive({
  selector: '[truncated]',
  host: {
    '[attr.data-truncated]': 'true',
  },
})
export class TruncatedDirective implements AfterViewChecked {
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
        this.renderer.setAttribute(element, 'data-truncated', 'true');
      } else {
        this.renderer.setAttribute(element, 'data-truncated', 'false');
      }
      this.lastContent = content;
      this.lastTruncated = isTruncated;
    }
  }
}
