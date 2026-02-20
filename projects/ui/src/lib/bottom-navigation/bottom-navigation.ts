import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';
import { UITabList } from '../tab-list';

export type BottomNavigationMode = 'fixed' | 'inline';
export type BottomNavigationVariant = 'flat' | 'outlined';

export interface BottomNavigationProps {
  mode?: BottomNavigationMode;
  variant?: BottomNavigationVariant;
}

/**
 * React: <TabList data-bspk="bottom-navigation" data-mode ... size="large" />
 * Angular: wraps UITabList and forwards projected tabs.
 */
@Component({
  standalone: true,
  selector: 'ui-bottom-navigation',
  imports: [CommonModule, UITabList],
  template: `
    <ui-tab-list
      data-bspk="bottom-navigation"
      [attr.data-mode]="mode()"
      [attr.data-variant]="variant()"
      [size]="'large'"
    >
      <ng-content></ng-content>
    </ui-tab-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UIBottomNavigation {
  readonly mode = input<BottomNavigationMode>('inline');
  readonly variant = input<BottomNavigationVariant>('flat');
}