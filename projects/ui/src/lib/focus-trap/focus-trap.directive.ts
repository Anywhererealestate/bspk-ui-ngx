import { DOCUMENT } from '@angular/common';
import { ElementRef, OnChanges, OnDestroy, input, signal, inject, model, Directive } from '@angular/core';

export interface FocusTrapProps {
    /** Enables the focus trap. */
    enabled?: boolean;
    /** When enabled, automatically focus the first focusable child. @default true */
    autoFocus?: boolean;
    /** Restore focus to previously focused element on disable. @default true */
    restoreFocus?: boolean;
}

/**
 * Utility that traps keyboard focus within its projected content when enabled.
 *
 * @example
 *     <ui-focus-trap [enabled]="true">
 *     <!-- interactive content -->
 *     <button>One</button>
 *     <button>Two</button>
 *     </ui-focus-trap>
 *
 * @name FocusTrap
 * @phase Utility
 */
@Directive({
    selector: '[ui-focus-trap]',
    standalone: true,
})
export class UIFocusTrapDirective implements OnChanges, OnDestroy {
    /** Enables the focus trap. */
    readonly enabled = model<boolean>(false, {
        alias: 'ui-focus-trap',
    });
    /** Auto-focus first focusable child on enable. @default true */
    readonly autoFocus = input<boolean>(true);
    /** Restore focus to previously focused element on disable/destroy. @default true */
    readonly restoreFocus = input<boolean>(true);

    readonly container = inject<ElementRef<HTMLElement>>(ElementRef);

    document = inject(DOCUMENT);
    private readonly bound = signal(false);
    private readonly prevFocused = signal<HTMLElement | null>(null);

    ngOnChanges() {
        const active = this.enabled();
        if (active && !this.bound()) {
            this.attach();
            if (this.autoFocus()) queueMicrotask(() => this.focusInitial());
        } else if (!active && this.bound()) {
            this.detach();
            this.restorePreviousFocus();
        }
    }

    ngOnDestroy() {
        this.detach();
        this.restorePreviousFocus();
    }

    private attach() {
        this.prevFocused.set(this.document?.activeElement as HTMLElement | null);
        this.document?.addEventListener('keydown', this.onKeyDown, true);
        this.document?.addEventListener('focusin', this.onFocusIn, true);
        this.bound.set(true);
    }

    private detach() {
        this.document?.removeEventListener('keydown', this.onKeyDown, true);
        this.document?.removeEventListener('focusin', this.onFocusIn, true);
        this.bound.set(false);
    }

    private restorePreviousFocus() {
        if (!this.restoreFocus()) return;
        const prev = this.prevFocused();
        if (prev && typeof prev.focus === 'function') {
            try {
                prev.focus();
            } catch {
                // ignore focus errors
            }
        }
        this.prevFocused.set(null);
    }

    private onKeyDown = (e: Event) => {
        if (!(e instanceof KeyboardEvent)) return;
        if (!this.enabled()) return;
        const root = this.container.nativeElement;
        if (!root) return;
        if (e.key === 'Tab') {
            const focusables = this.getFocusableElements();
            if (focusables.length === 0) {
                e.preventDefault();
                root.focus();
                return;
            }
            const active = this.document?.activeElement as HTMLElement | null;
            let index = focusables.findIndex((el) => el === active);
            if (index === -1) index = e.shiftKey ? focusables.length - 1 : 0;
            const nextIndex = e.shiftKey
                ? (index - 1 + focusables.length) % focusables.length
                : (index + 1) % focusables.length;
            e.preventDefault();
            try {
                focusables[nextIndex].focus();
            } catch {
                // ignore focus errors
            }
        }
    };

    private onFocusIn = (e: Event) => {
        if (!this.enabled()) return;
        const target = e.target as HTMLElement | null;
        const root = this.container.nativeElement;
        if (!root || !target) return;
        if (!root.contains(target)) {
            const focusables = this.getFocusableElements();
            const toFocus = focusables[0] || root;
            try {
                toFocus.focus();
            } catch {
                // ignore focus errors
            }
        }
    };

    private focusInitial() {
        const root = this.container.nativeElement;
        const focusables = this.getFocusableElements();
        const toFocus = focusables[0] || root;
        try {
            toFocus.focus();
        } catch {
            // ignore focus errors
        }
    }

    private getFocusableElements(): HTMLElement[] {
        const root = this.container.nativeElement;
        if (!root) return [];
        const selector = [
            'a[href]',
            'button:not([disabled])',
            'input:not([disabled])',
            'textarea:not([disabled])',
            'select:not([disabled])',
            '[tabindex]:not([tabindex="-1"])',
        ].join(',');
        const nodes = Array.from(root.querySelectorAll<HTMLElement>(selector));
        return nodes.filter((el) => this.isFocusable(el));
    }

    private isFocusable(el: HTMLElement): boolean {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        const notHidden = style.visibility !== 'hidden' && style.display !== 'none';
        const inDoc = !!el.ownerDocument && !!el.ownerDocument.documentElement.contains(el);
        const enabled = !(el as HTMLButtonElement).disabled;
        const inBounds = rect.width > 0 && rect.height > 0;
        return notHidden && inDoc && enabled && inBounds;
    }
}
