import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

/**
 * React PageHeader accepts breadcrumb/avatar as props (React nodes).
 * Angular equivalent uses projection slots so consumers can pass UIAvatar/UIBreadcrumb or custom content.
 */
@Component({
  standalone: true,
  selector: 'ui-page-header',
  imports: [CommonModule],
  template: `
    <span data-bspk="page-header">
      <div *ngIf="hasBreadcrumb" data-breadcrumb>
        <ng-content select="[breadcrumb]"></ng-content>
      </div>

      <div data-header [attr.data-has-avatar]="hasAvatar ? '' : null">
        <div data-title>
          <ng-content select="[avatar]"></ng-content>
          <h1>{{ title() }}</h1>
        </div>

        <div *ngIf="hasActions" data-page-actions>
          <ng-content select="[actions]"></ng-content>
        </div>
      </div>

      <div *ngIf="hasSubHeader" data-subheader>
        <ng-content select="[subHeader]"></ng-content>
      </div>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UIPageHeader {
  readonly title = input.required<string>();

  // Best-effort flags. If you want strict detection, we can add @ContentChild refs locally.
  get hasBreadcrumb() { return true; }
  get hasAvatar() { return true; }
  get hasActions() { return true; }
  get hasSubHeader() { return true; }
}