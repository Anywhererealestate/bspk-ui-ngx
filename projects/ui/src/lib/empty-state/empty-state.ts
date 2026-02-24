import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { AsSignal } from '../../types/common';
import { UIButton } from '../button';
import { UIFlexDirective } from '../flex';
import { UITxtDirective } from '../txt';

export type EmptyStateBodyAlign = 'center' | 'left';

export interface EmptyStateCallToAction {
    label: string;
    size?: 'large' | 'medium' | 'small';
}

export interface EmptyStateProps {
    /** Image/icon slot (use default projection). */
    children?: unknown;
    header: string;
    body: string;
    bodyAlign?: EmptyStateBodyAlign;
    callToAction?: EmptyStateCallToAction;
}

/**
 * An empty state layout with optional header, body text, and call-to-action button.
 *
 * ```html
 * <ui-empty-state
 *   header="No results"
 *   body="Try adjusting your search or filters."
 *   [callToAction]="{ label: 'Clear filters' }"
 *   (callToActionClick)="clearFilters()" />
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
                    (click)="callToActionClick.emit()"></ui-button>
            }
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIEmptyState implements AsSignal<EmptyStateProps> {
    @Output() callToActionClick = new EventEmitter<void>();

    readonly children = input<unknown>();
    readonly header = input.required<string>();
    readonly body = input.required<string>();
    readonly bodyAlign = input<EmptyStateBodyAlign>('center');
    readonly callToAction = input<EmptyStateCallToAction | undefined>();
}
