import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIChip } from './chip';

describe('UIChip', () => {
    let component: UIChip;
    let fixture: ComponentFixture<UIChip>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIChip],
        }).compileComponents();

        fixture = TestBed.createComponent(UIChip);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
