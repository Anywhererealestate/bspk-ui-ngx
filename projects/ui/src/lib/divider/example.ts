import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIListItem } from '../list-item/list-item';
import { UIDivider } from './divider';

@Component({
    selector: 'ui-divider-example',
    standalone: true,
    imports: [CommonModule, UIDivider, UIListItem],
    template: `
        <h3>Divider</h3>

        <h4>Horizontal light (default) with padding</h4>
        <div style="width: 320px;">
            <ui-list-item [label]="'Above'"></ui-list-item>
            <ui-divider />
            <ui-list-item [label]="'Below'"></ui-list-item>
        </div>

        <h4>Horizontal light (default) with no padding</h4>
        <div style="width: 320px;">
            <ui-list-item [label]="'Above'"></ui-list-item>
            <ui-divider [padding]="false" />
            <ui-list-item [label]="'Below'"></ui-list-item>
        </div>

        <h4>Horizontal heavy with inset and no padding</h4>
        <div style="width: 320px;">
            <ui-list-item [label]="'Above'"></ui-list-item>
            <ui-divider [thickness]="'heavy'" [inset]="2" [padding]="false" />
            <ui-list-item [label]="'Below'"></ui-list-item>
        </div>

        <h4>Vertical in a row</h4>
        <div style="display:flex; align-items:center; gap: var(--spacing-sizing-04);">
            <ui-list-item [label]="'Left'"></ui-list-item>
            <ui-divider [orientation]="'vertical'" [inset]="2" />
            <ui-list-item [label]="'Right'"></ui-list-item>
        </div>
    `,
})
export class UIDividerExample {}
