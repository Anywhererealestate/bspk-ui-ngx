import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';
import { navigationItems, routes } from '../app.routes';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    template: `
        <div role="menu">
            @for (route of navigationItems; track route.path) {
                @if (route.section) {
                    <div data-header="true">{{ route.title }}</div>
                } @else {
                    <a data-link role="menuitem" [routerLink]="route.path" routerLinkActive="active" class="nav-link">
                        {{ route.title }}
                    </a>
                }
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: contents;
            }
        `,
    ],
})
export class AppNavComponent {
    navigationItems = navigationItems.filter((route) => !route.hide);

    trackByPath(_: number, route: any) {
        return route?.path ?? route?.title ?? _;
    }
}
