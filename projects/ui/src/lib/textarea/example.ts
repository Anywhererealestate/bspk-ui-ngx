import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UITextarea } from './textarea';

@Component({
    selector: 'ui-textarea-example',
    standalone: true,
    imports: [CommonModule, UITextarea],
    template: `
        <h2>Textarea</h2>

        <h3>Default</h3>
        <ui-textarea name="default" ariaLabel="Textarea" />

        <h3>Disabled</h3>
        <ui-textarea name="disabled" ariaLabel="Textarea" [disabled]="true" />

        <h3>Invalid</h3>
        <ui-textarea name="invalid" ariaLabel="Textarea" [invalid]="true" />

        <h3>Required</h3>
        <ui-textarea name="required" ariaLabel="Textarea" [required]="true" />

        <h3>Read Only</h3>
        <ui-textarea name="readonly" ariaLabel="Textarea" [readOnly]="true" />

        <h3>Placeholder</h3>
        <ui-textarea name="placeholder" ariaLabel="Textarea" placeholder="Type here..." />

        <h3>size = small</h3>
        <ui-textarea name="small" ariaLabel="Textarea" size="small" />

        <h3>size = medium</h3>
        <ui-textarea name="medium" ariaLabel="Textarea" size="medium" />

        <h3>size = large</h3>
        <ui-textarea name="large" ariaLabel="Textarea" size="large" />

        <h3>maxLength</h3>
        <ui-textarea name="maxlength" ariaLabel="Textarea" [maxLength]="120" placeholder="Max 120 chars" />

        <h3>minRows (2) / maxRows (4)</h3>
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
