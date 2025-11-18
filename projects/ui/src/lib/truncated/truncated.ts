import {
  Component,
  Input,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';
import { TooltipDirective } from '../tooltip/tooltip.directive';

@Component({
  selector: 'ui-truncated',
  imports: [TooltipDirective],
  styleUrls: ['./truncated.scss'],
  templateUrl: './truncated.html',
  encapsulation: ViewEncapsulation.None,
})
export class Truncated implements AfterViewChecked {
  isTruncated = false;
  projectedText = '';

  @ViewChild('el', { static: false }) elRef!: ElementRef<HTMLElement>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    const el = this.elRef?.nativeElement;
    if (el) {
      const wasTruncated = this.isTruncated;
      this.isTruncated = el.scrollWidth > el.clientWidth;
      // Only trigger change detection if the value changed to avoid infinite loops
      this.projectedText = el.textContent?.trim() || '';
      if (wasTruncated !== this.isTruncated) {
        this.cdr.detectChanges();
      }
    }
  }
}
