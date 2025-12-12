import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIRadioOption } from './radio-option';

describe('UIRadioOption', () => {
    let component: UIRadioOption;
    let fixture: ComponentFixture<UIRadioOption>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIRadioOption],
        }).compileComponents();

        fixture = TestBed.createComponent(UIRadioOption);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
