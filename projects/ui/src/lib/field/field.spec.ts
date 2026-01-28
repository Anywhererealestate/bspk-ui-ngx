import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { UIInput } from '../input';
import { UIField } from './field';

@Component({
    imports: [UIField, UIInput],
    template: `
        <ui-field controlId="test-input" label="Test label" helperText="Helper text">
            <ui-input
                id="example-input"
                name="example-input"
                [value]="value"
                (valueChange)="value = $event"
                ariaLabel="Example input"
                placeholder="Type here" />
        </ui-field>
    `,
})
class TestHostComponent {
    value = '';
}

describe('Field', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIField, UIInput],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
