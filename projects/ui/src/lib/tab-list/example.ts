
import { Component, model } from '@angular/core';
import { IconAccountCircle, IconHome, IconSearch } from '../icons';
import { UITabList, TabOption } from './tab-list';

@Component({
    selector: 'ui-tab-list-example',
    standalone: true,
    imports: [UITabList],
    template: `
        <h3>TabList Basic</h3>
        <ul
            ui-tab-list
            data-bspk="segmented-control"
            [label]="'Navigation'"
            [options]="options"
            [value]="selected()"
            (valueChange)="setSelected($event)"></ul>
        <p style="margin-top: var(--spacing-sizing-04);">Selected: {{ selected() }}</p>

        <h3>Icons Only (with tooltip)</h3>
        <ul
            ui-tab-list
            data-bspk="tab-group"
            [label]="'Navigation Icons'"
            [options]="iconOptions"
            [value]="selectedIcon()"
            [iconsOnly]="true"
            (valueChange)="selectedIcon.set($event)"></ul>
        <p style="margin-top: var(--spacing-sizing-04);">Selected: {{ selectedIcon() }}</p>
    `,
})
export class UITabListExample {
    options: TabOption[] = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ];

    iconOptions: TabOption[] = [
        { value: '1', label: 'Home', icon: IconHome },
        { value: '2', label: 'Search', icon: IconSearch },
        { value: '3', label: 'Profile', icon: IconAccountCircle },
    ] as any;

    readonly selected = model('1');
    readonly selectedIcon = model('2');

    setSelected(value: string) {
        this.selected.set(value);
    }
}
