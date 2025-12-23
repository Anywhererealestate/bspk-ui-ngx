import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UICheckbox } from './checkbox';

@Component({
    selector: 'ui-checkbox-example',
    standalone: true,
    imports: [CommonModule, UICheckbox],
    template: `
        <h2>Checkbox</h2>

        <h3>Basic with id</h3>
        <ui-checkbox id="test-id" name="checkbox-0" ariaLabel="Option 0" value="Option 0"></ui-checkbox>

        <h3>checked = true</h3>
        <ui-checkbox name="checkbox-1" ariaLabel="Option 1" value="Option 1" [checked]="true"></ui-checkbox>

        <h3>checked = false</h3>
        <ui-checkbox name="checkbox-2" ariaLabel="Option 2" value="Option 2" [checked]="false"></ui-checkbox>

        <h3>checked = true, disabled = true</h3>
        <ui-checkbox name="checkbox-3" ariaLabel="Option 3" value="Option 3" [checked]="true" [disabled]="true"></ui-checkbox>

        <h3>checked = false, disabled = true</h3>
        <ui-checkbox name="checkbox-4" ariaLabel="Option 4" value="Option 4" [checked]="false" [disabled]="true"></ui-checkbox>

        <h3>checked = true, invalid = true</h3>
        <ui-checkbox name="checkbox-5" ariaLabel="Option 5" value="Option 5" [checked]="true" [invalid]="true"></ui-checkbox>

        <h3>checked = false, invalid = true</h3>
        <ui-checkbox name="checkbox-6" ariaLabel="Option 6" value="Option 6" [checked]="false" [invalid]="true"></ui-checkbox>

        <h3>checked = true, required = true</h3>
        <ui-checkbox name="checkbox-7" ariaLabel="Option 7" value="Option 7" [checked]="true" [required]="true"></ui-checkbox>

        <h3>checked = false, required = true</h3>
        <ui-checkbox name="checkbox-8" ariaLabel="Option 8" value="Option 8" [checked]="false" [required]="true"></ui-checkbox>

        <h3>indeterminate = true</h3>
        <ui-checkbox name="checkbox-9" ariaLabel="Option 9" value="Option 9" [indeterminate]="true"></ui-checkbox>

        <h3>checked = true, indeterminate = true</h3>
        <ui-checkbox name="checkbox-10" ariaLabel="Option 10" value="Option 10" [checked]="true" [indeterminate]="true"></ui-checkbox>

        <h3>disabled = true, indeterminate = true</h3>
        <ui-checkbox name="checkbox-11" ariaLabel="Option 11" value="Option 11" [disabled]="true" [indeterminate]="true"></ui-checkbox>

        <h3>aria-describedby and aria-errormessage</h3>
        <div id="desc">This describes the checkbox</div>
        <div id="err">This is an error message</div>
        <ui-checkbox
            name="checkbox-12"
            ariaLabel="Option 12"
            value="Option 12"
            [ariaDescribedBy]="'desc'"
            [ariaErrorMessage]="'err'"
        ></ui-checkbox>
    `,
})
export class UICheckboxExample {}