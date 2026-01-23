import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconAdd } from '../icons/add';
import { UIInlineAlert } from './inline-alert';

@Component({
    selector: 'ui-badge-example',
    standalone: true,
    imports: [CommonModule, UIInlineAlert],
    template: `
        <h3>Default</h3>
        <ui-inline-alert [label]="'Default alert content'"></ui-inline-alert>
        <h3>variant="informational"</h3>
        <ui-inline-alert variant="informational" [label]="'Informational alert content'"></ui-inline-alert>
        <h3>variant="success"</h3>
        <ui-inline-alert variant="success" [label]="'Success alert content'"></ui-inline-alert>
        <h3>variant="error"</h3>
        <ui-inline-alert variant="error" [label]="'Error alert content'"></ui-inline-alert>
        <h3>variant="warning"</h3>
        <ui-inline-alert variant="warning" [label]="'Warning alert content'"></ui-inline-alert>
        <h3>with id</h3>
        <ui-inline-alert id="custom-inline-alert-id" [label]="'Alert content with custom id'"></ui-inline-alert>
        <h3>with owner</h3>
        <ui-inline-alert owner="CustomOwnerComponent" [label]="'Alert content with custom owner'"></ui-inline-alert>
    `,
})
export class UIInlineAlertExample {
    protected readonly iconAdd = IconAdd;
}
