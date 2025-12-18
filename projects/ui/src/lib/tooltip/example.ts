import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIButton } from '../button/button';
import { UITooltipDirective } from './tooltip.directive';

@Component({
    selector: 'ui-tooltip-example',
    standalone: true,
    imports: [CommonModule, UITooltipDirective, UIButton],
    template: `
        <h2>Tooltip</h2>

        <ui-button
            label="Hover me"
            [ui-tooltip]="{
                label: 'I explain what this button does',
            }"
            placement="top"></ui-button>

        <h3>Right</h3>
        <span [ui-tooltip]="{ label: 'Right side tooltip', placement: 'right' }">Hover me (right)</span>

        <h3>No tail</h3>
        <span
            [ui-tooltip]="{
                label: 'No tail',
                showTail: false,
            }"
            >Hover me (no tail)</span
        >

        <h3>Disabled</h3>
        <span
            [ui-tooltip]="{
                label: 'Disabled tooltip',
                disabled: true,
            }"
            >Hover me (disabled)</span
        >
    `,
})
export class UITooltipExample {}
