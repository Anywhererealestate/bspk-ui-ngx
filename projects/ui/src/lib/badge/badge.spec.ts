import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { UIBadge } from './badge';

describe('UIBadge', () => {
    let component: UIBadge;
    let fixture: ComponentFixture<UIBadge>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIBadge],
        }).compileComponents();

        fixture = TestBed.createComponent(UIBadge);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
