import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

export interface ImgProps {
  src: string;
  alt: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'async' | 'auto' | 'sync';
}

@Component({
  standalone: true,
  selector: 'ui-img',
  imports: [CommonModule],
  template: `
    <img
      data-bspk="img"
      [src]="src()"
      [attr.alt]="alt()"
      [attr.loading]="loading()"
      [attr.decoding]="decoding()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UIImg {
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  readonly loading = input<'eager' | 'lazy' | undefined>(undefined);
  readonly decoding = input<'async' | 'auto' | 'sync' | undefined>(undefined);
}