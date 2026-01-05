import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';
import { UICheckbox } from '../checkbox/checkbox';
import { UIField } from './field';

@Component({
    template: `
        <ui-field controlId="test-checkbox" label="Test label" helperText="Helper text">
            <ui-input
                id="example-input"
                name="example-input"
                [value]="value"
                (onChange)="onChange($event)"
                ariaLabel="Example input"
                placeholder="Type here"></ui-input>
        </ui-field>
    `,
})
class TestHostComponent {}

describe('Field', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIField, UICheckbox],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
