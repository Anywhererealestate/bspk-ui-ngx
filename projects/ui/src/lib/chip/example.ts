import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { IconAdd } from '../icons/add';
import { IconIcecream } from '../icons/icecream';
import { UIChip } from './chip';

@Component({
    selector: 'ui-chip-example',
    standalone: true,
    imports: [CommonModule, UIChip],
    template: `
        <h4>Default with label and click</h4>
        <ui-chip label="Hello I'm Chip" (click)="handleClick('Default with label and click')" />

        <h4>flat = true</h4>
        <ui-chip [flat]="true" label="Hello I'm Chip" (click)="handleClick('flat = true')" />

        <h4>Leading Icon</h4>
        <ui-chip label="Hello I'm Chip" [leadingIcon]="iconAdd" (click)="handleClick('Leading Icon')" />

        <h4>Trailing Icon</h4>
        <ui-chip label="Hello I'm Chip" [trailingIcon]="iconIcecream" (click)="handleClick('Trailing Icon')" />

        <h4>Both Icons</h4>
        <ui-chip
            label="Hello I'm Chip"
            [leadingIcon]="iconAdd"
            [trailingIcon]="iconAdd"
            (click)="handleClick('Both Icons')" />

        <h4>Badge</h4>
        <ui-chip label="Hello I'm Chip" [trailingBadge]="{ count: 3 }" (click)="handleClick('Badge')" />

        <h4>Badge & Trailing Icon</h4>
        <p>When both are provided the icon will be visible. You cannot have both trailing items.</p>
        <ui-chip
            label="Hello I'm Chip"
            [trailingBadge]="{ count: 3 }"
            [trailingIcon]="iconAdd"
            (click)="handleClick('Badge & Trailing Icon')" />

        <h4>Disabled = true</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <ui-chip [disabled]="true" label="Hello I'm Chip" />
            <ui-chip [flat]="true" [disabled]="true" label="Hello I'm Chip" />
            <ui-chip
                [disabled]="true"
                label="Hello I'm Chip"
                [leadingIcon]="iconAdd"
                [trailingIcon]="iconAdd"
                (click)="handleClick('Disabled with both icons')" />
            <ui-chip
                [disabled]="true"
                label="Hello I'm Chip"
                [trailingBadge]="{ count: 3 }"
                (click)="handleClick('Disabled with badge')" />
        </div>

        <h4>Selected = true</h4>
        <ui-chip [selected]="true" label="Hello I'm Chip" (click)="handleClick('Selected = true')" />
    `,
})
export class UIChipExample {
    protected readonly iconAdd = IconAdd;
    protected readonly iconIcecream = IconIcecream;

    protected handleClick(name: string): void {
        sendSnackbar(`${name} Chip clicked`);
    }
}
