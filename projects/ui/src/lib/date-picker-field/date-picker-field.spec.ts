import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { spyOn } from 'jest-mock';
import { UIDatePickerFieldExample } from './example';

describe('DatePickerField', () => {
    let component: UIDatePickerFieldExample;
    let fixture: ComponentFixture<UIDatePickerFieldExample>;
    let errorSpy: any;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIDatePickerFieldExample],
        }).compileComponents();

        errorSpy = spyOn(console, 'error');
        fixture = TestBed.createComponent(UIDatePickerFieldExample);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        errorSpy.mockRestore();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not have console errors', () => {
        expect(errorSpy).not.toHaveBeenCalled();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
