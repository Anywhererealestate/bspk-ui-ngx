import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UITextArea } from './text-area';

@Component({
    selector: 'ui-text-area-example',
    standalone: true,
    imports: [CommonModule, UITextArea],
    template: `
        <h2>TextArea</h2>

        <h3>Default</h3>
        <ui-text-area label="Input Label"></ui-text-area>

        <h3>Disabled</h3>
        <ui-text-area label="Input Label" [disabled]="true"></ui-text-area>

        <h3>Invalid</h3>
        <ui-text-area label="Input Label" [invalid]="true"></ui-text-area>

        <h3>Required</h3>
        <ui-text-area label="Input Label" [required]="true"></ui-text-area>

        <h3>Read Only</h3>
        <ui-text-area label="Input Label" [readOnly]="true"></ui-text-area>

        <h3>Placeholder</h3>
        <ui-text-area label="Input Label" placeholder="I am placeholder copy"></ui-text-area>
    `,
})
export class UITextAreaExample {}
