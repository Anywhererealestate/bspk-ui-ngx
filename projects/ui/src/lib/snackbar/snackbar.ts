import { Component, ViewEncapsulation, input, output, effect, ElementRef, viewChild, model } from '@angular/core';
import { UITooltipDirective } from '@ui/tooltip';
import { AsSignal, CommonProps } from '../../types/common';
import { uniqueId } from '../../utils/random';
import { UIButton } from '../button';
import { UIFocusTrapDirective } from '../focus-trap';
import { UIPortalDirective } from '../portal';

export interface SnackbarProps {
    id: CommonProps['id'];
    /** Text to be shown in the snackbar. */
    text: string;
    /** Whether to show a close button. @default true */
    closeButton?: boolean;
    /** Label for the close button. @default Dismiss */
    closeButtonLabel?: string;
    /** Optional icon content (use snackbar-icon slot for projection). */
    icon?: unknown;
    /** Time in ms after which the snackbar will auto dismiss. */
    timeout?: number;
    /** If the snackbar is open. @default false */
    open?: boolean;
    /** If focus trapping should be disabled. @default false */
    disableFocusTrap?: boolean;
}

/**
 * Snackbars provide brief feedback about user actions.
 *
 * ```html
 * <ui-snackbar text="Changes saved." [(open)]="open" [closeButton]="true" />
 * ```
 *
 * @name Snackbar
 * @phase Dev
 */
@Component({
    selector: 'ui-snackbar',
    standalone: true,
    imports: [UIPortalDirective, UIFocusTrapDirective, UIButton, UITooltipDirective],
    template: `
        @if (open()) {
            <div
                #boxRef
                [attr.aria-live]="'off'"
                [attr.id]="id() ?? generatedId"
                data-bspk="snackbar"
                [ui-portal]="null">
                <div [ui-focus-trap]="!disableFocusTrap()">
                    <div data-snackbar-content role="alert">
                        <div data-snackbar-icon-text>
                            @if (iconSlot()) {
                                <span aria-hidden="true" data-snackbar-icon>
                                    <ng-content select="[snackbar-icon]"></ng-content>
                                </span>
                            }
                            <span [ui-tooltip]="{ truncated: true }" data-label>{{ text() }}</span>
                        </div>
                        @if (closeButton()) {
                            <ui-button
                                [label]="closeButtonLabel()"
                                variant="tertiary"
                                (click)="open.set(false); onClose.emit()">
                            </ui-button>
                        }
                    </div>
                </div>
            </div>
        }
    `,
    styleUrl: './snackbar.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UISnackbar implements AsSignal<SnackbarProps> {
    readonly onClose = output<void>();

    readonly text = input.required<string>();
    readonly closeButton = input<boolean>(true);
    readonly closeButtonLabel = input<string>('Dismiss');
    readonly open = model<boolean>(false);
    readonly timeout = input<number | undefined>(undefined);
    readonly disableFocusTrap = input<boolean>(false);
    readonly id = input<string | undefined>(undefined);
    readonly icon = input<unknown>(undefined);

    readonly boxRef = viewChild<ElementRef<HTMLDivElement>>('boxRef');

    protected readonly generatedId = uniqueId('snackbar');

    private timeoutId: ReturnType<typeof setTimeout> | null = null;

    constructor() {
        effect(() => {
            const isOpen = this.open();
            const timeout = this.timeout();
            if (isOpen && timeout != null) {
                this.timeoutId = setTimeout(() => {
                    this.open.set(false);
                    this.onClose.emit();
                    this.timeoutId = null;
                }, timeout);
            }
            return () => {
                if (this.timeoutId) {
                    clearTimeout(this.timeoutId);
                    this.timeoutId = null;
                }
            };
        });
    }

    /** Whether icon slot has content (simplified: we don't detect projection). */
    iconSlot(): boolean {
        return false;
    }
}
