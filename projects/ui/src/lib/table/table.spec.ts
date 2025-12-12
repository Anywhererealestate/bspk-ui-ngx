import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UITable } from './table';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';

describe('UITable', () => {
    let fixture: ComponentFixture<UITable<any>>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UITable],
        }).compileComponents();

        fixture = TestBed.createComponent(UITable);
        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
