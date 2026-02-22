import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    ElementRef,
    input,
    model,
    signal,
    viewChild,
    ViewEncapsulation,
} from '@angular/core';
import { AsSignal } from '../../types/common';
import { uniqueId } from '../../utils/random';
import { UIFloatingDirective } from '../floating';
import { IconSearch } from '../icons/search';
import { UIInput } from '../input';
import { UIListItem } from '../list-item';
import { UIMenu } from '../menu';
import { UIOutsideClickDirective } from '../outside-click';

export type SearchBarOption = { label: string; leading?: string; trailing?: string };

export type SearchBarProps = {
    placeholder?: string;
    items?: SearchBarOption[];
    noResultsMessage?: string;
    disabled?: boolean;
    size?: 'large' | 'medium' | 'small';
    name?: string;
    ariaLabel?: string;
    scrollLimit?: number;
};

/**
 * Input that allows search queries and shows filtered results in a floating menu.
 *
 * @name SearchBar
 * @phase Stable
 */
@Component({
    selector: 'ui-search-bar',
    standalone: true,
    imports: [
        CommonModule,
        UIInput,
        UIFloatingDirective,
        UIOutsideClickDirective,
        UIMenu,
        UIListItem,
        IconSearch,
    ],
    template: `
        <div #reference data-bspk="search-bar">
            <ui-input
                [id]="id()"
                [name]="name() || 'search'"
                [value]="value()"
                [disabled]="disabled()"
                [placeholder]="placeholder()"
                [size]="size()"
                [ariaLabel]="ariaLabel()"
                [showClearButton]="true"
                (valueChange)="onValueChange($event)"
                (focus)="open.set(true)"
                [attr.aria-expanded]="open()"
                [attr.aria-controls]="open() ? menuId() : null"
                aria-autocomplete="list"
                role="combobox" />
        </div>
        @if (open()) {
            <ui-menu
                [id]="menuId()"
                [ui-floating]="floatingProps()"
                [ui-outside-click]="{ callback: closeMenu.bind(this) }"
                role="listbox"
                [attr.aria-label]="'Search results'"
                data-bspk="search-bar-menu">
                @if (filteredItems().length === 0) {
                    <div data-no-results>{{ noResultsMessage() || 'No results found' }}</div>
                }
                @for (item of filteredItems(); track item.label) {
                    <ui-list-item
                        [label]="item.label"
                        [as]="'div'"
                        [active]="value() === item.label"
                        [attr.aria-selected]="value() === item.label"
                        role="option"
                        (onClick)="selectItem(item)" />
                }
            </ui-menu>
        }
    `,
    host: {
        'data-bspk': 'search-bar-host',
    },
    styleUrl: './search-bar.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UISearchBar implements AsSignal<SearchBarProps> {
    readonly placeholder = input<SearchBarProps['placeholder']>('Search');
    readonly items = input<SearchBarProps['items']>([]);
    readonly noResultsMessage = input<SearchBarProps['noResultsMessage']>(undefined);
    readonly disabled = input<SearchBarProps['disabled']>(false);
    readonly size = input<SearchBarProps['size']>('medium');
    readonly name = input<SearchBarProps['name']>(undefined);
    readonly ariaLabel = input<SearchBarProps['ariaLabel']>(undefined);
    readonly scrollLimit = input<SearchBarProps['scrollLimit']>(undefined);

    readonly value = model<string | undefined>(undefined);

    readonly reference = viewChild<ElementRef<HTMLElement>>('reference');
    readonly open = signal(false);

    readonly id = computed(() => this.name() || uniqueId('search-bar-'));
    readonly menuId = computed(() => `${this.id()}-menu`);

    readonly filteredItems = computed(() => {
        const valueStr = (this.value() ?? '').trim().toLowerCase();
        const items = this.items() ?? [];
        if (!valueStr) return items;
        return items.filter((item) => item.label.toLowerCase().includes(valueStr));
    });

    readonly floatingProps = computed(() => ({
        reference: this.reference()?.nativeElement ?? null,
        placement: 'bottom-start' as const,
        offsetOptions: 4,
        refWidth: true,
        strategy: 'fixed' as const,
    }));

    onValueChange(v: string | undefined): void {
        this.value.set(v ?? '');
    }

    closeMenu(): void {
        this.open.set(false);
    }

    selectItem(item: SearchBarOption): void {
        this.value.set(item.label);
        this.open.set(false);
    }
}
