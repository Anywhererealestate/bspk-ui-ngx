import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UITextareaField } from './textarea-field';

@Component({
    selector: 'ui-textarea-example',
    standalone: true,
    imports: [CommonModule, UITextareaField],
    template: `
        <h4>Default</h4>
        <ui-textarea-field name="default" label="Textarea" />

        <h4>Disabled</h4>
        <ui-textarea-field name="disabled" label="Textarea" [disabled]="true" />

        <h4>Invalid</h4>
        <ui-textarea-field name="invalid" label="Textarea" [invalid]="true" />

        <h4>Required</h4>
        <ui-textarea-field name="required" label="Textarea" [required]="true" />

        <h4>Read Only</h4>
        <ui-textarea-field name="readonly" label="Textarea" [readOnly]="true" />

        <h4>Placeholder</h4>
        <ui-textarea-field name="placeholder" label="Textarea" placeholder="Type here..." />

        <h4>size = small</h4>
        <ui-textarea-field name="small" label="Textarea" size="small" />

        <h4>size = medium</h4>
        <ui-textarea-field name="medium" label="Textarea" size="medium" />

        <h4>size = large</h4>
        <ui-textarea-field name="large" label="Textarea" size="large" />

        <h4>maxLength</h4>
        <ui-textarea-field name="maxlength" label="Textarea" [maxLength]="120" placeholder="Max 120 chars" />

        <h4>minRows (2) / maxRows (4)</h4>
        <ui-textarea-field
            name="minmaxrows"
            label="Textarea"
            [minRows]="2"
            [maxRows]="4"
            value="Line 1
Line 2
Line 3
Line 4"
            helperText="The minimum value for minRows is 3 so setting it to 2 will default to 3." />
    `,
})
export class UITextareaFieldExample {}
