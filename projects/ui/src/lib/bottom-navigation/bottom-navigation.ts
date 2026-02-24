import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';
import { AsSignal } from '@ui/types/common';
import { TabListBaseProps, UITabList } from '../tab-list';

export type BottomNavigationMode = 'fixed' | 'inline';
export type BottomNavigationVariant = 'flat' | 'outlined';

export interface BottomNavigationProps extends TabListBaseProps {
    mode?: BottomNavigationMode;
    variant?: BottomNavigationVariant;
}

/**
 * A bottom bar displaying three to five top level destinations at the bottom of screen for a mobile application.
 *
 * @name BottomNavigation
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-bottom-navigation',
    imports: [CommonModule, UITabList],
    styleUrl: './bottom-navigation.scss',
    template: `
        <ul
            ui-tab-list
            [label]="label()"
            [(value)]="value"
            data-bspk="bottom-navigation"
            [attr.data-mode]="mode()"
            [attr.data-variant]="variant()"
            [size]="'large'">
            <ng-content></ng-content>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIBottomNavigation extends UITabList implements AsSignal<BottomNavigationProps> {
    readonly mode = input<BottomNavigationMode>('inline');
    readonly variant = input<BottomNavigationVariant>('flat');
}
