import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { UIField } from '../field';
import { UIPassword } from './password';

@Component({
    standalone: true,
    selector: 'ui-password-example',
    imports: [UIField, UIPassword],
    template: `
        <ui-field controlId="password" label="Password" helperText="Enter your password">
            <ui-password [id]="'password'" name="password" placeholder="••••••••"></ui-password>
        </ui-field>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIPasswordExample {}
