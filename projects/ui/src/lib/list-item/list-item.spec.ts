import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';
import { componentTestProps } from '../../utils/componentTestProps';
import { UIListItem } from './list-item';

describe('UIListItem', () => {
    let fixture: ComponentFixture<UIListItem>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIListItem],
        }).compileComponents();

        fixture = TestBed.createComponent(
            UIListItem,
            componentTestProps<UIListItem>({
                label: 'Test List Item',
            }),
        );
        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
