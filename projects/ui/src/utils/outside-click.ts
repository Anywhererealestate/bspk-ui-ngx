export interface OutsideClickUtilityProps {
    /** The elements to monitor for outside clicks. */
    elements: HTMLElement[];
    /** The callback function to execute on outside click. */
    callback: (event?: KeyboardEvent | MouseEvent) => void;
    /**
     * Whether the outside click detection is disabled.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether to handle 'Tab' key presses as outside clicks.
     *
     * @default false
     */
    handleTabs?: boolean;
}

/** Utility to detect clicks outside specified elements and execute a callback. */
export class OutsideClickUtility {
    private elements: HTMLElement[] | undefined;
    private callback: ((event?: KeyboardEvent | MouseEvent) => void) | undefined;
    private disabled = false;
    private handleTabs = false;

    setProps(next: Partial<OutsideClickUtilityProps>) {
        if ('elements' in next) this.elements = next.elements;
        if ('callback' in next) this.callback = next.callback;
        if ('disabled' in next) this.disabled = !!next.disabled;
        if ('handleTabs' in next) this.handleTabs = !!next.handleTabs;

        if (!this.elements?.length) {
            this.destroy();
        }
    }

    init(props: OutsideClickUtilityProps) {
        if (typeof document === 'undefined') return;

        this.setProps(props);

        if (this.elements?.length) {
            document.addEventListener('mousedown', this.handleClickOutside);
            document.addEventListener('keydown', this.handleOutsideTab);
        }
    }

    destroy() {
        if (typeof document === 'undefined') return;

        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keydown', this.handleOutsideTab);
    }

    private handleClickOutside = (event: MouseEvent) => {
        const { elements, callback, disabled } = this;
        if (disabled || elements?.some?.((element) => element?.contains?.(event.target as Node))) return;
        callback?.(event);
    };

    private handleOutsideTab = (event: KeyboardEvent) => {
        const { elements, callback, disabled, handleTabs } = this;

        if (!handleTabs || event.key !== 'Tab' || disabled) return;

        setTimeout(() => {
            if (elements?.some?.((element) => element?.contains?.(document.activeElement))) return;
            callback?.(event);
        }, 0);
    };
}
