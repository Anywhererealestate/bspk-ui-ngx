import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIDrawer } from './drawer';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';

describe('UIDrawer', () => {
    let component: UIDrawer;
    let fixture: ComponentFixture<UIDrawer>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIDrawer],
        }).compileComponents();

        fixture = TestBed.createComponent(UIDrawer);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
