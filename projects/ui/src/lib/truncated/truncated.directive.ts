import { Directive, ElementRef, Renderer2, AfterViewChecked, Input } from '@angular/core';
// import { Truncated } from './truncated';

@Directive({
  selector: '[truncated]',
  //   host: {
  //     '[attr.data-truncated]': 'true',
  //   },
})
export class TruncatedDirective implements AfterViewChecked {
  //   @Input('truncated') set truncatedClass(val: string) {
  //     this._truncatedClass = val && val.trim().length > 0 ? val : 'truncated-ellipsis';
  //   }
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

    this.renderer.setAttribute(element, 'data-truncated', '');

    // Only update if content or truncation state changed
    if (content !== this.lastContent || isTruncated !== this.lastTruncated) {
      if (isTruncated) {
        this.renderer.setAttribute(element, 'tooltip', content);
      } else {
      }
      this.lastContent = content;
      this.lastTruncated = isTruncated;
    }
  }
}
