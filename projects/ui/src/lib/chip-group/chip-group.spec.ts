import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIChipGroup } from './chip-group';

describe('UIChipGroup', () => {
    let component: UIChipGroup;
    let fixture: ComponentFixture<UIChipGroup>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIChipGroup],
        }).compileComponents();

        fixture = TestBed.createComponent(UIChipGroup);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
