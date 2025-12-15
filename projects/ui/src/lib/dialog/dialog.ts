import { FocusTrapFactory, FocusTrap } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    ElementRef,
    ViewChild,
    ViewEncapsulation,
    ChangeDetectorRef,
} from '@angular/core';
import { UIPortalDirective } from '../portal';
import { UIScrim } from '../scrim/scrim';

export type DialogPlacement = 'bottom' | 'center' | 'left' | 'right' | 'top';

/**
 * Dialogs display important information that users need to acknowledge. They appear over the interface and block
 * further interactions until an action is selected.
 *
 * This is a low-level component that provides the container and functionality for dialogs. You will typically want to
 * use a higher-level component that provides a consistent UI and behavior for dialogs such as Modal.
 *
 * @name Dialog
 * @phase Utility
 */
@Component({
    selector: 'ui-dialog',
    standalone: true,
    imports: [CommonModule, UIPortalDirective, UIScrim],
    template: `
        @if (open) {
            <div
                [ui-portal]
                data-bspk="dialog"
                [attr.data-bspk-owner]="owner || null"
                [attr.data-placement]="placement"
                [attr.id]="id || null"
                role="presentation"
                #dialogRoot>
                <div data-dialog-box [attr.data-width-full]="widthFull ? 'true' : null" tabindex="-1" #boxRef>
                    <ng-content></ng-content>
                </div>
            </div>
            <ui-scrim [visible]="showScrim !== false" owner="dialog" (click)="handleScrimClick()"></ui-scrim>
        }
    `,
    styleUrls: ['./dialog.scss'],
    host: {
        style: 'display: contents;',
    },
    encapsulation: ViewEncapsulation.None,
})
export class UIDialog implements OnChanges, OnDestroy {
    /** The content of the dialog. */
    // Content is projected via <ng-content>

    /** A ref to the dialog element. */
    @Input() innerRef?: (el: HTMLDivElement | null) => void;
    /**
     * If the dialog should appear.
     *
     * @default false
     */
    @Input() open = false;
    /**
     * Function to call when the dialog is closed.
     *
     * @required
     */
    @Output() onClose = new EventEmitter<void>();
    /**
     * The placement of the dialog on the screen.
     *
     * @default center
     */
    @Input() placement: DialogPlacement = 'center';
    /**
     * Whether the dialog should have a scrim behind it.
     *
     * @default true
     */
    @Input() showScrim = true;
    /**
     * If the dialog should take the full width of the screen.
     *
     * @default false
     */
    @Input() widthFull = false;
    /**
     * If focus trapping should be disabled. Generally this should not be disabled as dialogs should always trap focus.
     *
     * @default false
     */
    @Input() disableFocusTrap = false;
    /** Owner identifier for tracking/analytics. */
    @Input() owner?: string;
    /** Optional DOM container to render into (via Portal). Defaults to `document.body`. */
    @Input() container?: HTMLElement | null;
    /** Id for the dialog element. */
    @Input() id?: string;

    @ViewChild('boxRef', { static: false }) boxRef?: ElementRef<HTMLDivElement>;
    @ViewChild('dialogRoot', { static: false }) dialogRoot?: ElementRef<HTMLDivElement>;

    private focusTrap?: FocusTrap;

    constructor(
        private focusTrapFactory: FocusTrapFactory,
        private changeDetector: ChangeDetectorRef,
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        this.changeDetector.detectChanges();
        if (changes['open']) {
            this.attach();
        } else {
            this.detach();
        }
    }

    attach() {
        if (typeof document === 'undefined') return;
        document.documentElement.style.overflow = 'hidden';
        document.addEventListener('keydown', this.handleKeydown);

        // Focus trap setup
        const el = this.boxRef?.nativeElement;
        if (el && !this.disableFocusTrap) {
            this.focusTrap = this.focusTrapFactory.create(el);
            try {
                this.focusTrap.focusInitialElementWhenReady();
            } catch {
                el.focus();
            }
        }
    }

    detach() {
        if (typeof document === 'undefined') return;
        document.documentElement.style.overflow = '';
        document.removeEventListener('keydown', this.handleKeydown);

        if (this.focusTrap) {
            this.focusTrap.destroy();
            this.focusTrap = undefined;
        }
    }

    emitClose() {
        this.onClose.emit();
    }

    ngOnDestroy() {
        this.detach();
    }

    handleKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && this.open) {
            this.emitClose();
        }
    };

    handleScrimClick() {
        this.emitClose();
    }
}

/** Copyright 2025 Anywhere Real Estate - CC BY 4.0 */
