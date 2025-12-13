import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UITruncated } from './truncated';

@Component({
    selector: 'ui-truncated-example',
    standalone: true,
    imports: [CommonModule, UITruncated],
    template: `
        <h2>Truncated Directive</h2>

        <h3>Truncated: data-truncated attribute</h3>
        <div>
            <div data-truncated style="max-width: 200px; height: 20px" txt="body-large">
                This is sample text used to demonstrate truncation behavior in the UI. When the content exceeds the
                available space, it should be visually truncated with an ellipsis to indicate more content exists.
            </div>
        </div>

        <h3>Not Truncated: data-truncated attribute</h3>
        <div>
            <div data-truncated style="max-width: 200px" txt="body-large">Short text</div>
        </div>

        <h3>Truncated Component: when truncated tooltip shows</h3>
        <div>
            <ui-truncated style="max-width: 200px" txt="body-large" tooltip>
                This English sentence is deliberately longer than the container width. It helps verify that the
                truncated component shows a tooltip only when the text is cut off and not fully visible to the user.
            </ui-truncated>
        </div>

        <h3>Truncated Component: no tooltip when no truncation is needed</h3>
        <div>
            <ui-truncated style="max-width: 250px" txt="body-large" tooltip> No truncation here </ui-truncated>
        </div>
    `,
})
export class UITruncatedExample {}
