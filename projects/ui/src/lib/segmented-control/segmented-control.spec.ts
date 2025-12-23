import { ComponentFixture, TestBed } from '@angular/core/testing';
import { componentTestProps } from '../../utils/componentTestProps';
import { UISegmentedControl } from './segmented-control';

describe('SegmentedControl', () => {
    let component: UISegmentedControl;
    let fixture: ComponentFixture<UISegmentedControl>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UISegmentedControl],
        }).compileComponents();

        fixture = TestBed.createComponent(
            UISegmentedControl,
            componentTestProps<UISegmentedControl>({
                label: 'Example',
                options: [
                    { value: '1', label: 'One' },
                    { value: '2', label: 'Two' },
                ],
                value: '1',
            }),
        );
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
