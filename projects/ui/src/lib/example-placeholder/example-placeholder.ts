import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core';
import { AsSignal } from '../../types/common';
import { UITxtDirective } from '../txt';

export interface ExamplePlaceholderProps {
    width?: string;
    height?: string;
    label?: string;
}

/**
 * A placeholder box used in examples to show dimensions or loading layout.
 *
 * ```html
 * <ui-example-placeholder width="200px" height="200px" label="200px × 200px" />
 * ```
 *
 * @name ExamplePlaceholder
 * @phase Utility
 */
@Component({
    standalone: true,
    selector: 'ui-example-placeholder',
    imports: [CommonModule, UITxtDirective],
    template: `
        <div
            data-bspk-utility="example-placeholder"
            [style.width]="widthCss()"
            [style.height]="heightCss()"
            style="
        display:flex;
        flex-direction:column;
        gap:var(--spacing-sizing-01);
        align-items:center;
        justify-content:center;
        text-align:center;
        font:var(--body-x-small);
        background:var(--surface-neutral-t3-low);
      ">
            <ng-content></ng-content>

            @if (!hasProjectedContent) {
                @if (label()) {
                    <span>{{ label() }}</span>
                } @else {
                    <span [ui-txt]="'labels-large'">{{ widthLabel }}</span>
                    <span>&times;</span>
                    <span [ui-txt]="'labels-large'">{{ heightLabel }}</span>
                }
            }
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIExamplePlaceholder implements AsSignal<ExamplePlaceholderProps> {
    readonly width = input<ExamplePlaceholderProps['width']>('100%');
    readonly height = input<ExamplePlaceholderProps['height']>('100px');
    readonly label = input<ExamplePlaceholderProps['label']>();

    readonly widthCss = computed(() => this.width() ?? '100%');
    readonly heightCss = computed(() => this.height() ?? '100px');

    /** Angular doesn't give a cheap "has ng-content" flag; treat empty label + default slot as dims. */
    readonly hasProjectedContent = false;

    get widthLabel(): string {
        return this.width() ?? '100%';
    }

    get heightLabel(): string {
        return this.height() ?? '100px';
    }
}
