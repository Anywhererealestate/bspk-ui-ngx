import { Component, ViewEncapsulation } from '@angular/core';

export interface TopNavigationProps {
    /** The content of the top navigation. */
    children?: string;
}

/**
 * Top navigation wrapper.
 *
 * @name TopNavigation
 * @phase Backlog
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
export class UITopNavigation {}
