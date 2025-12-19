import { CommonModule } from '@angular/common';
import { Component, model, AfterViewInit } from '@angular/core';
import { UIButton } from '../button/button';
import { TooltipPlacement, UITooltipDirective } from './tooltip.directive';

@Component({
    selector: 'ui-tooltip-example',
    standalone: true,
    imports: [CommonModule, UITooltipDirective, UIButton],
    template: `
        <h2>Tooltip</h2>

        <div ngx-example>
            <ui-button label="Hover me" tooltip="I explain what this button does" tooltipId="button"></ui-button>
        </div>
        <p>This is a button with a tooltip but not using the ui-tooltip directive directly.</p>

        @for (placement of placements; track $index) {
            <h3>{{ placement | titlecase }}</h3>
            <span [ui-tooltip]="{ label: placement + ' side tooltip', placement: placement }"
                >Hover me ({{ placement }})</span
            >
        }

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

        <h3>Updated Live</h3>
        <span
            [ui-tooltip]="{
                label: 'Updated tooltip' + counter(),
            }"
            >Hover me ({{ counter() }})</span
        >
    `,
    host: {
        // ensure the example tooltips are not cut off
        style: `overflow: hidden;`,
    },
})
export class UITooltipExample implements AfterViewInit {
    placements: TooltipPlacement[] = ['top', 'bottom', 'left', 'right'];

    counter = model(0);

    ngAfterViewInit() {
        setInterval(() => {
            this.counter.set(this.counter() + 1);
        }, 1000);
    }
}
