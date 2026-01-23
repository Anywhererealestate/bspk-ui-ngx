import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UICard } from './card';

@Component({
    selector: 'ui-card-example',
    standalone: true,
    imports: [CommonModule, UICard],
    template: `
        <h4>Default</h4>

        <div style="width: 300px">
            <ui-card>
                <p>Card works! <br />no props set</p>
            </ui-card>
        </div>

        <h4>Outlined Variant</h4>

        <div style="width: 300px">
            <ui-card variant="outlined">
                <p>Card works! <br />(variant="outlined")</p>
            </ui-card>
        </div>

        <h4>Elevated Variant</h4>

        <div style="width: 300px">
            <ui-card variant="elevated">
                <p>Card works! <br />(variant="elevated")</p>
            </ui-card>
        </div>
    `,
})
export class UICardExample {}
