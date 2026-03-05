import { Component } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { UIEmptyState } from '../empty-state';

@Component({
    selector: 'ui-empty-state-example',
    standalone: true,
    imports: [UIEmptyState],
    template: `
        <h4>Default</h4>
        <ui-empty-state body="example-body" header="example-header"> Example Content </ui-empty-state>

        <h4>body: example-body</h4>
        <ui-empty-state body="example-body" header="example-header"> Example Content </ui-empty-state>

        <h4>bodyAlign: center</h4>
        <ui-empty-state body="example-body" bodyAlign="center" header="example-header">
            Example Content
        </ui-empty-state>

        <h4>bodyAlign: left</h4>
        <ui-empty-state body="example-body" bodyAlign="left" header="example-header"> Example Content </ui-empty-state>

        <h4>callToAction: &#123; label: 'Button', onClick: handleClick.bind(this, 'Basic') &#125;</h4>
        <ui-empty-state
            body="example-body"
            [callToAction]="{ label: 'Button', onClick: handleClick.bind(this, 'Basic') }"
            header="example-header">
            Example Content
        </ui-empty-state>

        <h4>
            callToAction: &#123; label: 'Small Button', onClick: handleClick.bind(this, 'Small'), size: 'small' &#125;
        </h4>
        <ui-empty-state
            body="example-body"
            [callToAction]="{ label: 'Small Button', onClick: handleClick.bind(this, 'Small'), size: 'small' }"
            header="example-header">
            Example Content
        </ui-empty-state>

        <h4>
            callToAction: &#123; label: 'Medium Button', onClick: handleClick.bind(this, 'Medium'), size: 'medium'
            &#125;
        </h4>
        <ui-empty-state
            body="example-body"
            [callToAction]="{ label: 'Medium Button', onClick: handleClick.bind(this, 'Medium'), size: 'medium' }"
            header="example-header">
            Example Content
        </ui-empty-state>

        <h4>
            callToAction: &#123; label: 'Large Button', onClick: handleClick.bind(this, 'Large'), size: 'large' &#125;
        </h4>
        <ui-empty-state
            body="example-body"
            [callToAction]="{ label: 'Large Button', onClick: handleClick.bind(this, 'Large'), size: 'large' }"
            header="example-header">
            Example Content
        </ui-empty-state>

        <h4>header: example-header</h4>
        <ui-empty-state body="example-body" header="example-header"> Example Content </ui-empty-state>
    `,
})
export class UIEmptyStateExample {
    protected handleClick(name: string): void {
        sendSnackbar(`${name} Button clicked!`);
    }
}
