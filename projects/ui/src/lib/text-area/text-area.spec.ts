import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';

import { UITextArea } from './text-area';

describe('UITextArea', () => {
    let fixture: ComponentFixture<UITextArea>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UITextArea],
        }).compileComponents();

        fixture = TestBed.createComponent(UITextArea);
        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
