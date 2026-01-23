import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UITag } from './tag';

@Component({
    selector: 'ui-tag-example',
    standalone: true,
    imports: [CommonModule, UITag],
    template: `
        <h4>Default</h4>
        <ui-tag label="basic tag" />

        <h4>variant = flat</h4>
        <ui-tag label="flat tag" variant="flat" />

        <h4>variant = corner-wrap</h4>
        <ui-tag label="corner-wrap" variant="corner-wrap" />

        <h4>variant = pill</h4>
        <ui-tag label="pill tag" variant="pill" />

        <h4>size = small</h4>
        <ui-tag label="small tag" size="small" />

        <h4>size = x-small</h4>
        <ui-tag label="x-small tag" size="x-small" />

        <h4>size = x-small; variant = corner-wrap</h4>
        <ui-tag label="basic tag" size="x-small" variant="corner-wrap" />

        <h4>size = x-small; variant = pill</h4>
        <ui-tag label="basic tag" size="x-small" variant="pill" />

        <h4>Color: blue</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="blue" label="basic tag" />
                <ui-tag color="blue" label="basic pill" variant="pill" />
                <ui-tag color="blue" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="blue" label="basic tag" size="x-small" />
                <ui-tag color="blue" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="blue" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: green</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="green" label="basic tag" />
                <ui-tag color="green" label="basic pill" variant="pill" />
                <ui-tag color="green" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="green" label="basic tag" size="x-small" />
                <ui-tag color="green" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="green" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: lime</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="lime" label="basic tag" />
                <ui-tag color="lime" label="basic pill" variant="pill" />
                <ui-tag color="lime" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="lime" label="basic tag" size="x-small" />
                <ui-tag color="lime" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="lime" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: magenta</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="magenta" label="basic tag" />
                <ui-tag color="magenta" label="basic pill" variant="pill" />
                <ui-tag color="magenta" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="magenta" label="basic tag" size="x-small" />
                <ui-tag color="magenta" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="magenta" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: orange</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="orange" label="basic tag" />
                <ui-tag color="orange" label="basic pill" variant="pill" />
                <ui-tag color="orange" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="orange" label="basic tag" size="x-small" />
                <ui-tag color="orange" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="orange" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: pink</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="pink" label="basic tag" />
                <ui-tag color="pink" label="basic pill" variant="pill" />
                <ui-tag color="pink" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="pink" label="basic tag" size="x-small" />
                <ui-tag color="pink" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="pink" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: purple</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="purple" label="basic tag" />
                <ui-tag color="purple" label="basic pill" variant="pill" />
                <ui-tag color="purple" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="purple" label="basic tag" size="x-small" />
                <ui-tag color="purple" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="purple" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: red</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="red" label="basic tag" />
                <ui-tag color="red" label="basic pill" variant="pill" />
                <ui-tag color="red" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="red" label="basic tag" size="x-small" />
                <ui-tag color="red" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="red" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: teal</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="teal" label="basic tag" />
                <ui-tag color="teal" label="basic pill" variant="pill" />
                <ui-tag color="teal" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="teal" label="basic tag" size="x-small" />
                <ui-tag color="teal" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="teal" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: yellow</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="yellow" label="basic tag" />
                <ui-tag color="yellow" label="basic pill" variant="pill" />
                <ui-tag color="yellow" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="yellow" label="basic tag" size="x-small" />
                <ui-tag color="yellow" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="yellow" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: grey</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="grey" label="basic tag" />
                <ui-tag color="grey" label="basic pill" variant="pill" />
                <ui-tag color="grey" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="grey" label="basic tag" size="x-small" />
                <ui-tag color="grey" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="grey" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: white</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="white" label="basic tag" />
                <ui-tag color="white" label="basic pill" variant="pill" />
                <ui-tag color="white" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="white" label="basic tag" size="x-small" />
                <ui-tag color="white" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="white" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: primary</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="primary" label="basic tag" />
                <ui-tag color="primary" label="basic pill" variant="pill" />
                <ui-tag color="primary" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="primary" label="basic tag" size="x-small" />
                <ui-tag color="primary" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="primary" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>

        <h4>Color: secondary</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="secondary" label="basic tag" />
                <ui-tag color="secondary" label="basic pill" variant="pill" />
                <ui-tag color="secondary" label="corner wrap" variant="corner-wrap" />
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <ui-tag color="secondary" label="basic tag" size="x-small" />
                <ui-tag color="secondary" label="basic pill" variant="pill" size="x-small" />
                <ui-tag color="secondary" label="corner wrap" variant="corner-wrap" size="x-small" />
            </div>
        </div>
    `,
})
export class UITagExample {}
