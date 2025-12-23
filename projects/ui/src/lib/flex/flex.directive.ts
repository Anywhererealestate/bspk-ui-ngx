import { Directive, ElementRef, computed, input } from '@angular/core';

export type UIFlexJustify =
    | 'around'
    | 'between'
    | 'center'
    | 'end'
    | 'evenly'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start';

export type UIFlexAlign = 'baseline' | 'center' | 'end' | 'flex-end' | 'flex-start' | 'start' | 'stretch';

/**
 * Apply flexbox layout to an element.
 *
 * Usage examples: <div uiFlex></div> <div [uiFlex]="'inline'" direction="column" justify="between" align="center"
 * wrap="wrap" gap="8px"></div>
 */
@Directive({
    selector: '[ui-flex]',
    standalone: true,
    host: {
        '[style]': 'computedStyle()',
    },
})
export class UIFlexDirective {
    readonly computedStyle = computed(() => ({
        display: 'flex',
        flexDirection: this.direction(),
        justifyContent: this.normalizeJustify(this.justify()),
        alignItems: this.normalizeAlign(this.align()),
        flexWrap: this.wrap(),
        gap: this.gap() ?? null,
    }));

    /** Flex-direction */
    readonly direction = input<'column-reverse' | 'column' | 'row-reverse' | 'row'>('row');

    /** Justify-content Accepts CSS values or shorthands: start,end,center,between,around,evenly */
    readonly justify = input<UIFlexJustify>('flex-start');

    /** Align-items Accepts CSS values or shorthands: start,end,center,stretch,baseline */
    readonly align = input<UIFlexAlign>('stretch');

    /** Flex-wrap */
    readonly wrap = input<'nowrap' | 'wrap-reverse' | 'wrap'>('nowrap');

    /** Gap (e.g., 8px, 1rem, var(--space-2)) */
    readonly gap = input<string>();

    constructor(private elementRef: ElementRef) {}

    private normalizeJustify(v: UIFlexJustify): string {
        switch (v) {
            case 'start':
                return 'flex-start';
            case 'end':
                return 'flex-end';
            case 'between':
                return 'space-between';
            case 'around':
                return 'space-around';
            case 'evenly':
                return 'space-evenly';
            default:
                return v;
        }
    }

    private normalizeAlign(v: UIFlexAlign): string {
        switch (v) {
            case 'start':
                return 'flex-start';
            case 'end':
                return 'flex-end';
            default:
                return v;
        }
    }
}
