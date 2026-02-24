import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { spyOn } from 'jest-mock';
import { UIFileUploadExample } from './example';

describe('FileUpload', () => {
    let component: UIFileUploadExample;
    let fixture: ComponentFixture<UIFileUploadExample>;
    let errorSpy: ReturnType<typeof spyOn>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIFileUploadExample],
        }).compileComponents();

        errorSpy = spyOn(console, 'error');
        fixture = TestBed.createComponent(UIFileUploadExample);
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
