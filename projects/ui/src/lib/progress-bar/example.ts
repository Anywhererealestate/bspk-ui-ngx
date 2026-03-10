import { Component } from '@angular/core';
import { UIButton } from '../button';
import { UIProgressBar } from '../progress-bar';

@Component({
    selector: 'ui-progress-bar-example',
    standalone: true,
    imports: [UIProgressBar, UIButton],
    template: `
        <h4>Default</h4>
        <ui-progress-bar [completion]="12" label="example-label" />

        <h4>align: center</h4>
        <ui-progress-bar align="center" [completion]="12" label="example-label" />

        <h4>align: left</h4>
        <ui-progress-bar align="left" [completion]="12" label="example-label" />

        <h4>completion: 12</h4>
        <ui-progress-bar [completion]="12" label="example-label" />

        <h4>label: example-label</h4>
        <ui-progress-bar [completion]="12" label="example-label" />

        <h4>size: large</h4>
        <ui-progress-bar [completion]="12" label="example-label" size="large" />

        <h4>size: small</h4>
        <ui-progress-bar [completion]="12" label="example-label" size="small" />

        <h4>successColor: true</h4>
        <ui-progress-bar [completion]="100" label="example-label" [successColor]="true" />

        <h4>successColor: false</h4>
        <ui-progress-bar [completion]="100" label="example-label" [successColor]="false" />

        <h4>successHidden: true;</h4>
        <p>when successHidden is true, the progress bar will be hidden when completion is 100</p>
        <div style="margin-bottom: 16px">
            <ui-button (click)="startProgress()" label="start progress" />
        </div>
        <ui-progress-bar [completion]="animatedCompletion" label="example-label" [successHidden]="true" />

        <h4>successHidden: false; completion: 100</h4>
        <ui-progress-bar [completion]="100" label="example-label" [successHidden]="false" />
    `,
})
export class UIProgressBarExample {
    animatedCompletion = 0;
    private intervalId: any;

    startProgress() {
        this.animatedCompletion = 0;
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(() => {
            if (this.animatedCompletion < 100) {
                this.animatedCompletion += 10;
            } else {
                clearInterval(this.intervalId);
            }
        }, 500);
    }
}
