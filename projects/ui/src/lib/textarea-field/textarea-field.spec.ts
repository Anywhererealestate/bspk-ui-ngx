import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { UITextareaField } from './textarea-field';

describe('UITextareaField', () => {
    let fixture: ComponentFixture<UITextareaField>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UITextareaField],
        }).compileComponents();

        fixture = TestBed.createComponent(UITextareaField);
        fixture.componentRef.setInput('label', 'Textarea test');
        fixture.componentRef.setInput('name', 'textarea-name');

        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
