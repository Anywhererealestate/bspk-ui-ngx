import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { UIRadio } from './radio';

@Component({
    template: `<ui-radio label="Test Label" name="test-name" ariaLabel="Test label" value="test-value" />`,
    standalone: true,
    imports: [UIRadio],
})
class TestHostComponent {}

describe('UIRadio', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
