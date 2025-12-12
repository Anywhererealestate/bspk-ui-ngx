import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIToggleOption } from './toggle-option';

describe('ToggleOption', () => {
    let component: UIToggleOption;
    let fixture: ComponentFixture<UIToggleOption>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIToggleOption],
        }).compileComponents();

        fixture = TestBed.createComponent(UIToggleOption);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

/** Copyright 2025 Anywhere Real Estate - CC BY 4.0 */
