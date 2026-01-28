import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconAdd } from '../icons/add';
import { UIInlineAlert } from './inline-alert';

@Component({
    selector: 'ui-badge-example',
    standalone: true,
    imports: [CommonModule, UIInlineAlert],
    template: `
        <h4>Default</h4>
        <ui-inline-alert [label]="'Default alert content'"></ui-inline-alert>
        <h4>variant="informational"</h4>
        <ui-inline-alert variant="informational" [label]="'Informational alert content'"></ui-inline-alert>
        <h4>variant="success"</h4>
        <ui-inline-alert variant="success" [label]="'Success alert content'"></ui-inline-alert>
        <h4>variant="error"</h4>
        <ui-inline-alert variant="error" [label]="'Error alert content'"></ui-inline-alert>
        <h4>variant="warning"</h4>
        <ui-inline-alert variant="warning" [label]="'Warning alert content'"></ui-inline-alert>
        <h4>with id</h4>
        <ui-inline-alert id="custom-inline-alert-id" [label]="'Alert content with custom id'"></ui-inline-alert>
        <h4>with owner</h4>
        <ui-inline-alert owner="CustomOwnerComponent" [label]="'Alert content with custom owner'"></ui-inline-alert>
    `,
})
export class UIInlineAlertExample {
    protected readonly iconAdd = IconAdd;
}
