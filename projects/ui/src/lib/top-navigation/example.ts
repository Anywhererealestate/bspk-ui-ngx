import { Component } from '@angular/core';
import { UITopNavigation } from './top-navigation';

@Component({
    selector: 'ui-top-navigation-example',
    standalone: true,
    imports: [UITopNavigation],
    template: `<ui-top-navigation>Top navigation content</ui-top-navigation>`,
})
export class UITopNavigationExample {}
