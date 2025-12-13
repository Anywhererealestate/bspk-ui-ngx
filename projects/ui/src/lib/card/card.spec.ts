import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';
import { UICard } from './card';

describe('UICard', () => {
    let component: UICard;
    let fixture: ComponentFixture<UICard>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UICard],
        }).compileComponents();

        fixture = TestBed.createComponent(UICard);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
