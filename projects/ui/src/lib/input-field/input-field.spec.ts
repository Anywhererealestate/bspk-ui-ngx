import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { UIInputField } from './input-field';

describe('UIInputField', () => {
    let fixture: ComponentFixture<UIInputField>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIInputField],
        }).compileComponents();

        fixture = TestBed.createComponent(UIInputField);
        fixture.componentRef.setInput('name', 'test-input');
        fixture.componentRef.setInput('label', 'Test Input');

        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
