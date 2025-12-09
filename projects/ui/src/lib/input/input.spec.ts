import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIInput } from './input';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';

describe('UIInput', () => {
    let fixture: ComponentFixture<UIInput>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIInput],
        }).compileComponents();

        fixture = TestBed.createComponent(UIInput);
        fixture.componentRef.setInput('label', 'Test Input');

        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
