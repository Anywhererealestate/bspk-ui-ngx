import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIButton } from '../button';
import { IconAdd } from '../icons/add';
import { UIBadge } from './badge';

@Component({
    selector: 'ui-badge-example',
    standalone: true,
    imports: [CommonModule, UIBadge, UIButton],
    template: `
        <h4>Basic Usage</h4>

        <div>
            <ui-badge [count]="5" />
        </div>
        <div>
            <ui-badge [count]="100" />
        </div>

        <h4>Badge with Button</h4>

        <ui-badge [count]="44">
            <ui-button label="Label test" size="large" variant="secondary" [icon]="iconAdd"></ui-button>
        </ui-badge>

        <h4>Badge with Border Surface</h4>

        <ui-badge [count]="101" [surfaceBorder]="true">
            <ui-button label="Label test" size="large" variant="primary" [icon]="iconAdd"></ui-button>
        </ui-badge>
    `,
})
export class UIBadgeExample {
    protected readonly iconAdd = IconAdd;
}
