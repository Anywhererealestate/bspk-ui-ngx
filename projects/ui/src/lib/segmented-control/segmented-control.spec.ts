import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UISegmentedControl } from './segmented-control';

describe('SegmentedControl', () => {
    let component: UISegmentedControl;
    let fixture: ComponentFixture<UISegmentedControl>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UISegmentedControl],
        }).compileComponents();

        fixture = TestBed.createComponent(UISegmentedControl);
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
