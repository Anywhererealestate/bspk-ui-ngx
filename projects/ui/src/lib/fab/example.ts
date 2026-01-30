import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { IconCloud } from '../icons/cloud';
import { IconWarningFill } from '../icons/warning-fill';
import { UIFab } from './fab';

@Component({
    selector: 'ui-fab-example',
    standalone: true,
    imports: [CommonModule, UIFab],
    template: `
        <h4>Default</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Default FAB" (click)="handleClick('Default')" />
        </div>

        <h4>Events</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab
                label="Event FAB"
                (onClick)="log('Clicked')"
                (blur)="log('Blur')"
                (focus)="log('Focus')"
                (mouseleave)="log('Mouse Leave')"
                (mouseenter)="log('Mouse Enter')" />
        </div>

        <!-- <h4>With Icon</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="With Icon" [icon]="iconSvg" />
        </div> -->

        <!-- <h4>Icon Only</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Icon Only FAB" [icon]="iconSvg" [iconOnly]="true" aria-label="Icon Only FAB" />
        </div> -->

        <!-- <h4>With Tooltip</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Tooltip FAB" [icon]="iconSvg" tooltip="Tooltip text" />
        </div> -->

        <h4>Size: Small</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Small FAB" size="small" (click)="handleClick('Small')" />
        </div>

        <h4>Size: Medium</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Medium FAB" size="medium" (click)="handleClick('Medium')" />
        </div>

        <h4>Variant: Neutral</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Neutral FAB" variant="neutral" (click)="handleClick('Neutral')" />
        </div>

        <h4>Variant: Primary</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Primary FAB" variant="primary" (click)="handleClick('Primary')" />
        </div>

        <h4>Variant: Secondary</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Secondary FAB" variant="secondary" (click)="handleClick('Secondary')" />
        </div>

        <h4>Placement: Top Left</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Top Left" placement="top-left" (click)="handleClick('Top Left')" />
        </div>

        <h4>Placement: Top Right</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Top Right" placement="top-right" (click)="handleClick('Top Right')" />
        </div>

        <h4>Placement: Bottom Left</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Bottom Left" placement="bottom-left" (click)="handleClick('Bottom Left')" />
        </div>

        <h4>Placement: Bottom Right</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Bottom Right" placement="bottom-right" (click)="handleClick('Bottom Right')" />
        </div>

        <!-- <h4>Container: Page (fixed)</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Page FAB" container="page" />
        </div> -->

        <h4>Container: Local (absolute)</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Local FAB" container="local" />
        </div>

        <h4>Icon Only</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab
                label="Icon Only FAB"
                [icon]="iconCloud"
                [iconOnly]="true"
                aria-label="Icon Only FAB"
                (click)="handleClick('Icon Only')" />
        </div>

        <h4>With Tooltip</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Tooltip FAB" [icon]="iconCloud" tooltip="Tooltip text" (click)="handleClick('Tooltip')" />
        </div>

        <h4>Size: Small</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Small FAB" size="small" (click)="handleClick('Small')" />
        </div>

        <h4>Size: Medium</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Medium FAB" size="medium" (click)="handleClick('Medium')" />
        </div>

        <h4>Variant: Neutral</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Neutral FAB" variant="neutral" (click)="handleClick('Neutral')" />
        </div>

        <h4>Variant: Primary</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Primary FAB" variant="primary" (click)="handleClick('Primary')" />
        </div>

        <h4>Variant: Secondary</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Secondary FAB" variant="secondary" (click)="handleClick('Secondary')" />
        </div>

        <h4>Placement: Top Left</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Top Left" placement="top-left" (click)="handleClick('Top Left')" />
        </div>

        <h4>Placement: Top Right</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Top Right" placement="top-right" (click)="handleClick('Top Right')" />
        </div>

        <h4>Placement: Bottom Left</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Bottom Left" placement="bottom-left" (click)="handleClick('Bottom Left')" />
        </div>

        <h4>Placement: Bottom Right</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Bottom Right" placement="bottom-right" (click)="handleClick('Bottom Right')" />
        </div>

        <!-- <h4>Container: Page (fixed)</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Page FAB" container="page" />
        </div> -->

        <h4>Container: Local (absolute)</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab label="Local FAB" container="local" (click)="handleClick('Local')" />
        </div>

        <!-- <h4>Events</h4>
        <div style="height: 200px; position: relative; border: 1px solid #ccc; margin-bottom: 16px;">
            <ui-fab
                label="All Props"
                [icon]="iconCloud"
                [iconOnly]="true"
                tooltip="All props tooltip"
                size="medium"
                variant="secondary"
                placement="top-right"
                container="page"
                aria-label="All Props FAB"
                (onClick)="log('All Props Clicked')" />
        </div> -->
    `,
})
export class UIFabExample {
    protected readonly iconCloud = IconCloud;
    protected readonly iconWarningFill = IconWarningFill;

    log(msg: string) {
        // Replace with your snackbar or console log as needed
        sendSnackbar(msg);
    }

    protected handleClick(name: string): void {
        sendSnackbar(`${name} Fab clicked!`);
    }
}
