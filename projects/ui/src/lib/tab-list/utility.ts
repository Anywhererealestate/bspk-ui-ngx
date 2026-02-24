import { Component, model, input, computed, signal, inject, ElementRef, effect } from '@angular/core';
import { BspkIcon } from '@ui/types/bspk-icon';
import { AsSignal } from '@ui/types/common';
import { keydownHandler } from '@ui/utils/keydown-handler';
import { randomString } from '@ui/utils/random';
import { TabOption, TabListProps, TabSize } from './tab-list';

// Map Tab size to Badge size
export const TAB_BADGE_SIZES: Record<TabSize, 'small' | 'x-small'> = {
    large: 'small',
    medium: 'x-small',
    small: 'x-small',
};

/**
 * Navigation tool that organizes content across different screens and views.
 *
 * See TabGroup or SegmentedControl for examples.
 *
 * @name TabListUtility
 * @phase Dev
 */
@Component({
    selector: 'ui-tab-list-utility',
    template: '',
})
export class UITabListUtility<O extends TabOption = TabOption> implements AsSignal<TabListProps<O>> {
    readonly value = model.required<TabListProps<O>['value']>();
    readonly width = input<TabListProps<O>['width']>('hug');
    readonly label = input.required<TabListProps<O>['label']>();
    readonly options = input<TabListProps<O>['options']>([]);
    readonly id = input<TabListProps<O>['id']>(undefined);
    readonly iconsOnly = input<TabListProps<O>['iconsOnly']>(false);
    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly sizeProp = input<TabListProps<O>['size']>('medium', { alias: 'size' });
    readonly size = computed<Exclude<TabListProps<O>['size'], undefined>>(() => this.sizeProp() || 'medium');

    // Internals
    readonly componentId = computed(() => this.id() || `tab-list-${randomString(8)}`);

    readonly optionsWithIds = computed(() => {
        const prefix = this.componentId();
        return (this.options() || []).map((item, index) => ({
            ...item,
            id: item.id ? String(item.id) : `${prefix}-item-${index}`,
        }));
    });

    readonly selectedValue = computed(() => {
        const opts = this.optionsWithIds();
        const v = this.value();
        const found = opts.find((o) => o.value === v);
        return found ? found.value : opts[0]?.value;
    });

    readonly activeId = signal<string | undefined>(undefined);

    readonly focusableId = computed(() => {
        const opts = this.optionsWithIds();
        const active = this.activeId();
        if (active) return active;
        const selected = opts.find((o) => o.value === this.selectedValue());
        return selected ? selected.id : opts[0]?.id;
    });

    readonly shouldHideLabels = computed(() => {
        const iconsOnly = this.iconsOnly() === true;
        const opts = this.optionsWithIds();
        return iconsOnly && opts.every((item) => !!item.icon && !!item.label);
    });

    host = inject<ElementRef<HTMLElement>>(ElementRef);

    constructor() {
        effect(() => {
            // Ensure activeId tracks selected when value changes
            const opts = this.optionsWithIds();
            const selected = opts.find((o) => o.value === this.selectedValue());
            this.activeId.set(selected?.id);
        });
    }

    badgeSizeFor(size: TabSize): 'small' | 'x-small' {
        return TAB_BADGE_SIZES[size];
    }

    currentIcon(item: TabOption & { id: string }): BspkIcon | undefined {
        const isSelected = item.value === this.selectedValue();
        return isSelected ? item.iconSelected || item.icon : item.icon;
    }

    focusActive() {
        const id = this.activeId();
        if (!id || !this.host) return;
        const el = this.host.nativeElement.querySelector<HTMLElement>(`[id="${id}"]`);
        el?.focus();
    }

    onItemClick(item: TabOption & { id: string }) {
        if (item.disabled) return;
        this.activeId.set(item.id);
        if (!item.disabled) this.value.set(item.value);
    }

    handleKeyDownEvent(event: KeyboardEvent) {
        const opts = this.optionsWithIds().filter((o) => !o.disabled);
        const currentId = this.activeId() || this.focusableId();
        const idx = opts.findIndex((o) => o.id === currentId);

        keydownHandler(
            {
                ArrowRight: () => {
                    const next = idx >= 0 ? opts[(idx + 1) % opts.length] : opts[0];
                    this.activeId.set(next?.id);
                },
                ArrowLeft: () => {
                    const prev = idx > 0 ? opts[(idx - 1 + opts.length) % opts.length] : opts[opts.length - 1];
                    this.activeId.set(prev?.id);
                },
                Enter: () => {
                    const active = this.optionsWithIds().find((o) => o.id === this.activeId());
                    if (active && !active.disabled) this.value.set(active.value);
                },
                Space: () => {
                    const active = this.optionsWithIds().find((o) => o.id === this.activeId());
                    if (active && !active.disabled) this.value.set(active.value);
                },
            },
            {
                preventDefault: true,
            },
        )(event);
    }
}
