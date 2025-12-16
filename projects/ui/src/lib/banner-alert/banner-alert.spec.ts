import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';
import { UIBannerAlert } from './banner-alert';

describe('UIBannerAlert', () => {
    let fixture: ComponentFixture<UIBannerAlert>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIBannerAlert],
        }).compileComponents();

        fixture = TestBed.createComponent(UIBannerAlert);
        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
