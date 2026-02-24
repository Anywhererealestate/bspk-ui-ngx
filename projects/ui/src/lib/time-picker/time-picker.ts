import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, input, model, signal, viewChild, ViewEncapsulation } from '@angular/core';
import { AsSignal, FieldControlProps } from '../../types/common';
import { UIButton } from '../button/button';
import { UIFloatingDirective } from '../floating';
import { IconSchedule } from '../icons/schedule';
import { UIInput } from '../input';
import { UIOutsideClickDirective } from '../outside-click';
import {
    HOUR_OPTIONS,
    MERIDIEM_OPTIONS,
    Meridiem,
    MINUTE_OPTIONS,
    partsToStringValue,
    stringValueToParts,
} from './utils';

export interface TimePickerProps extends FieldControlProps {
    size?: 'large' | 'medium' | 'small';
    value?: string;
}

/**
 * Input that allows typing a time or opening a time picker panel to select hour/minute/AM-PM.
 *
 * @name TimePicker
 * @phase Dev
 */
@Component({
    selector: 'ui-time-picker',
    standalone: true,
    imports: [CommonModule, UIInput, UIButton, UIFloatingDirective, UIOutsideClickDirective],
    template: `
        <div
            #reference
            data-bspk="time-picker"
            [attr.data-size]="size()"
            [attr.data-disabled]="disabled() || null"
            [attr.data-readonly]="readOnly() || null"
            [attr.data-invalid]="invalid() || null">
            <ui-input
                [id]="id()"
                [name]="name() || 'time'"
                [value]="displayValue()"
                [disabled]="disabled()"
                [readOnly]="readOnly()"
                [required]="required()"
                [ariaLabel]="ariaLabel()"
                [ariaDescribedBy]="ariaDescribedBy()"
                [ariaErrorMessage]="ariaErrorMessage()"
                [ariaLabelledBy]="ariaLabelledBy()"
                [invalid]="invalid()"
                [size]="size()"
                [showClearButton]="false"
                (valueChange)="onInputChange($event)"
                (focus)="onInputFocus()" />
            @if (!disabled() && !readOnly()) {
                <ui-button
                    [icon]="iconScheduleRef"
                    [iconOnly]="true"
                    label="Open time picker"
                    variant="tertiary"
                    type="button"
                    (onClick)="togglePanel()" />
            }
        </div>
        @if (open()) {
            <div
                data-bspk="time-picker-menu"
                role="dialog"
                [attr.aria-label]="'Choose time'"
                [ui-floating]="floatingProps()"
                [ui-outside-click]="{ callback: closePanel.bind(this) }"
                #panel>
                <div data-time-picker-panel>
                    <select [value]="pendingHours()" (change)="setHours($any($event.target).value)" aria-label="Hour">
                        @for (h of HOUR_OPTIONS; track h) {
                            <option [value]="h">{{ h }}</option>
                        }
                    </select>
                    <span data-sep>:</span>
                    <select
                        [value]="pendingMinutes()"
                        (change)="setMinutes($any($event.target).value)"
                        aria-label="Minute">
                        @for (m of MINUTE_OPTIONS; track m) {
                            <option [value]="m">{{ m }}</option>
                        }
                    </select>
                    <select
                        [value]="pendingMeridiem()"
                        (change)="setMeridiem($any($event.target).value)"
                        aria-label="AM/PM">
                        @for (a of MERIDIEM_OPTIONS; track a) {
                            <option [value]="a">{{ a }}</option>
                        }
                    </select>
                </div>
                <ui-button label="Apply" variant="primary" (onClick)="applyAndClose()" />
            </div>
        }
    `,
    host: {
        'data-bspk': 'time-picker-host',
    },
    styleUrl: './time-picker.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UITimePicker implements AsSignal<TimePickerProps> {
    readonly value = model<TimePickerProps['value']>(undefined);
    readonly disabled = input<TimePickerProps['disabled']>(false);
    readonly readOnly = input<TimePickerProps['readOnly']>(false);
    readonly invalid = input<TimePickerProps['invalid']>(false);
    readonly name = input.required<NonNullable<TimePickerProps['name']>>();
    readonly size = input<TimePickerProps['size']>('medium');
    readonly id = input<TimePickerProps['id']>(undefined);
    readonly required = input<TimePickerProps['required']>(false);
    readonly ariaLabel = input<TimePickerProps['ariaLabel']>('Time picker');
    readonly ariaDescribedBy = input<TimePickerProps['ariaDescribedBy']>(undefined);
    readonly ariaErrorMessage = input<TimePickerProps['ariaErrorMessage']>(undefined);
    readonly ariaLabelledBy = input<TimePickerProps['ariaLabelledBy']>(undefined);

    readonly reference = viewChild<ElementRef<HTMLElement>>('reference');
    readonly open = signal(false);

    readonly parts = computed(() => stringValueToParts(this.value() ?? '00:00'));
    readonly hours = computed(() => this.parts().hours ?? '12');
    readonly minutes = computed(() => this.parts().minutes ?? '00');
    readonly meridiem = computed(() => this.parts().meridiem);

    readonly displayValue = computed(() => this.value() ?? '');

    readonly floatingProps = computed(() => ({
        reference: this.reference()?.nativeElement ?? null,
        placement: 'bottom-start' as const,
        offsetOptions: 4,
        refWidth: false,
        strategy: 'fixed' as const,
    }));

    readonly pendingHours = signal<string>('12');
    readonly pendingMinutes = signal<string>('00');
    readonly pendingMeridiem = signal<Meridiem>('AM');

    readonly iconScheduleRef = IconSchedule;
    protected readonly HOUR_OPTIONS = HOUR_OPTIONS;
    protected readonly MINUTE_OPTIONS = MINUTE_OPTIONS;
    protected readonly MERIDIEM_OPTIONS = MERIDIEM_OPTIONS;

    onInputChange(v: string | undefined): void {
        this.value.set(v ?? '');
    }

    onInputFocus(): void {
        this.pendingHours.set(this.hours());
        this.pendingMinutes.set(this.minutes());
        this.pendingMeridiem.set(this.meridiem());
    }

    togglePanel(): void {
        this.pendingHours.set(this.hours());
        this.pendingMinutes.set(this.minutes());
        this.pendingMeridiem.set(this.meridiem());
        this.open.update((o) => !o);
    }

    closePanel(): void {
        this.open.set(false);
    }

    setHours(h: string): void {
        this.pendingHours.set(h);
    }
    setMinutes(m: string): void {
        this.pendingMinutes.set(m);
    }
    setMeridiem(a: Meridiem): void {
        this.pendingMeridiem.set(a);
    }

    applyAndClose(): void {
        const next = partsToStringValue(this.pendingHours(), this.pendingMinutes(), this.pendingMeridiem());
        this.value.set(next);
        this.open.set(false);
    }
}
