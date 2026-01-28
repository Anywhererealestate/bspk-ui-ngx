import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { UIPagination } from './pagination';

describe('UIPagination', () => {
    let fixture: ComponentFixture<UIPagination>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIPagination],
        }).compileComponents();

        fixture = TestBed.createComponent(UIPagination);
        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
