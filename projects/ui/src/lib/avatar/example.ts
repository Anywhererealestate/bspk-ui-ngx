import { Component } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { UIAvatar } from '../avatar';

@Component({
    selector: 'ui-avatar-example',
    standalone: true,
    imports: [UIAvatar],
    template: `
        <h4>Default</h4>
        <ui-avatar name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: blue</h4>
        <ui-avatar color="blue" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: green</h4>
        <ui-avatar color="green" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: grey</h4>
        <ui-avatar color="grey" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: lime</h4>
        <ui-avatar color="lime" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: magenta</h4>
        <ui-avatar color="magenta" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: orange</h4>
        <ui-avatar color="orange" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: pink</h4>
        <ui-avatar color="pink" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: primary</h4>
        <ui-avatar color="primary" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: purple</h4>
        <ui-avatar color="purple" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: red</h4>
        <ui-avatar color="red" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: secondary</h4>
        <ui-avatar color="secondary" name="example-name" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>

        <h4>color: teal</h4>
        <ui-avatar color="teal" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: white</h4>
        <ui-avatar color="white" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>color: yellow</h4>
        <ui-avatar color="yellow" name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>disabled: true</h4>
        <ui-avatar [disabled]="true" name="example-name" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>

        <h4>disabled: false</h4>
        <ui-avatar [disabled]="false" name="example-name" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>

        <h4>hideTooltip: true</h4>
        <ui-avatar [hideTooltip]="true" name="example-name" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>

        <h4>hideTooltip: false</h4>
        <ui-avatar [hideTooltip]="false" name="example-name" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>

        <h4>image</h4>
        <ui-avatar image="./avatar-01.png" name="example-name" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>

        <h4>initials</h4>
        <ui-avatar initials="example-initials" name="example-name" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>

        <h4>name</h4>
        <ui-avatar name="example-name" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>showIcon: true</h4>
        <ui-avatar name="example-name" [showIcon]="true" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>

        <h4>showIcon: false</h4>
        <ui-avatar name="example-name" [showIcon]="false" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>

        <h4>size: large</h4>
        <ui-avatar name="example-name" size="large" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>size: medium</h4>
        <ui-avatar name="example-name" size="medium" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>size: small</h4>
        <ui-avatar name="example-name" size="small" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>size: x-large</h4>
        <ui-avatar name="example-name" size="x-large" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>size: x-small</h4>
        <ui-avatar name="example-name" size="x-small" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>size: xx-large</h4>
        <ui-avatar name="example-name" size="xx-large" (onClick)="handleClick('UIAvatar')"> Example Content </ui-avatar>

        <h4>size: xxx-large</h4>
        <ui-avatar name="example-name" size="xxx-large" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>

        <h4>size: xxxx-large</h4>
        <ui-avatar name="example-name" size="xxxx-large" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>

        <h4>size: xxxxx-large</h4>
        <ui-avatar name="example-name" size="xxxxx-large" (onClick)="handleClick('UIAvatar')">
            Example Content
        </ui-avatar>
    `,
})
export class UIAvatarExample {
    protected handleClick(name: string): void {
        sendSnackbar(`${name} clicked!`);
    }
}
