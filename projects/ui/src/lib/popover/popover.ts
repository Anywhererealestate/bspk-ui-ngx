import {
    Component,
    computed,
    ElementRef,
    input,
    output,
    signal,
    viewChild,
    ViewEncapsulation,
} from '@angular/core';
import { Placement } from '@floating-ui/dom';
import { AsSignal } from '../../types/common';
import { uniqueId } from '../../utils/random';
import { UIButton } from '../button/button';
import { UIFocusTrapDirective } from '../focus-trap';
import { UIFloatingDirective } from '../floating';
import * as Icons from '../icons';
import { UIPortalDirective } from '../portal';
import { UITxtDirective } from '../txt';
import { UIOutsideClickDirective } from '../outside-click';

export interface CallToActionButton {
    label: string;
    size?: 'large' | 'medium' | 'small' | 'x-small';
}

export interface PopoverProps {
    /** Placement of the popover. */
    placement?: Placement;
    /** Popover header. */
    header: string;
    /** Popover body content. */
    content: string;
    /** Primary CTA label (click emitted via callToActionClick). */
    callToAction?: CallToActionButton;
    /** Secondary CTA label (click emitted via secondaryCallToActionClick). */
    secondaryCallToAction?: CallToActionButton;
    /** When true, trigger is disabled and popover cannot open. */
    disabled?: boolean;
    /** When true, panel width matches trigger width. */
    refWidth?: boolean;
    style?: string;
}

/**
 * Brief message that provides additional guidance and helps users perform an action if needed.
 *
 * @name Popover
 * @phase Stable
 */
@Component({
    selector: 'ui-popover',
    standalone: true,
    imports: [
        UIPortalDirective,
        UIFloatingDirective,
        UIOutsideClickDirective,
        UIFocusTrapDirective,
        UIButton,
        UITxtDirective,
    ],
    template: `
        <div
            #triggerRef
            (click)="toggle()"
            style="display: inline-block;"
            [attr.aria-describedby]="open() ? popoverId : null">
            <ng-content select="[ui-popover-trigger]" />
        </div>
        @if (open()) {
            <div
                ui-portal
                [ui-floating]="floatingProps()"
                [ui-outside-click]="{ callback: close.bind(this) }"
                [ui-focus-trap]="true"
                [attr.data-bspk]="'popover'"
                [attr.data-placement]="placement()"
                [id]="popoverId"
                [style]="style()">
                <header>
                    <span ui-txt [variant]="'heading-h6'">{{ header() }}</span>
                    <ui-button
                        data-close
                        iconOnly
                        label="Close"
                        [icon]="iconClose"
                        (click)="close()"
                        variant="tertiary" />
                </header>
                <div data-content>
                    <div ui-txt [variant]="'body-small'">{{ content() }}</div>
                    <div data-cta-row>
                        @if (secondaryCallToAction()?.label) {
                            <ui-button
                                [label]="secondaryCallToAction()!.label!"
                                (click)="secondaryCallToActionClick.emit()"
                                size="small"
                                variant="secondary" />
                        }
                        @if (callToAction()?.label) {
                            <ui-button
                                [label]="callToAction()!.label!"
                                (click)="callToActionClick.emit()"
                                size="small"
                                variant="primary" />
                        }
                    </div>
                </div>
            </div>
        }
    `,
    host: {
        'data-bspk': 'popover-host',
    },
    styleUrl: './popover.scss',
    encapsulation: ViewEncapsulation.None,
})
export class UIPopover implements AsSignal<PopoverProps> {
    readonly placement = input<PopoverProps['placement']>('top');
    readonly header = input.required<PopoverProps['header']>();
    readonly content = input.required<PopoverProps['content']>();
    readonly callToAction = input<PopoverProps['callToAction']>(undefined);
    readonly secondaryCallToAction = input<PopoverProps['secondaryCallToAction']>(undefined);
    readonly disabled = input<PopoverProps['disabled']>(false);
    readonly refWidth = input<PopoverProps['refWidth']>(false);
    readonly style = input<PopoverProps['style']>(undefined);

    readonly callToActionClick = output<void>();
    readonly secondaryCallToActionClick = output<void>();

    readonly triggerRef = viewChild<ElementRef<HTMLElement>>('triggerRef');
    readonly open = signal(false);
    readonly popoverId: string = uniqueId('popover-');

    protected readonly iconClose = Icons.IconClose;

    readonly floatingProps = computed(() => ({
        reference: this.triggerRef()?.nativeElement ?? null,
        placement: this.placement(),
        offsetOptions: 22,
        refWidth: this.refWidth() ?? false,
        strategy: 'absolute' as const,
    }));

    toggle(): void {
        if (this.disabled()) return;
        this.open.update((o) => !o);
    }

    close(): void {
        this.open.set(false);
    }
}
