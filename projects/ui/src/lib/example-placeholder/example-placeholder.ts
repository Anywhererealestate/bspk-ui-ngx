import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core';
import { UITxtDirective } from '../txt';

export type ExamplePlaceholderDim = number | string;

export interface ExamplePlaceholderProps {
    width?: ExamplePlaceholderDim;
    height?: ExamplePlaceholderDim;
    label?: string;
}

/** Inline equivalent of React `dimension()` helper. */
function dimension(value: ExamplePlaceholderDim): string {
    return typeof value === 'number' ? `${value}px` : value;
}

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
export class UIExamplePlaceholder {
    readonly width = input<ExamplePlaceholderDim>('100%');
    readonly height = input<ExamplePlaceholderDim>(100);
    readonly label = input<string | undefined>();

    readonly widthCss = computed(() => dimension(this.width()));
    readonly heightCss = computed(() => dimension(this.height()));

    /** Angular doesn't give a cheap "has ng-content" flag; treat empty label + default slot as dims. */
    readonly hasProjectedContent = false;

    get widthLabel(): string {
        return dimension(this.width());
    }

    get heightLabel(): string {
        return dimension(this.height());
    }
}
