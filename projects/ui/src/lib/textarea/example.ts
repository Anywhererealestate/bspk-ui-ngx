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
        <ui-textarea ariaLabel="Textarea"></ui-textarea>

        <h3>Disabled</h3>
        <ui-textarea ariaLabel="Textarea" [disabled]="true"></ui-textarea>

        <h3>Invalid</h3>
        <ui-textarea ariaLabel="Textarea" [invalid]="true"></ui-textarea>

        <h3>Required</h3>
        <ui-textarea ariaLabel="Textarea" [required]="true"></ui-textarea>

        <h3>Read Only</h3>
        <ui-textarea ariaLabel="Textarea" [readOnly]="true"></ui-textarea>

        <h3>Placeholder</h3>
        <ui-textarea ariaLabel="Textarea" placeholder="Type here..."></ui-textarea>

        <h3>size = small</h3>
        <ui-textarea ariaLabel="Textarea" size="small"></ui-textarea>

        <h3>size = medium</h3>
        <ui-textarea ariaLabel="Textarea" size="medium"></ui-textarea>

        <h3>size = large</h3>
        <ui-textarea ariaLabel="Textarea" size="large"></ui-textarea>

        <h3>name</h3>
        <ui-textarea ariaLabel="Textarea" name="example-name"></ui-textarea>

        <h3>value</h3>
        <ui-textarea ariaLabel="Textarea" value="Initial value"></ui-textarea>

        <h3>maxLength</h3>
        <ui-textarea ariaLabel="Textarea" [maxLength]="120" placeholder="Max 120 chars"></ui-textarea>

        <h3>minRows (3) / maxRows (6)</h3>
        <ui-textarea
            ariaLabel="Textarea"
            [minRows]="3"
            [maxRows]="6"
            value="Line 1
Line 2
Line 3
Line 4"></ui-textarea>
    `,
})
export class UITextareaExample {}
