import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UITabGroup } from './tab-group';

@Component({
    selector: 'ui-tab-group-example',
    standalone: true,
    imports: [CommonModule, UITabGroup],
    template: `
        <h3>TabGroup Basic</h3>
        <ui-tab-group
            [label]="'Group'"
            [options]="options"
            [value]="selected"
            (valueChange)="selected = $event"></ui-tab-group>
        <p style="margin-top: var(--spacing-sizing-04);">Selected: {{ selected }}</p>

        <h3>Show Trail (hug)</h3>
        <ui-tab-group
            [label]="'Group Trail'"
            [options]="options"
            [value]="selectedTrail"
            [showTrail]="true"
            [width]="'hug'"
            (valueChange)="selectedTrail = $event"></ui-tab-group>
        <p style="margin-top: var(--spacing-sizing-04);">Selected: {{ selectedTrail }}</p>
    `,
})
export class UITabGroupExample {
    options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ];

    selected = '1';
    selectedTrail = '2';
}
