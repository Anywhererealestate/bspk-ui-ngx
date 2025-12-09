import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIRadio } from './radio';

describe('UIRadio', () => {
    let component: UIRadio;
    let fixture: ComponentFixture<UIRadio>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIRadio],
        }).compileComponents();

        fixture = TestBed.createComponent(UIRadio);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
