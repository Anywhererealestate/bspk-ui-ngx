import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core';
import { AsSignal } from '../../types/common';

type DotSize = 'medium' | 'small' | 'x-small';
const MAX_DOT_COUNT = 5 as const;

function getDots(currentIndex: number, totalPages: number): { pageIndex: number; size: DotSize }[] {
  if (totalPages <= MAX_DOT_COUNT) {
    return Array.from({ length: totalPages }, (_, i) => ({ size: 'medium' as DotSize, pageIndex: i }));
  }

  const start = Math.max(0, Math.min(currentIndex - 2, totalPages - MAX_DOT_COUNT));
  return Array.from({ length: MAX_DOT_COUNT }, (_, i) => {
    const pageIndex = start + i;
    let size: DotSize = 'medium';

    if (i === 0 && pageIndex > 0) size = 'x-small';
    if (i === 1 && pageIndex > 1) size = 'small';
    if (i === 3 && pageIndex < totalPages - 2) size = 'small';
    if (i === 4 && pageIndex < totalPages - 1) size = 'x-small';

    return { pageIndex, size };
  });
}

export type PageControlVariant = 'flat' | 'outlined';

export interface PageControlProps {
  currentPage: number | string;
  numPages: number | string;
  variant?: PageControlVariant;
}

/**
 * A compact page indicator showing the current position in a set of pages (e.g. dots).
 *
 * ```html
 * <ui-page-control [currentPage]="2" [numPages]="5" variant="outlined" />
 * ```
 *
 * @name PageControl
 * @phase Dev
 */
@Component({
  standalone: true,
  selector: 'ui-page-control',
  imports: [CommonModule],
  template: `
    @if (shouldRender()) {
      <span
        role="img"
        data-bspk="page-control"
        [attr.data-variant]="variant() || null"
        [attr.aria-label]="ariaLabel()"
      >
        @for (dot of dots(); track dot.pageIndex) {
          <span
            aria-hidden="true"
            [attr.data-dot]="dot.pageIndex"
            [attr.data-size]="dot.size"
            [attr.data-active]="dot.pageIndex + 1 === current() ? '' : null"
          ></span>
        }
      </span>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UIPageControl implements AsSignal<PageControlProps> {
  readonly currentPage = input.required<number | string>();
  readonly numPages = input.required<number | string>();
  readonly variant = input<PageControlVariant>('flat');

  readonly current = computed(() => Number(this.currentPage()));
  readonly total = computed(() => Number(this.numPages()));

  readonly shouldRender = computed(() => {
    const num = this.total();
    const cur = this.current();
    return num >= 2 && cur >= 1 && cur <= num;
  });

  readonly ariaLabel = computed(() => `Page ${this.current()} of ${this.total()}`);

  readonly dots = computed(() => getDots(this.current() - 1, this.total()));
}