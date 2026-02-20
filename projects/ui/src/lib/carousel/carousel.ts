import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Output, ViewEncapsulation, computed, input } from '@angular/core';

export interface CarouselProps {
  length: number;
  value?: number;          // controlled index (0-based)
  defaultValue?: number;   // uncontrolled start
  showDots?: boolean;
  ariaLabel?: string;
}

@Component({
  standalone: true,
  selector: 'ui-carousel',
  imports: [CommonModule],
  template: `
    <div
      data-bspk="carousel"
      role="region"
      [attr.aria-label]="ariaLabel()"
      style="display:block;"
    >
      <div
        data-viewport
        style="overflow:hidden; width:100%;"
      >
        <div
          data-track
          [style.display]="'flex'"
          [style.transform]="'translateX(' + (-activeIndex() * 100) + '%)'"
          style="transition: transform 200ms ease;"
        >
          <ng-content></ng-content>
        </div>
      </div>

      <div *ngIf="showDots()" data-dots style="display:flex; gap:var(--spacing-sizing-02); justify-content:center;">
        <button
          *ngFor="let i of indices(); trackBy: trackByIndex"
          type="button"
          [attr.aria-label]="'Go to slide ' + (i + 1)"
          [attr.data-active]="i === activeIndex() ? '' : null"
          (click)="setIndex(i)"
        >
          <!-- decorative; icon-free -->
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UICarousel {
  readonly length = input.required<number>();
  readonly value = input<number | undefined>(undefined);
  readonly defaultValue = input<number>(0);
  readonly showDots = input<boolean>(true);
  readonly ariaLabel = input<string>('Carousel');

  @Output() change = new EventEmitter<number>();

  private readonly internal = input<number>(0);

  readonly activeIndex = computed(() => {
    const controlled = this.value();
    if (typeof controlled === 'number') return this.clamp(controlled);
    return this.clamp(this.internal() || this.defaultValue());
  });

  readonly indices = computed(() => Array.from({ length: this.length() }, (_, i) => i));

  trackByIndex = (_: number, i: number) => i;

  setIndex(next: number) {
    const clamped = this.clamp(next);
    if (this.value() == null) this.internal.set(clamped);
    this.change.emit(clamped);
  }

  private clamp(i: number) {
    const len = this.length();
    if (len <= 0) return 0;
    return Math.max(0, Math.min(i, len - 1));
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.setIndex(this.activeIndex() - 1);
      event.preventDefault();
    }
    if (event.key === 'ArrowRight') {
      this.setIndex(this.activeIndex() + 1);
      event.preventDefault();
    }
  }
}