import { Directive, inject, input, Renderer2, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { AsSignal } from '../../types/common';
import { FloatingUtility, FloatingProps } from './floating';

export interface FloatingDirectiveProps {
    props: Omit<FloatingProps, 'floating'>;
}

/**
 * A directive to position an element relative to a reference element using floating UI logic.
 *
 * @name UIFloatingDirective
 * @phase Utility
 */
@Directive({
    selector: '[ui-floating]',
    host: {
        style: 'position: absolute;',
    },
})
export class UIFloatingDirective implements AfterViewInit, OnDestroy, AsSignal<FloatingDirectiveProps> {
    render = inject(Renderer2);
    host = inject(ElementRef);

    readonly props = input.required<FloatingDirectiveProps['props']>({ alias: 'ui-floating' });

    floating = new FloatingUtility(this.render);

    ngAfterViewInit(): void {
        const nextProps: FloatingProps = {
            ...this.props(),
            floating: this.host.nativeElement,
        };

        this.floating.compute(nextProps);
        window.addEventListener('scroll', this.updateFloatingPosition, true);
        window.addEventListener('resize', this.updateFloatingPosition, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.updateFloatingPosition, true);
        window.removeEventListener('resize', this.updateFloatingPosition, true);
    }

    updateFloatingPosition = () => {
        const nextProps: FloatingProps = {
            ...this.props(),
            floating: this.host.nativeElement,
        };
        this.floating.compute(nextProps);
    };
}
