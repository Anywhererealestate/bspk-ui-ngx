import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, input, output, effect, ElementRef, viewChild, model } from '@angular/core';
import { UITooltipDirective } from '@ui/tooltip';
import { BspkIcon } from '../../types/bspk-icon';
import { AsSignal, CommonProps } from '../../types/common';
import { uniqueId } from '../../utils/random';
import { UIButton } from '../button';
import { UIFocusTrapDirective } from '../focus-trap';
import { UIIcon } from '../icon';
import { UIPortalDirective } from '../portal';

export interface SnackbarProps {
    id?: CommonProps['id'];

    /**
     * Text to be shown in the snackbar
     *
     * @required
     */
    text: string;
    /**
     * Whether to show a close button on the snackbar.
     *
     * Since there is no default timeout, this is true by default. You can provide a timeout to auto-dismiss the
     * snackbar in addition to the close button.
     *
     * @default true
     */
    closeButton?: boolean;
    /**
     * Label for the close button.
     *
     * @default Dismiss
     */
    closeButtonLabel?: string;
    /** Optional icon content (use snackbar-icon slot for projection). */
    icon?: BspkIcon;
    /**
     * Callback when the snackbar is dismissed. In Angular, subscribe to the (close) output.
     *
     * @required
     */
    onClose: () => void;
    /**
     * Time in milliseconds after which the snackbar will auto dismiss.
     *
     * If no timeout is provided, and closeButton is set to false the snackbar will not be dismissable.
     */
    timeout?: number;
    /**
     * If the snackbar is open or not.
     *
     * @default false
     */
    open?: boolean;
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
    imports: [CommonModule, UIPortalDirective, UIFocusTrapDirective, UIButton, UIIcon, UITooltipDirective],
    template: `
        @if (open()) {
            <div
                #boxRef
                [attr.aria-live]="'off'"
                [attr.id]="id() ?? generatedId"
                data-bspk="snackbar"
                [ui-portal]="null">
                <div [ui-focus-trap]="true">
                    <div data-snackbar-content role="alert">
                        <div data-snackbar-icon-text>
                            @if (iconSlot()) {
                                <span aria-hidden="true" data-snackbar-icon>
                                    <ui-icon [icon]="icon()!"></ui-icon>
                                    <ng-content select="[snackbar-icon]"></ng-content>
                                </span>
                            }
                            <span [ui-tooltip]="{ truncated: true }" data-label>{{ text() }}</span>
                        </div>
                        @if (closeButton()) {
                            <ui-button
                                [label]="closeButtonLabel() || 'Dismiss'"
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

    readonly text = input.required<SnackbarProps['text']>();
    readonly closeButton = input<SnackbarProps['closeButton']>(true);
    readonly closeButtonLabel = input<SnackbarProps['closeButtonLabel']>('Dismiss');
    readonly open = model<SnackbarProps['open']>(false);
    readonly timeout = input<SnackbarProps['timeout']>();
    readonly id = input<SnackbarProps['id']>();
    readonly icon = input<SnackbarProps['icon']>();

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

    iconSlot(): boolean {
        return !!this.icon();
    }
}
