import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';
import { UITooltip } from './tooltip';

describe('UITooltip', () => {
    let component: UITooltip;
    let fixture: ComponentFixture<UITooltip>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UITooltip],
        }).compileComponents();

        fixture = TestBed.createComponent(UITooltip);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
