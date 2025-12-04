import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIPagination } from './pagination';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';

describe('UIPagination', () => {
    let component: UIPagination;
    let fixture: ComponentFixture<UIPagination>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIPagination],
        }).compileComponents();

        fixture = TestBed.createComponent(UIPagination);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
