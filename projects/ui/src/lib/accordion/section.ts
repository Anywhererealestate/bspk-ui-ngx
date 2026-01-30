import { CommonModule } from '@angular/common';
import { Component, output, input, model, computed } from '@angular/core';
import { AsSignal } from '../../types/common';
import { uniqueId } from '../../utils/random';
import { IconKeyboardArrowDown, IconKeyboardArrowUp } from '../icons';
import { AccordionSection } from './accordion';

/** A utility component representing a single section within an accordion. */
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
export class UIAccordionSection implements AsSignal<AccordionSection> {
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
