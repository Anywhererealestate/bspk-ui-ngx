import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UITabGroup } from './tab-group';

describe('TabGroup', () => {
    let component: UITabGroup;
    let fixture: ComponentFixture<UITabGroup>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UITabGroup],
        }).compileComponents();

        fixture = TestBed.createComponent(UITabGroup);
        component = fixture.componentInstance;
        component.label.set('Example');
        component.options.set([
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
        ]);
        component.value.set('1');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
