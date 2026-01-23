import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIExample } from '../../demo';
import { UIAccordion } from './accordion';

@Component({
    selector: 'ui-accordion-example',
    standalone: true,
    imports: [CommonModule, UIAccordion, UIExample],
    template: `
        <h4>Default (multiple open)</h4>

        <ui-example>
            <ui-accordion
                [singleOpen]="false"
                [items]="[
                    { title: 'Foo', children: 'Foo Children' },
                    { title: 'Bar', children: 'Bar Children' },
                    { title: 'Car', children: 'Car Children' },
                ]"></ui-accordion>
        </ui-example>

        <h4>Single Open</h4>

        <ui-accordion
            [singleOpen]="true"
            [items]="[
                { title: 'Foo', children: 'Foo Children' },
                { title: 'Bar', children: 'Bar Children' },
                { title: 'Car', children: 'Car Children' },
            ]"></ui-accordion>

        <h4>With No Items (hidden)</h4>

        <ui-accordion [items]="[]"></ui-accordion>
    `,
})
export class UIAccordionExample {}
