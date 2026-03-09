import { Component } from '@angular/core';
import { UIFieldset } from '../fieldset';

@Component({
    selector: 'ui-fieldset-example',
    standalone: true,
    imports: [UIFieldset],
    template: `
        <h4>Default</h4>
        <ui-fieldset label="example-label"> Example Content </ui-fieldset>

        <h4>controlId: example-controlId</h4>
        <ui-fieldset controlId="example-controlId" label="example-label"> Example Content </ui-fieldset>

        <h4>errorMessage: example-errorMessage</h4>
        <ui-fieldset errorMessage="example-errorMessage" label="example-label"> Example Content </ui-fieldset>

        <h4>helperText: example-helperText</h4>
        <ui-fieldset helperText="example-helperText" label="example-label"> Example Content </ui-fieldset>

        <h4>label: example-label</h4>
        <ui-fieldset label="example-label"> Example Content </ui-fieldset>

        <h4>labelTrailing: example-labelTrailing</h4>
        <ui-fieldset label="example-label" labelTrailing="example-labelTrailing"> Example Content </ui-fieldset>

        <h4>required: true</h4>
        <ui-fieldset label="example-label" [required]="true"> Example Content </ui-fieldset>

        <h4>required: false</h4>
        <ui-fieldset label="example-label" [required]="false"> Example Content </ui-fieldset>
    `,
})
export class UIFieldsetExample {}
