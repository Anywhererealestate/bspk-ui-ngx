import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';
import { UICheckboxOption } from './checkbox-option';

@Component({
    template: `
        <ui-checkbox-option
            [label]="'Test Label'"
            [name]="'test-name'"
            [value]="'test-value'"
            [description]="'This is description for Test Label'"
            [id]="'checkbox-option-example-0'"
            [checked]="checked"
            [ariaLabel]="'Test Label - This is description for Test Label'"
            (checkedChange)="onCheckedChange(0, $event)" />
    `,
    imports: [UICheckboxOption],
})
class TestHostComponent {
    checked = false;

    onCheckedChange(idx: number, checked: boolean) {
        this.checked = checked;
        // Optionally, you can add assertions or side effects here
    }
}

describe('UICheckboxOption', () => {
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
