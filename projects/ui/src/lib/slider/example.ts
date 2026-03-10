import { Component, signal } from '@angular/core';
import { sendSnackbar } from '../../utils/send-snackbar';
import { UISlider } from '../slider';

@Component({
    selector: 'ui-slider-example',
    standalone: true,
    imports: [UISlider],
    template: `
        <h4>Default</h4>
        <ui-slider label="example-label" [max]="50" [min]="5" name="example-name" (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>Range</h4>
        <ui-slider
            [value]="values()['range']"
            (valueChange)="update('range', $event)"
            name="range-slider"
            label="Range Slider"
            [min]="0"
            [max]="100" />

        <h4>disabled: true</h4>
        <ui-slider
            [disabled]="true"
            label="example-label"
            [max]="120"
            [min]="20"
            name="example-name"
            (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>disabled: false</h4>
        <ui-slider
            [disabled]="false"
            label="example-label"
            [max]="20"
            [min]="2"
            name="example-name"
            (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>formatNumber Custom Formatting</h4>
        <ui-slider
            [formatNumber]="formatExample"
            label="Currency Format"
            [max]="1000"
            [min]="0"
            name="formatted-slider"
            [value]="values()['formatted']"
            (valueChange)="update('formatted', $event)"
            [step]="50" />

        <h4>label: example-label</h4>
        <ui-slider label="example-label" [max]="33" [min]="3" name="example-name" (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>marks: true</h4>
        <ui-slider
            label="example-label"
            [marks]="true"
            [max]="44"
            [min]="4"
            name="example-name"
            (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>marks: false</h4>
        <ui-slider
            label="example-label"
            [marks]="false"
            [max]="72"
            [min]="6"
            name="example-name"
            (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>max: 88</h4>
        <ui-slider label="example-label" [max]="88" [min]="8" name="example-name" (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>min: 12</h4>
        <ui-slider
            label="example-label"
            [max]="224"
            [min]="12"
            name="example-name"
            (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>name: example-name</h4>
        <ui-slider label="example-label" [max]="21" [min]="3" name="example-name" (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>readOnly: true</h4>
        <ui-slider
            label="example-label"
            [max]="99"
            [min]="9"
            name="example-name"
            [readOnly]="true"
            (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>readOnly: false</h4>
        <ui-slider
            label="example-label"
            [max]="100"
            [min]="10"
            name="example-name"
            [readOnly]="false"
            (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>step: 12</h4>
        <ui-slider
            label="example-label"
            [max]="120"
            [min]="12"
            name="example-name"
            [step]="12"
            (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>value: 10</h4>
        <ui-slider
            label="example-label"
            [max]="45"
            [min]="5"
            name="example-name"
            [value]="10"
            (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>

        <h4>value: unknown</h4>
        <ui-slider label="example-label" [max]="40" [min]="2" name="example-name" (valueChange)="onValueChange($event)">
            Example Content
        </ui-slider>
    `,
})
export class UISliderExample {
    readonly values = signal<{
        default: number;
        range: [number, number];
        step: number;
        formatted: number;
    }>({
        default: 50,
        range: [25, 75],
        step: 20,
        formatted: 250,
    });

    onValueChange(event: any) {
        sendSnackbar(`valueChange event: ${JSON.stringify(event)}`);
    }

    update(key: keyof ReturnType<typeof this.values>, value: number | [number, number]) {
        this.values.update((current) => ({
            ...current,
            [key]: value,
        }));
    }

    formatExample = (value: number) => {
        return `$${value.toFixed(0)}`;
    };
}
