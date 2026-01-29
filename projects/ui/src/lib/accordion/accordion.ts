import { CommonModule } from '@angular/common';
import {
    Component,
    OnInit,
    TemplateRef,
    ViewEncapsulation,
    computed,
    contentChildren,
    effect,
    input,
    model,
    output,
} from '@angular/core';
import { AsInputSignal } from '../../types/common';
import { uniqueId } from '../../utils/random';
import { IconKeyboardArrowDown } from '../icons/keyboard-arrow-down';
import { IconKeyboardArrowUp } from '../icons/keyboard-arrow-up';

export interface AccordionSection {
    /**
     * The title of the accordion.
     *
     * @required
     */
    title: string;
    /** The subtitle of the accordion. */
    subtitle?: string;
    /**
     * The leading element to display in the accordion header.
     *
     * May be passed as string or use <span data-leading> for non-string content.
     */
    leading?: string;
    /**
     * The trailing element to display in the accordion header.
     *
     * May be passed as string or use <span data-trailing> for non-string content.
     */
    trailing?: string;
    /**
     * If the accordion is initially open.
     *
     * This is ignored if the accordion section disabled property is true.
     *
     * @default false
     */
    isOpen?: boolean;
    /**
     * Indicates whether the accordion is disabled.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * The unique identifier for the accordion item.
     *
     * If not provided it will be generated automatically.
     */
    id?: string;
}

export interface AccordionProps {
    /**
     * If true only one accordion section can be opened at a time
     *
     * @default true
     */
    singleOpen?: boolean;
}

/**
 * A vertical stack of collapsible panels or that allows customers to expand or collapse each panel individually to
 * reveal or hide their content.
 *
 * @example
 *     ```html
 *     <ui-accordion [singleOpen]="false" [items]="[{title: 'Foo', children: 'Foo Children'}, {title: 'Bar', children: 'Bar Children'}, {title: 'Car', children: 'Car Children'}]"></ui-accordion>
 *     ```;
 *
 * @name Accordion
 * @phase Dev
 */
@Component({
    selector: 'ui-accordion',
    standalone: true,
    imports: [CommonModule],
    template: `<ng-content></ng-content>`,
    styleUrls: ['./accordion.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        'data-bspk': 'accordion',
    },
})
export class UIAccordion implements OnInit, AsInputSignal<AccordionProps> {
    readonly singleOpen = input<AccordionProps['singleOpen']>(true);

    readonly sections = contentChildren(UIAccordionSection, { descendants: true });

    readonly items = computed<(AccordionSection & { id: string })[]>(() => {
        return this.sections().map((section) => ({
            ...section.item,
            id: section.id() || uniqueId('accordion-item'),
        }));
    });

    readonly openSections = model(
        this.items()
            .filter((i) => i.isOpen)
            .map((i) => i.id!),
    );

    constructor() {
        effect(() => {
            this.sections().forEach((section) => {
                section.isOpen.set(this.openSections().includes(section.id()));
            });
        });
    }

    ngOnInit() {
        this.sections().forEach((section) => {
            section.toggleOpen.subscribe((itemId: string) => this.toggleOpen(itemId));
        });
    }

    toggleOpen(itemId: string) {
        const isOpen = this.openSections().includes(itemId);

        if (this.singleOpen()) {
            this.openSections.set(isOpen ? [] : [itemId]);
            return;
        }

        this.openSections.set(
            isOpen ? this.openSections().filter((id) => id !== itemId) : [...this.openSections(), itemId],
        );
    }

    isOpen(item: AccordionSection & { id: string }): boolean {
        return !!item.id && this.openSections().includes(item.id) && !item.disabled;
    }

    isTemplateRef(value: any): value is TemplateRef<any> {
        return value instanceof TemplateRef;
    }
}

@Component({
    selector: 'ui-accordion-section',
    standalone: true,
    imports: [CommonModule, IconKeyboardArrowDown, IconKeyboardArrowUp],
    host: {
        'data-bspk': 'accordion-item',
        '[attr.data-disabled]': 'item.disabled ? true : null',
        '[id]': 'item.id',
    },
    template: `
        <button
            type="button"
            [attr.aria-controls]="item.id + '-content'"
            [attr.aria-expanded]="isOpen()"
            data-header
            [disabled]="item.disabled ? true : null"
            (click)="!item.disabled && toggleOpen.emit(item.id!)">
            <ng-content select="[data-leading]">
                @if (item.leading) {
                    <span data-leading>{{ item.leading }}</span>
                }
            </ng-content>

            <span data-title-subtitle>
                <span data-title>{{ item.title }}</span>

                @if (item.subtitle) {
                    <span data-subtitle>{{ item.subtitle }}</span>
                }
            </span>
            <ng-content select="[data-trailing]">
                @if (item.trailing) {
                    <span data-trailing>{{ item.trailing }}</span>
                }
            </ng-content>

            <span data-arrow>
                @if (isOpen()) {
                    <icon-keyboard-arrow-up />
                } @else {
                    <icon-keyboard-arrow-down />
                }
            </span>
        </button>
        @if (isOpen()) {
            <div data-content [id]="item.id + '-content'">
                <ng-content></ng-content>
            </div>
        }
        <span data-divider></span>
    `,
})
export class UIAccordionSection implements AsInputSignal<AccordionSection> {
    toggleOpen = output<string>();

    readonly title = input<AccordionSection['title']>('');
    readonly subtitle = input<AccordionSection['subtitle']>(undefined);
    readonly isOpen = model<AccordionSection['isOpen']>(false);
    readonly disabled = input<AccordionSection['disabled']>(false);
    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly idProp = input<AccordionSection['id']>('', { alias: 'id' });
    readonly id = computed<string>(() => this.idProp() || uniqueId('accordion-item'));

    readonly leading = input<AccordionSection['leading']>(undefined);
    readonly trailing = input<AccordionSection['trailing']>(undefined);

    get item(): AccordionSection & { id: string } {
        return {
            title: this.title(),
            subtitle: this.subtitle(),
            isOpen: this.isOpen(),
            disabled: this.disabled(),
            id: this.id(),
            leading: this.leading(),
            trailing: this.trailing(),
        };
    }
}
