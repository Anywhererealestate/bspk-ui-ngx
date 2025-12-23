import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIButton } from '../button';
import { UIFocusTrapDirective } from './focus-trap.directive';

@Component({
    selector: 'ui-focus-trap-example',
    standalone: true,
    imports: [CommonModule, UIFocusTrapDirective, UIButton],
    template: `
        <h3>Focus Trap Example</h3>
        <p>
            Outside button (should not receive focus when trap enabled):
            <ui-button id="outside" label="Outside"></ui-button>
        </p>

        <label style="display: block; margin: var(--spacing-sizing-08) 0;">
            <input type="checkbox" [checked]="enabled" (change)="enabled = $event.target.checked" /> Enable trap
        </label>

        <div [ui-focus-trap]="enabled">
            <div style="display:flex; gap: var(--spacing-sizing-04);">
                <ui-button id="one" label="One"></ui-button>
                <ui-button id="two" label="Two" variant="secondary"></ui-button>
                <a href="#" data-bspk="link" id="three">Three (link)</a>
            </div>
        </div>
    `,
})
export class UIFocusTrapExample {
    enabled = true;
}
