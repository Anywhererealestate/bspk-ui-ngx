import { CommonModule } from '@angular/common';
import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    OnChanges,
    ChangeDetectorRef,
    SimpleChanges,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { UIButton } from '../button/button';
import { UIDialog } from '../dialog/dialog';
import { IconClose } from '../icons/close';

export type ButtonFormat = 'horizontal' | 'vertical';

export interface ModalCallToAction {
    label: string;
    onClick: () => void;
    destructive?: boolean;
}

/**
 * Modals display important information that users need to acknowledge. They appear over the interface and block further
 * interactions until an action is selected. Modal is a wrapper around the Dialog component that provides a header and
 * footer for the dialog.
 *
 * @example
 *     <!-- Angular example -->
 *     <ui-modal
 *     [description]="'Example description'"
 *     [header]="'Example header'"
 *     [open]="open"
 *     (onClose)="open = false"
 *     >
 *     Example Modal
 *     </ui-modal>
 *
 * @name Modal
 * @phase Stable
 */
@Component({
    selector: 'ui-modal',
    standalone: true,
    imports: [CommonModule, UIDialog, UIButton],
    template: `
        <ui-dialog
            [container]="container"
            [disableFocusTrap]="!!disableFocusTrap"
            [id]="id"
            [open]="open"
            [owner]="owner"
            [showScrim]="true"
            [placement]="'center'"
            (onClose)="handleClose()"
            [innerRef]="innerDialogRef">
            <div
                data-bspk="modal"
                #modalRoot
                style="visibility: hidden"
                [attr.data-modal-root]="true"
                [attr.data-screen-size]="'small'">
                <div data-modal-header>
                    <div data-dialog-title>{{ header }}</div>
                    <ui-button
                        [icon]="IconClose"
                        [iconOnly]="true"
                        label="close"
                        variant="tertiary"
                        (onClick)="handleClose()"></ui-button>
                </div>
                <div data-modal-main><ng-content>+</ng-content></div>
                @if (callToAction || cancelButton) {
                    <div [attr.data-button-format]="buttonFormat" data-modal-footer>
                        @if (callToAction) {
                            <ui-button
                                [label]="callToAction.label"
                                [variant]="'primary'"
                                [size]="'medium'"
                                [destructive]="callToAction.destructive || false"
                                (onClick)="callToAction.onClick()"></ui-button>
                        }
                        @if (callToAction && cancelButton) {
                            <ui-button
                                [label]="cancelButtonLabel"
                                [variant]="'tertiary'"
                                [size]="'medium'"
                                (onClick)="handleClose()"></ui-button>
                        }
                    </div>
                }
            </div>
        </ui-dialog>
    `,
    styleUrls: ['./modal.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[attr.aria-description]': 'description',
        '[attr.aria-label]': 'header',
        '[attr.data-bspk-owner]': 'owner || null',
    },
})
export class UIModal implements OnChanges {
    /**
     * Modal header.
     *
     * @example
     *     Change your email
     *
     * @required
     */
    @Input() header!: string;

    /**
     * Modal description. Used for the
     * [aria-description](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
     * attribute.
     *
     * @example
     *     Email change confirmation.
     *
     * @required
     */
    @Input() description!: string;

    /**
     * Whether to show the cancel button in the footer.
     *
     * Providing a string will set the label of the cancel button.
     *
     * @default false
     */
    @Input() cancelButton?: boolean | string;

    /**
     * The call to action button to display in the footer of the modal.
     *
     * @example
     *     {
     *     label: 'Confirm',
     *     onClick: () => console.log('Confirm clicked'),
     *     }
     */
    @Input() callToAction?: ModalCallToAction;

    /**
     * The format of the buttons in the footer. Vertical applies only on screen widths less than or equal to 640px.
     *
     * @default horizontal
     */
    @Input() buttonFormat: ButtonFormat = 'horizontal';

    /** When true, the modal is visible. */
    @Input() open = false;
    /** Owner identifier for tracking/analytics. */
    @Input() owner?: string;
    /** Optional DOM container to render into (via Dialog->Portal). Defaults to `document.body`. */
    @Input() container?: HTMLElement | null;
    /** Disable focus trap inside the modal. */
    @Input() disableFocusTrap?: boolean;
    /** Id for the modal root element. */
    @Input() id?: string;

    /** Emitted when the modal requests to close. */
    @Output() onClose = new EventEmitter<void>();

    @ViewChild('modalRoot', { static: false }) modalRoot?: ElementRef<HTMLDivElement>;

    IconClose = IconClose;

    modalRefs:
        | {
              dialogBox: HTMLElement;
              modal: HTMLElement;
          }
        | undefined;

    constructor(private changeDetector: ChangeDetectorRef) {}

    get cancelButtonLabel(): string {
        return typeof this.cancelButton === 'string' ? this.cancelButton : 'Cancel';
    }

    innerDialogRef = (node: HTMLElement | null) => {
        if (!node) return;
        this.modalRefs = {
            dialogBox: node.querySelector<HTMLDivElement>('[data-dialog-box]')!,
            modal: node.querySelector<HTMLDivElement>('[data-bspk="modal"]')!,
        };
        this.onResize();
    };

    handleClose(): void {
        this.onClose.emit();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.changeDetector.detectChanges();
        if (changes['open']) {
            this.onOpenChange(changes['open'].currentValue);
        }
    }

    onResize = () => {
        if (!this.modalRefs) return;
        const { dialogBox, modal } = this.modalRefs;

        if (!dialogBox || !modal) return;
        modal.style.height = `${dialogBox.offsetHeight}px`;
        modal.style.visibility = '';
    };

    onOpenChange(open: boolean) {
        if (open) {
            document.addEventListener('resize', this.onResize);
            this.onResize();
        } else {
            document.removeEventListener('resize', this.onResize);
        }
    }

    onDestroy() {
        this.onOpenChange(false);
    }
}

/** Copyright 2025 Anywhere Real Estate - CC BY 4.0 */
