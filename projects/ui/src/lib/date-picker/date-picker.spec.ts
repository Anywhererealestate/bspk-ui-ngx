import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { UIDatePicker } from './date-picker';

describe('DatePicker', () => {
    let component: UIDatePicker;
    let fixture: ComponentFixture<UIDatePicker>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIDatePicker],
        }).compileComponents();

        fixture = TestBed.createComponent(UIDatePicker);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
