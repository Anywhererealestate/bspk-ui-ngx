import { computed, effect, signal } from '@angular/core';
import { KeyboardEventCode } from './keyboard';
import { keydownHandler, KeysCallback } from './keydownHandler';

export type ArrowKeyNames = Extract<KeyboardEventCode, `Arrow${string}`>;

const ARROW_KEYS: ArrowKeyNames[] = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

export interface ArrowKeyNavigationCallbackParams {
    key: ArrowKeyNames;
    event: KeyboardEvent;
    activeElementId: string | null;
    increment: number;
}

export interface ArrowNavigationProps {
    /**
     * An array of string IDs representing the navigable elements. These IDs should correspond to the `id` attributes of
     * the elements in the DOM. Ensure the elements are not disabled.
     */
    ids: string[];
    /**
     * An optional callback function that is invoked when an arrow key is pressed. This function receives the key name,
     * the keyboard event, and the next active element ID. If the function returns `true`, the default navigation
     * behavior is prevented; if it returns `false` or is not provided, the default behavior proceeds.
     */
    callback?: (params: ArrowKeyNavigationCallbackParams) => boolean;
    /** Optional configuration to set navigation direction increments. */
    increments?: Record<ArrowKeyNames, number>;
    /**
     * The ID of the element that should be active by default. If not provided, the first ID in the `ids` array will be
     * used.
     */
    defaultActiveId?: string | null;
}

/**
 * A hook to manage arrow key navigation for a list of elements.
 *
 * @example
 *     const { activeElementId, setActiveElementId, arrowKeyCallbacks } = useArrowNavigation(['id1', 'id2', 'id3']);
 *
 * @returns An object containing:
 *
 *   - `activeElementId`: The ID of the currently active element.
 *   - `setActiveElementId`: A function to manually set the active element ID.
 *   - `arrowKeyCallbacks`: An object with callback functions for arrow key navigation.
 */
export class ArrowNavigationUtility {
    readonly ids = signal<string[]>([]);
    readonly activeElementId = signal<string | null>(null);
    readonly defaultActiveId = signal<string | null>(null);
    readonly increments = signal<Record<ArrowKeyNames, number>>({
        ArrowLeft: -1,
        ArrowRight: 1,
        ArrowUp: -1,
        ArrowDown: 1,
    });

    callback?: (params: ArrowKeyNavigationCallbackParams) => boolean;

    readonly arrowKeyCallbacks = computed(() => {
        return Object.fromEntries(
            ARROW_KEYS.map((key) => [
                key,
                (event: KeyboardEvent) => {
                    let nextIndex = 0;
                    let currentIndex = 0;
                    let nextId = this.ids()[nextIndex];
                    const increment = this.increments()[key];

                    if (this.activeElementId()) {
                        currentIndex = this.ids().indexOf(this.activeElementId()!);
                        nextIndex = (currentIndex + increment + this.ids().length) % this.ids().length;
                        nextId = this.ids()[nextIndex];
                    }

                    if (
                        typeof this.callback === 'function' &&
                        this.callback({ key, event, activeElementId: nextId, increment }) === false
                    )
                        return;
                    event.preventDefault();
                    this.setActiveElementId(nextId);
                },
            ]),
        ) as KeysCallback;
    });

    constructor() {
        effect(() => {
            const ids = this.ids();
            const activeElementId = this.activeElementId();

            // If the active element is not in the list, reset the first ID as active
            if (activeElementId && !ids.includes(activeElementId)) {
                this.setActiveElementId(ids[0] || null);
            }
        });
    }

    setActiveElementId(id: string | null) {
        this.activeElementId.set(id);
        document.querySelector(`[id="${id}"]`)?.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth',
            inline: 'nearest',
        });
    }

    init({
        ids = [],
        callback,
        increments = {
            ArrowLeft: -1,
            ArrowRight: 1,
            ArrowUp: -1,
            ArrowDown: 1,
        },
        defaultActiveId,
    }: ArrowNavigationProps) {
        this.ids.set(ids);
        this.callback = callback;
        this.increments.set(increments);
        this.defaultActiveId.set(defaultActiveId || null);
        this.activeElementId.set(defaultActiveId || null);
    }

    handleKeydown(event: KeyboardEvent) {
        keydownHandler(this.arrowKeyCallbacks(), {
            preventDefault: true,
            stopPropagation: true,
        })(event);
    }
}
