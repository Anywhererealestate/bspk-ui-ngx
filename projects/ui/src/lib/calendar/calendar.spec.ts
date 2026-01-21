import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UICalendar } from './calendar';

describe('Calendar', () => {
    let component: UICalendar;
    let fixture: ComponentFixture<UICalendar>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UICalendar],
        }).compileComponents();

        fixture = TestBed.createComponent(UICalendar);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
