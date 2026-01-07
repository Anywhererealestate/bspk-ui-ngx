import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UILinkDirective } from './link.directive';

@Component({
    selector: 'ui-host',
    standalone: true,
    imports: [UILinkDirective],
    template: `<a ui-link href="https://bspk.dev" [label]="'Test Link'" trailingIcon="external"></a>`,
})
class HostComponent {}

describe('UILinkDirective', () => {
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [HostComponent] }).compileComponents();
        fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
    });

    it('should render label span and set attributes', () => {
        const anchor: HTMLAnchorElement | null = fixture.nativeElement.querySelector('a');
        expect(anchor).toBeTruthy();
        expect(anchor?.getAttribute('data-bspk')).toBe('link');
        expect(anchor?.getAttribute('href')).toBe('https://bspk.dev');
        expect(anchor?.getAttribute('target')).toBe('_blank');
        const span = anchor?.querySelector('span');
        expect(span?.textContent).toBe('Test Link');
    });

    it('should append icon container when trailingIcon is set', () => {
        const anchor: HTMLAnchorElement | null = fixture.nativeElement.querySelector('a');
        const iconContainer = anchor?.querySelector('[data-link-icon]');
        expect(iconContainer).toBeTruthy();
    });
});
