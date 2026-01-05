import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';
import { UICheckboxGroup } from './checkbox-group';

@Component({
    selector: 'ui-checkbox-group-example',
    standalone: true,
    imports: [CommonModule, UICheckboxGroup],
    template: `
        <h2>Checkbox Group Example</h2>
        <ui-checkbox-group
            [options]="options"
            [value]="selected"
            (valueChange)="onValueChange($event)"
            [name]="'user-checkbox-group'"
            [selectAll]="true"
            [selectAllProps]="{ label: 'Select All', description: 'Select all options' }">
        </ui-checkbox-group>
        <div>Selected: {{ selected | json }}</div>
    `,
})
class TestHostComponent {
    options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];
    selected: string[] = [];

    onValueChange(newValue: string[]) {
        this.selected = newValue;
    }
}

describe('UICheckboxGroup', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();
    });

    it('should create', () => {
        expect(TestHostComponent).toBeTruthy();
    });

    it('should have no basic a11y issues', async () =>
        await hasNoBasicA11yIssues(TestBed.createComponent(TestHostComponent)));
});
