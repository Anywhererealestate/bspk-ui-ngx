import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { UITextarea } from './textarea';

describe('UITextarea', () => {
    let fixture: ComponentFixture<UITextarea>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UITextarea],
        }).compileComponents();

        fixture = TestBed.createComponent(UITextarea);
        fixture.componentRef.setInput('ariaLabel', 'Textarea');
        fixture.componentRef.setInput('name', 'textarea-name');

        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
