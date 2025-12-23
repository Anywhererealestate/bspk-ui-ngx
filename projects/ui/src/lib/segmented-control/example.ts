import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconAccountCircle, IconHome, IconSearch } from '../icons';
import { UISegmentedControl } from './segmented-control';

@Component({
    selector: 'ui-segmented-control-example',
    standalone: true,
    imports: [CommonModule, UISegmentedControl],
    template: `
        <h3>SegmentedControl Basic</h3>
        <ui-segmented-control
            [label]="'Segments'"
            [options]="options"
            [value]="selected"
            (valueChange)="selected = $event"></ui-segmented-control>
        <p>Selected: {{ selected }}</p>

        <h3>Icons Only</h3>
        <ui-segmented-control
            [label]="'Segments Icons'"
            [options]="iconOptions"
            [value]="selectedIcon"
            [iconsOnly]="true"
            (valueChange)="selectedIcon = $event"></ui-segmented-control>
        <p>Selected: {{ selectedIcon }}</p>
    `,
})
export class UISegmentedControlExample {
    options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ];

    iconOptions = [
        { value: '1', label: 'Home', icon: IconHome },
        { value: '2', label: 'Search', icon: IconSearch },
        { value: '3', label: 'Profile', icon: IconAccountCircle },
    ] as any;

    selected = '1';
    selectedIcon = '3';
}
