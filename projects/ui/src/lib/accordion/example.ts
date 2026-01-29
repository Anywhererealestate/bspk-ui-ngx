import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIAvatar } from '../..';
import { UIExample } from '../../demo';
import { IconCat } from '../icons/cat';
import { UIAccordion, UIAccordionSection } from './';

@Component({
    selector: 'ui-accordion-example',
    standalone: true,
    imports: [CommonModule, UIAccordion, UIExample, UIAccordionSection, IconCat, UIAvatar],
    template: `
        <h4>Default (multiple open)</h4>
        <ui-example>
            <ui-accordion [singleOpen]="false">
                <ui-accordion-section title="Felines" subtitle="With Leading">
                    <span data-leading><icon-cat width="24" /></span>
                    <div>Content about cats and other felines.</div>
                </ui-accordion-section>

                <ui-accordion-section title="Dogs" subtitle="With Trailing">
                    <span data-trailing>Trailing</span>
                    <p>Dog Children</p>
                </ui-accordion-section>

                <ui-accordion-section title="Reptiles" subtitle="Disabled" [disabled]="true">
                    Reptile Children
                </ui-accordion-section>
            </ui-accordion>
        </ui-example>

        <h4>Single Open</h4>
        <ui-example>
            <ui-accordion [singleOpen]="true">
                <ui-accordion-section title="Alpha">
                    <span data-leading> <ui-avatar name="Alice Anderson" size="small" /></span>
                    Alpha Children</ui-accordion-section
                >
                <ui-accordion-section title="Beta">
                    <span data-leading> <ui-avatar name="Bob Brown" size="small" /></span>
                    Beta Children</ui-accordion-section
                >
                <ui-accordion-section title="Gamma">
                    <span data-leading> <ui-avatar name="Charlie Clark" size="small" /></span>
                    Gamma Children</ui-accordion-section
                >
            </ui-accordion>
        </ui-example>

        <h4>With No Items (hidden)</h4>
        <ui-example>
            <ui-accordion></ui-accordion>
        </ui-example>
    `,
})
export class UIAccordionExample {}
