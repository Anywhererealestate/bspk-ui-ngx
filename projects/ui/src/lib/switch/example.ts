import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UISwitch } from './switch';

@Component({
    selector: 'ui-switch-example',
    standalone: true,
    imports: [CommonModule, UISwitch],
    template: `
        <h2>Switch</h2>

        <h3>Basic with id</h3>
        <ui-switch id="test-id" name="switch-0" ariaLabel="Switch 0" value="Switch 0"></ui-switch>

        <h3>checked = true</h3>
        <ui-switch name="switch-1" ariaLabel="Switch 1" value="Switch 1" [checked]="true"></ui-switch>

        <h3>checked = false</h3>
        <ui-switch name="switch-2" ariaLabel="Switch 2" value="Switch 2" [checked]="false"></ui-switch>

        <h3>checked = true, disabled = true</h3>
        <ui-switch name="switch-3" ariaLabel="Switch 3" value="Switch 3" [checked]="true" [disabled]="true"></ui-switch>

        <h3>checked = false, disabled = true</h3>
        <ui-switch
            name="switch-4"
            ariaLabel="Switch 4"
            value="Switch 4"
            [checked]="false"
            [disabled]="true"></ui-switch>
    `,
})
export class UISwitchExample {}
