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
      @if (hasBreadcrumb) {
        <div data-breadcrumb>
          <ng-content select="[breadcrumb]"></ng-content>
        </div>
      }

      <div data-header [attr.data-has-avatar]="hasAvatar ? '' : null">
        <div data-title>
          <ng-content select="[avatar]"></ng-content>
          <h1>{{ title() }}</h1>
        </div>

        @if (hasActions) {
          <div data-page-actions>
            <ng-content select="[actions]"></ng-content>
          </div>
        }
      </div>

      @if (hasSubHeader) {
        <div data-subheader>
          <ng-content select="[subHeader]"></ng-content>
        </div>
      }
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UIPageHeader {
  readonly title = input.required<string>();

  readonly hasBreadcrumb = true;
  readonly hasAvatar = true;
  readonly hasActions = true;
  readonly hasSubHeader = true;
}