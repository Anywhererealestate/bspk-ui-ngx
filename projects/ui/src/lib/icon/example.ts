import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconIcecream } from '../icons/icecream';
import { UIIcon } from './icon';

@Component({
    selector: 'ui-icon-example',
    standalone: true,
    imports: [CommonModule, UIIcon],
    template: `
        <h4>Using prop width = 24</h4>
        <div>
            <ui-icon [icon]="iconIcecream" width="24"> </ui-icon>
        </div>

        <h4>Not using width prop</h4>
        <p>Parent div has a width of 50px</p>
        <div style="width: 50px">
            <ui-icon [icon]="iconIcecream"> </ui-icon>
        </div>
    `,
})
export class UIIconExample {
    protected readonly iconIcecream = IconIcecream;
}
