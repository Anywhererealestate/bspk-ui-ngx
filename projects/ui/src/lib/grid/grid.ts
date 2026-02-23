import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core';

export type GridColumns = (number | string)[] | number;
export type GridSizing = string | '0' | 'auto';

export interface GridProps {
    columns?: GridColumns;
    gap?: GridSizing; // React used string values like "4","8","12"... or "auto"
    minColumnWidth?: string;
}

/** Inline React `numToSizingVar` logic. */
function numToSizingVar(numStr?: string): string | undefined {
    if (numStr === undefined || ['auto', '0'].includes(numStr)) return numStr;
    // Expect pixel step strings like "4","8","12"... -> /4 -> 1,2,3 -> pad2
    const n = Number(numStr);
    if (!Number.isFinite(n) || n <= 0 || n % 4 !== 0) return undefined;
    const token = String(n / 4).padStart(2, '0');
    return `var(--spacing-sizing-${token})`;
}

@Component({
    standalone: true,
    selector: 'ui-grid',
    imports: [CommonModule],
    template: `
        <div
            data-bspk-utility="grid"
            style="width:100%; display:grid;"
            [style.gridTemplateColumns]="gridTemplateColumns()"
            [style.gap]="gapCss()">
            <ng-content></ng-content>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIGrid {
    readonly columns = input<GridColumns>(1);
    readonly gap = input<GridSizing | undefined>();
    readonly minColumnWidth = input<string>('auto');

    readonly gridTemplateColumns = computed(() => {
        const min = this.minColumnWidth();
        const cols = this.columns();

        if (Array.isArray(cols)) {
            const mapped = cols.map((w) => (typeof w === 'string' ? w : `${w}fr`)).join(' ') || 'auto';
            return mapped;
        }

        return `repeat(${cols}, minmax(${min}, 1fr))`;
    });

    readonly gapCss = computed(() => {
        const g = this.gap();
        if (g == null) return undefined;
        const v = numToSizingVar(String(g));
        return v ?? String(g); // allow raw css values as fallback
    });
}
