import { Component } from '@angular/core';
import { UIExamplePlaceholder } from '../example-placeholder';

@Component({
    selector: 'ui-example-placeholder-example',
    standalone: true,
    imports: [UIExamplePlaceholder],
    template: `
        <h4>Default</h4>
        <ui-example-placeholder> Example Content </ui-example-placeholder>

        <h4>height: 100px</h4>
        <ui-example-placeholder height="100px"> Example Content </ui-example-placeholder>

        <h4>label: example-label</h4>
        <ui-example-placeholder label="example-label"> Example Content </ui-example-placeholder>

        <h4>width: 400px</h4>
        <ui-example-placeholder width="400px"> Example Content </ui-example-placeholder>

        <h4>width: 100%</h4>
        <ui-example-placeholder width="100%"> Example Content </ui-example-placeholder>
    `,
})
export class UIExamplePlaceholderExample {}
