import { Component } from '@angular/core';
import { LinkProps, UILinkDirective } from './link.directive';

@Component({
    selector: 'ui-link-example',
    standalone: true,
    imports: [UILinkDirective],
    template: `
        <h2>Link</h2>

        <h3>Default</h3>
        <a ui-link href="https://bspk.dev">Default Link</a>

        <h3>With External Icon</h3>
        <a ui-link href="https://anywhere.re" trailingIcon="external">External Link</a>

        <h3>With Chevron Icon</h3>
        <a ui-link href="#" trailingIcon="chevron">Chevron Link</a>

        <h3>With Link Icon</h3>
        <a ui-link href="#" trailingIcon="link">Link Icon</a>

        <h3>Sizes</h3>
        <a ui-link href="#" size="small">Small Link</a>
        <br />
        <a ui-link href="#" size="base">Base Link</a>
        <br />
        <a ui-link href="#" size="large">Large Link</a>

        <h3>Variants</h3>
        <a ui-link href="#" variant="default">Default Variant</a>
        <br />
        <a ui-link href="#" variant="subtle">Subtle Variant</a>
        <br />
        <a ui-link href="#" variant="subtle-inverse">Subtle Inverse Variant</a>

        @for (kind of this.kinds; track kind) {
            <h3>{{ kind.charAt(0).toUpperCase() + kind.slice(1) }} Variant with Pseudo States</h3>
            <div data-links-grid>
                <div></div>
                <span>Default</span>
                <span>Hover</span>
                <span>Active</span>
                <span>Disabled</span>
                <span>Visited</span>
                <span>Focus</span>

                @for (state of ['default', 'hover', 'active', 'disabled', 'visited', 'focus']; track state) {
                    <div [attr.data-kind]="kind">
                        @if (state === 'disabled') {
                            <a
                                ui-link
                                href="https://bspk.dev/fake-link/{{ kind }}+{{ state }}"
                                [variant]="kind"
                                [disabled]="true"
                                >Link Text</a
                            >
                        } @else {
                            <a
                                ui-link
                                href="https://bspk.dev/fake-link/{{ kind }}+{{ state }}"
                                [variant]="kind"
                                [attr.data-pseudo]="state !== 'default' ? state : null">
                                Link Text
                            </a>
                        }
                    </div>
                }
            </div>
        }

        <h3>Disabled</h3>
        <a ui-link href="#" [disabled]="true">Disabled Link</a>
    `,
})
export class UILinkExample {
    kinds: Exclude<LinkProps['variant'], undefined>[] = ['default', 'subtle', 'subtle-inverse'];
}
