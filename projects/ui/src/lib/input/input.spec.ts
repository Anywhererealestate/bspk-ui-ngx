import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { UIInput } from './input';

describe('UIInput', () => {
    let fixture: ComponentFixture<UIInput>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIInput],
        }).compileComponents();

        fixture = TestBed.createComponent(UIInput);
        fixture.componentRef.setInput('name', 'test-input');
        fixture.componentRef.setInput('ariaLabel', 'Test Input');

        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
