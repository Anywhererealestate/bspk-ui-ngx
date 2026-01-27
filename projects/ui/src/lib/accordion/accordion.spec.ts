import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { UIAccordion } from './accordion';

describe('Accordion', () => {
    let component: UIAccordion;
    let fixture: ComponentFixture<UIAccordion>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIAccordion],
        }).compileComponents();

        fixture = TestBed.createComponent(UIAccordion);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
