import { Component } from '@angular/core';
import { sendSnackbar } from '../../utils/sendSnackbar';
import { UIButton } from '../button';
import { UIOutsideClickDirective } from './outside-click.directive';

@Component({
    selector: 'ui-outside-click-example',
    standalone: true,
    imports: [UIOutsideClickDirective, UIButton],
    template: `
        <h2>Outside Click (Directive)</h2>

        <h3>Single Button with Outside Click Detection</h3>
        <ui-button
            label="Click outside me!"
            [ui-outside-click]="{ callback: outsideClick('1') }"
            (click)="insideClick('1')()">
        </ui-button>

        <h3>Multiple Elements with Outside Click Detection</h3>
        <div
            style="border: 1px solid var(--stroke-neutral-base); padding: 16px; display: inline-block"
            [ui-outside-click]="{ callback: outsideClick('2') }">
            <p>Clicking inside this box will not trigger the outside click callback.</p>
            <ui-button label="Inside Button" (click)="insideClick('2')()"></ui-button>
        </div>
    `,
})
export class UIOutsideClickExample {
    outsideClick(num: string) {
        return () => {
            sendSnackbar(`Outside click (${num}) detected!`);
        };
    }

    insideClick(num: string) {
        return () => sendSnackbar(`Inside click (${num}) detected!`);
    }
}
