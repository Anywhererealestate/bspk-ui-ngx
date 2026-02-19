import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { spyOn } from 'jest-mock';
import * as examples from './generated/components';

Object.entries(examples).forEach(([name, component]) => {
    describe(`${name}`, () => {
        let fixture: ComponentFixture<any>;
        let errorSpy: any;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [component],
            }).compileComponents();

            errorSpy = spyOn(console, 'error');
            fixture = TestBed.createComponent(component);
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
});
