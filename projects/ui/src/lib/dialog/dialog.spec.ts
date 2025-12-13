import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';
import { UIDialog } from './dialog';

describe('UIDialog', () => {
    let component: UIDialog;
    let fixture: ComponentFixture<UIDialog>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIDialog],
        }).compileComponents();

        fixture = TestBed.createComponent(UIDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
