import { Component } from '@angular/core';
import { UIBadgeDot } from '../badge-dot';

@Component({
    selector: 'ui-badge-dot-example',
    standalone: true,
    imports: [UIBadgeDot],
    template: `
        <h4>Default</h4>
        <ui-badge-dot> Example Content </ui-badge-dot>

        <h4>color: primary</h4>
        <ui-badge-dot color="primary"> Example Content </ui-badge-dot>

        <h4>color: secondary</h4>
        <ui-badge-dot color="secondary"> Example Content </ui-badge-dot>

        <h4>outline: true</h4>
        <ui-badge-dot [outline]="true"> Example Content </ui-badge-dot>

        <h4>outline: false</h4>
        <ui-badge-dot [outline]="false"> Example Content </ui-badge-dot>

        <h4>size: 6</h4>
        <ui-badge-dot [size]="6"> Example Content </ui-badge-dot>

        <h4>size: 8</h4>
        <ui-badge-dot [size]="8"> Example Content </ui-badge-dot>

        <h4>size: 10</h4>
        <ui-badge-dot [size]="10"> Example Content </ui-badge-dot>

        <h4>size: 12</h4>
        <ui-badge-dot [size]="12"> Example Content </ui-badge-dot>
    `,
})
export class UIBadgeDotExample {}
