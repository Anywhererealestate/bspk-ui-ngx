import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UITextarea } from './textarea';

@Component({
    selector: 'ui-textarea-example',
    standalone: true,
    imports: [CommonModule, UITextarea],
    template: `
        <h4>Default</h4>
        <ui-textarea name="default" ariaLabel="Textarea" />

        <h4>Disabled</h4>
        <ui-textarea name="disabled" ariaLabel="Textarea" [disabled]="true" />

        <h4>Invalid</h4>
        <ui-textarea name="invalid" ariaLabel="Textarea" [invalid]="true" />

        <h4>Required</h4>
        <ui-textarea name="required" ariaLabel="Textarea" [required]="true" />

        <h4>Read Only</h4>
        <ui-textarea name="readonly" ariaLabel="Textarea" [readOnly]="true" />

        <h4>Placeholder</h4>
        <ui-textarea name="placeholder" ariaLabel="Textarea" placeholder="Type here..." />

        <h4>size = small</h4>
        <ui-textarea name="small" ariaLabel="Textarea" size="small" />

        <h4>size = medium</h4>
        <ui-textarea name="medium" ariaLabel="Textarea" size="medium" />

        <h4>size = large</h4>
        <ui-textarea name="large" ariaLabel="Textarea" size="large" />

        <h4>maxLength</h4>
        <ui-textarea name="maxlength" ariaLabel="Textarea" [maxLength]="120" placeholder="Max 120 chars" />

        <h4>minRows (2) / maxRows (4)</h4>
        <ui-textarea
            name="minmaxrows"
            ariaLabel="Textarea"
            [minRows]="2"
            [maxRows]="4"
            value="Line 1
Line 2
Line 3
Line 4" />
        <p>The minimum value for minRows is 3 so setting it to 2 will default to 3.</p>
    `,
})
export class UITextareaExample {}
