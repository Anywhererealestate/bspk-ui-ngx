import { Component, ViewEncapsulation, input } from '@angular/core';
import { AsSignal } from '../../types/common';

export interface TopNavigationProps {
    /** The content of the top navigation. */
    children?: string;
}

/**
 * Top navigation wrapper.
 *
 * @name TopNavigation
 * @phase Dev
 */
@Component({
    selector: 'ui-top-navigation',
    standalone: true,
    template: `<ng-content></ng-content>`,
    host: {
        'data-bspk': 'top-navigation',
    },
    styleUrl: './top-navigation.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UITopNavigation implements AsSignal<TopNavigationProps> {
    readonly children = input<TopNavigationProps['children']>();
}
