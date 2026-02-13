import { ComponentSettings } from '@shared/types';
import { AccordionProps } from './';

export const accordion: ComponentSettings<AccordionProps> = {
    defaultInputs: {
        singleOpen: true,
        ngContent: `
            <ui-accordion-section title="Section 1"><p>Section 1 content</p></ui-accordion-section>
            <ui-accordion-section title="Section 2"><p>Section 2 content</p></ui-accordion-section>
            <ui-accordion-section title="Section 3"><p>Section 3 content</p></ui-accordion-section>
            <ui-accordion-section title="Section 4"><p>Section 4 content</p></ui-accordion-section>`,
    },
};
