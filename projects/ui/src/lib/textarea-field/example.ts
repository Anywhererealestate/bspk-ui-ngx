import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UITextareaField } from './textarea-field';

@Component({
    selector: 'ui-textarea-example',
    standalone: true,
    imports: [CommonModule, UITextareaField],
    template: `
        <h2>Textarea</h2>

        <h3>Default</h3>
        <ui-textarea-field name="default" label="Textarea" />

        <h3>Disabled</h3>
        <ui-textarea-field name="disabled" label="Textarea" [disabled]="true" />

        <h3>Invalid</h3>
        <ui-textarea-field name="invalid" label="Textarea" [invalid]="true" />

        <h3>Required</h3>
        <ui-textarea-field name="required" label="Textarea" [required]="true" />

        <h3>Read Only</h3>
        <ui-textarea-field name="readonly" label="Textarea" [readOnly]="true" />

        <h3>Placeholder</h3>
        <ui-textarea-field name="placeholder" label="Textarea" placeholder="Type here..." />

        <h3>size = small</h3>
        <ui-textarea-field name="small" label="Textarea" size="small" />

        <h3>size = medium</h3>
        <ui-textarea-field name="medium" label="Textarea" size="medium" />

        <h3>size = large</h3>
        <ui-textarea-field name="large" label="Textarea" size="large" />

        <h3>maxLength</h3>
        <ui-textarea-field name="maxlength" label="Textarea" [maxLength]="120" placeholder="Max 120 chars" />

        <h3>minRows (2) / maxRows (4)</h3>
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
