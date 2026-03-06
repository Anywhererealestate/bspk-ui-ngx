import { Component } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { UIButtonDock } from '../button-dock';
import { UISwitchOption } from '../switch-option';

@Component({
    selector: 'ui-button-dock-example',
    standalone: true,
    imports: [UIButtonDock, UISwitchOption],
    template: `
        <h4>Default</h4>
        <ui-button-dock
            [primaryButton]="{ label: 'Submit' }"
            (primaryClick)="onPrimaryClick('Default Primary, Submit')"
            (secondaryClick)="onSecondaryClick('Default Secondary, Cancel')" />

        <h4>arrangement: fill</h4>
        <ui-button-dock
            arrangement="fill"
            [primaryButton]="{ label: 'Submit' }"
            [secondaryButton]="{ label: 'Cancel' }"
            (primaryClick)="onPrimaryClick('Fill Primary, Submit')"
            (secondaryClick)="onSecondaryClick('Fill Secondary, Cancel')" />

        <h4>arrangement: spread</h4>
        <ui-button-dock
            arrangement="spread"
            [primaryButton]="{ label: 'Submit' }"
            [secondaryButton]="{ label: 'Cancel' }"
            (primaryClick)="onPrimaryClick('Spread Primary, Submit')"
            (secondaryClick)="onSecondaryClick('Spread Secondary, Cancel')" />

        <h4>mode: fixed / inline</h4>
        <ui-switch-option
            name="modeSwitch"
            label="show mode: fixed"
            [checked]="mode === 'fixed'"
            (checkedChange)="mode = $event ? 'fixed' : 'inline'"
            value="true" />
        <ui-button-dock
            [mode]="mode"
            [primaryButton]="{ label: 'Submit' }"
            (primaryClick)="onPrimaryClick('Mode ' + mode + ', Primary, Submit')"
            (secondaryClick)="onSecondaryClick('Mode ' + mode + ', Secondary, Cancel')" />

        <h4>mode: inline</h4>
        <ui-button-dock
            mode="inline"
            [primaryButton]="{ label: 'Submit' }"
            (primaryClick)="onPrimaryClick('Mode inline, Primary, Submit')"
            (secondaryClick)="onSecondaryClick('Mode inline, Secondary, Cancel')" />

        <h4>primaryButton: '&#123; label: 'Submit' &#125;'</h4>
        <ui-button-dock
            [primaryButton]="{ label: 'Submit' }"
            (primaryClick)="onPrimaryClick('Primary, Submit')"
            (secondaryClick)="onSecondaryClick('Secondary, Cancel')" />

        <h4>secondaryButton: '&#123; label: 'Cancel' &#125;'</h4>
        <ui-button-dock
            [primaryButton]="{ label: 'Submit' }"
            [secondaryButton]="{ label: 'Cancel' }"
            (primaryClick)="onPrimaryClick('Primary, Submit')"
            (secondaryClick)="onSecondaryClick('Secondary, Cancel')" />
    `,
})
export class UIButtonDockExample {
    mode: 'fixed' | 'inline' = 'inline';

    onPrimaryClick(name: string) {
        sendSnackbar(`${name} button clicked!`);
    }
    onSecondaryClick(name: string) {
        sendSnackbar(`${name} button clicked!`);
    }
}
