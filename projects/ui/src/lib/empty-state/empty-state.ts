import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';
import { AsSignal, CallToActionButton } from '../../types/common';
import { UIButton } from '../button';
import { UIFlexDirective } from '../flex';
import { UITxtDirective } from '../txt';

export type EmptyStateBodyAlign = 'center' | 'left';

export interface EmptyStateCallToAction {
    label: string;
    size?: 'large' | 'medium' | 'small';
}

export interface EmptyStateProps {
    /** Projected content (e.g. ng-content). */
    children?: unknown;
    /**
     * The header of the empty state.
     *
     * @required
     */
    header: string;
    /**
     * The body of the empty state.
     *
     * @type multiline
     * @required
     */
    body: string;
    /**
     * The text alignment of the body.
     *
     * @default center
     */
    bodyAlign?: 'center' | 'left';
    /**
     * Optional CallToActionButton properties.
     *
     * @type CallToActionButton
     */
    callToAction?: CallToActionButton;
}

/**
 * An empty state layout with optional header, body text, and call-to-action button.
 *
 * ```html
 * <ui-empty-state
 *     header="No results"
 *     body="Try adjusting your search or filters."
 *     [callToAction]="{ label: 'Clear filters' }"
 *     (callToActionClick)="clearFilters()" />
 * ```
 *
 * ```typescript
 *     clearFilters() {
 *         console.log('clearFilters');
 *     }
 * ```
 *
 * @name EmptyState
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-empty-state',
    imports: [CommonModule, UIFlexDirective, UITxtDirective, UIButton],
    template: `
        <div data-bspk="empty-state" [ui-flex]="{ align: 'center', direction: 'column', gap: '16' }">
            <ng-content></ng-content>

            <div
                [ui-flex]="{ align: bodyAlign() === 'left' ? 'flex-start' : 'center', direction: 'column', gap: '4' }"
                [style.textAlign]="bodyAlign()">
                <span ui-txt="heading-h5">{{ header() }}</span>
                <span ui-txt="body-base">{{ body() }}</span>
            </div>

            @if (callToAction(); as cta) {
                <ui-button
                    [label]="cta.label"
                    [size]="cta.size || 'medium'"
                    [variant]="'primary'"
                    (click)="callToAction()!.onClick?.()"></ui-button>
            }
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIEmptyState implements AsSignal<EmptyStateProps> {
    readonly children = input<EmptyStateProps['children']>();
    readonly header = input.required<EmptyStateProps['header']>();
    readonly body = input.required<EmptyStateProps['body']>();
    readonly bodyAlign = input<EmptyStateProps['bodyAlign']>('center');
    readonly callToAction = input<EmptyStateProps['callToAction']>();
}
