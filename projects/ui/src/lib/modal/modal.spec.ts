import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';
import { UIModal } from './modal';

describe('UIModal', () => {
    let component: UIModal;
    let fixture: ComponentFixture<UIModal>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIModal],
        }).compileComponents();

        fixture = TestBed.createComponent(UIModal);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
