import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    ViewEncapsulation,
    computed,
    input,
    output,
    signal,
    viewChildren,
} from '@angular/core';
import { AsSignal } from '../../types/common';
import { uniqueId } from '@ui/utils/random';

export type OTPSize = 'large' | 'medium' | 'small';

export interface OTPInputProps {
    id?: string;
    name?: string;
    length?: number;
    size?: OTPSize;
    defaultValue?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    invalid?: boolean;
    alphanumeric?: boolean;
    secure?: boolean;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    ariaErrorMessage?: string;
}

/**
 * A one-time code input that splits the value into individual digit fields.
 *
 * ```html
 * <ui-otp-input
 *   [length]="6"
 *   [defaultValue]="''"
 *   (change)="onCodeComplete($event)" />
 * ```
 *
 * @name OTPInput
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-otp-input',
    imports: [CommonModule],
    template: `
        <div
            data-bspk="otp-input"
            role="group"
            [attr.aria-labelledby]="id() + '-label'"
            [attr.data-disabled]="disabled() ? '' : null"
            [attr.data-invalid]="invalid() ? '' : null"
            [attr.data-readonly]="readOnly() ? '' : null"
            [attr.data-secure]="secure() ? '' : null"
            [attr.data-size]="size()">
            <span
                data-digits
                role="group"
                (mousedown.capture)="onMouseDownCapture($event)"
                style="display:flex; gap:var(--spacing-sizing-02);">
                @for (i of indices(); track i) {
                    <input
                        #digitInput
                        data-digit
                        [attr.data-index]="i"
                        [attr.data-main-input]="true"
                        [attr.id]="i === 0 ? id() : null"
                        [attr.name]="i === 0 ? name() : name() ? name() + '-' + i : null"
                        [attr.aria-label]="(ariaLabel() || 'OTP input') + ' digit ' + (i + 1)"
                        [attr.aria-describedby]="i === 0 ? ariaDescribedBy() || null : null"
                        [attr.aria-errormessage]="i === 0 ? ariaErrorMessage() || null : null"
                        [attr.aria-invalid]="i === 0 && invalid() ? 'true' : null"
                        [disabled]="disabled()"
                        [readOnly]="readOnly()"
                        [required]="required()"
                        [attr.inputmode]="alphanumeric() ? 'text' : 'numeric'"
                        [attr.maxLength]="1"
                        [attr.autocomplete]="'off'"
                        [tabIndex]="canBeFocused(i) ? 0 : -1"
                        [type]="secure() ? 'password' : 'text'"
                        [value]="values()[i] || ''"
                        (focus)="selectAll($event)"
                        (input)="onInput(i, $event)"
                        (keydown)="onKeydown(i, $event)"
                        (paste)="onPaste(i, $event)" />
                }
            </span>

            @if (secure()) {
                <span
                    data-digits
                    data-secure-dots
                    style="display:flex; gap:var(--spacing-sizing-02); margin-top:var(--spacing-sizing-02);">
                    @for (i of indices(); track i) {
                        <span data-dot>
                            {{ (values()[i] || '').trim() ? '•' : '' }}
                        </span>
                    }
                </span>
            }
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIOTPInput implements AsSignal<OTPInputProps> {
    change = output<string>();

    readonly id = input<string>(uniqueId('otp-input'));
    readonly name = input.required<string | undefined>();

    readonly length = input<number>(6);
    readonly size = input<OTPSize>('medium');

    readonly defaultValue = input<string>('');
    readonly disabled = input<boolean>(false);
    readonly readOnly = input<boolean>(false);
    readonly required = input<boolean>(false);
    readonly invalid = input<boolean>(false);
    readonly alphanumeric = input<boolean>(false);
    readonly secure = input<boolean>(false);

    readonly ariaLabel = input<string>('OTP input');
    readonly ariaDescribedBy = input<string | undefined>();
    readonly ariaErrorMessage = input<string | undefined>();

    readonly inputs = viewChildren<ElementRef<HTMLInputElement>>('digitInput');

    readonly values = computed(() => (this._values().length ? this._values() : (this.defaultValue() || '').split('')));
    readonly indices = computed(() => Array.from({ length: this.length() }, (_, i) => i));

    private readonly _values = signal<string[]>([]);
    trackByIndex = (_: number, i: number) => i;

    onMouseDownCapture(event: Event) {
        const t = event.target as HTMLElement | null;
        if (t?.tagName !== 'INPUT') {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    selectAll(event: FocusEvent) {
        (event.target as HTMLInputElement | null)?.select?.();
    }

    onInput(index: number, event: Event) {
        const inputEl = event.target as HTMLInputElement;
        const digitAdded = inputEl.value;

        const prev = [...this.values()];
        prev[index] = digitAdded;
        this.setValues(prev);

        if (digitAdded) this.focusIndex(index + 1);
    }

    onKeydown(index: number, event: KeyboardEvent) {
        const key = event.key;

        // enforce numeric when !alphanumeric
        if (
            key.length === 1 &&
            !event.ctrlKey &&
            !event.metaKey &&
            !event.altKey &&
            !event.shiftKey &&
            !this.alphanumeric() &&
            !/^[0-9]$/.test(key)
        ) {
            event.preventDefault();
            return;
        }

        if (key === 'Backspace') {
            const prev = [...this.values()];
            prev[index] = '';
            this.setValues(prev);
            this.focusIndex(Math.max(0, index - 1));
            event.preventDefault();
            return;
        }

        if (key === 'ArrowLeft' || key === 'ArrowUp') {
            this.focusIndex(Math.max(0, index - 1));
            event.preventDefault();
            return;
        }

        if (key === 'ArrowRight' || key === 'ArrowDown') {
            // if current is empty, stay
            const curVal = (this.values()[index] || '').trim();
            if (!curVal) {
                this.focusIndex(index);
            } else {
                this.focusIndex(Math.min(this.length() - 1, index + 1));
            }
            event.preventDefault();
            return;
        }
    }

    onPaste(index: number, event: ClipboardEvent) {
        const text = event.clipboardData?.getData('text') ?? '';
        if (!text) return;

        const pasted = text.split('');
        const next = [...this.values()];
        for (let i = 0; i < pasted.length; i++) {
            if (index + i < this.length()) next[index + i] = pasted[i];
        }
        this.setValues(next);

        const last = Math.min(index + pasted.length, this.length() - 1);
        this.focusIndex(last);
        event.preventDefault();
    }

    canBeFocused(index: number): boolean {
        if (index === 0) return true;
        const vals = this.values();
        if (vals[index]) return true;
        if (index === vals.filter((v) => (v || '').trim()).length) return true;
        return false;
    }

    private setValues(next: string[]) {
        this._values.set(next);
        const joined = next.join('').trim();
        if (joined.length === this.length()) this.change.emit(joined);
    }

    private focusIndex(index: number) {
        const arr = this.inputs() ?? [];
        const ref = arr[index];
        ref?.nativeElement?.focus?.();
    }
}
