import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIButton } from './button';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';

describe('Button', () => {
    let fixture: ComponentFixture<UIButton>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIButton],
        }).compileComponents();

        fixture = TestBed.createComponent(UIButton);
        fixture.componentRef.setInput('label', 'Example label');

        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
