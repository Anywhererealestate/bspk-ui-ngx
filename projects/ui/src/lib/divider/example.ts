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

        <h4>Horizontal light (default)</h4>
        <div style="width: 320px;">
            <ui-list-item [label]="'Above'"></ui-list-item>
            <ui-divider />
            <ui-list-item [label]="'Below'"></ui-list-item>
        </div>

        <h4>Horizontal light (default), padding = false</h4>
        <div style="width: 320px;">
            <ui-list-item [label]="'Above'"></ui-list-item>
            <ui-divider [padding]="false" />
            <ui-list-item [label]="'Below'"></ui-list-item>
        </div>

        <h4>Horizontal, thickness = heavy, padding = false, inset = 2</h4>
        <div style="width: 320px;">
            <ui-list-item [label]="'Above'"></ui-list-item>
            <ui-divider [thickness]="'heavy'" [inset]="2" [padding]="false" />
            <ui-list-item [label]="'Below'"></ui-list-item>
        </div>

        <h4>Vertical, inset = 2</h4>
        <div
            style="display:flex; align-items:center; background-color: var(    --background-shade); padding: var(--spacing-sizing-04);">
            <ui-list-item [label]="'Left'"></ui-list-item>
            <ui-divider [orientation]="'vertical'" [inset]="2" />
            <ui-list-item [label]="'Right'" style="background: blue;"></ui-list-item>
        </div>

        <h4>Vertical, thickness = heavy, inset = 2</h4>
        <div
            style="display:flex; align-items:center; background-color: var(    --background-shade); padding: var(--spacing-sizing-04);">
            <ui-list-item [label]="'Left'"></ui-list-item>
            <ui-divider [orientation]="'vertical'" [thickness]="'heavy'" [inset]="2" />
            <ui-list-item [label]="'Right'" style="background: blue;"></ui-list-item>
        </div>
    `,
})
export class UIDividerExample {}
