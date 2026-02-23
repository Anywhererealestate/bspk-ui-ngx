import { Component, signal } from '@angular/core';
import { UISearchBar } from './search-bar';

@Component({
    selector: 'ui-search-bar-example',
    standalone: true,
    imports: [UISearchBar],
    template: `
        <ui-search-bar name="example" [(value)]="value" [items]="items" placeholder="Search" [ariaLabel]="'Search'" />
    `,
})
export class UISearchBarExample {
    readonly value = signal<string | undefined>('');
    readonly items = [
        { label: 'Apple Pie' },
        { label: 'Banana Split' },
        { label: 'Cherry Tart' },
        { label: 'Dragonfruit Sorbet' },
    ];
}
