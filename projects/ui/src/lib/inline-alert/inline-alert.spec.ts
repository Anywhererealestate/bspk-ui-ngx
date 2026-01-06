import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';
import { UIInlineAlert } from './inline-alert';

@Component({
    imports: [UIInlineAlert],
    template: `<ui-inline-alert [label]="'Test alert content'"></ui-inline-alert>`,
})
class TestHostComponent {}

describe('InlineAlert', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIInlineAlert],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
