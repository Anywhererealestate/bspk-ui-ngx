import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { UIButton } from '../button';
import { UIFlexDirective } from '../flex';
import { UITxtDirective } from '../txt';

export type EmptyStateBodyAlign = 'center' | 'left';

export interface EmptyStateCallToAction {
    label: string;
    size?: 'large' | 'medium' | 'small';
}

export interface EmptyStateProps {
    header: string;
    body: string;
    bodyAlign?: EmptyStateBodyAlign;
    callToAction?: EmptyStateCallToAction;
}

/** React uses: Flex + Txt + optional Button. Icon usage: none. */
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
export class UIEmptyState {
    @Output() callToActionClick = new EventEmitter<void>();

    readonly header = input.required<string>();
    readonly body = input.required<string>();
    readonly bodyAlign = input<EmptyStateBodyAlign>('center');
    readonly callToAction = input<EmptyStateCallToAction | undefined>();
}
