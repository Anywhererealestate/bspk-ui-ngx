import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';

import { TextArea } from './text-area';

describe('TextArea', () => {
    let component: TextArea;
    let fixture: ComponentFixture<TextArea>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TextArea],
        }).compileComponents();

        fixture = TestBed.createComponent(TextArea);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
