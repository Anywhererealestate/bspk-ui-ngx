import { Component } from '@angular/core';
import { UIPageControl } from '../page-control';

@Component({
    selector: 'ui-page-control-example',
    standalone: true,
    imports: [UIPageControl],
    template: `
        <h4>Default</h4>
        <ui-page-control [currentPage]="1" [numPages]="3"> Example Content </ui-page-control>

        <h4>currentPage: 2</h4>
        <ui-page-control [currentPage]="2" [numPages]="4"> Example Content </ui-page-control>

        <h4>numPages: 5</h4>
        <ui-page-control [currentPage]="1" [numPages]="5"> Example Content </ui-page-control>

        <h4>variant: flat</h4>
        <ui-page-control [currentPage]="1" [numPages]="5" variant="flat"> Example Content </ui-page-control>

        <h4>variant: floating</h4>
        <ui-page-control [currentPage]="1" [numPages]="5" variant="floating"> Example Content </ui-page-control>
    `,
})
export class UIPageControlExample {}
