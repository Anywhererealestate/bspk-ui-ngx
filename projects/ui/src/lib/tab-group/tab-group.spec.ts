import { ComponentFixture, TestBed } from '@angular/core/testing';
import { componentTestProps } from '../../utils/componentTestProps';
import { UITabGroup } from './tab-group';

describe('TabGroup', () => {
    let component: UITabGroup;
    let fixture: ComponentFixture<UITabGroup>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UITabGroup],
        }).compileComponents();

        // make stuff
        fixture = TestBed.createComponent(
            UITabGroup,
            componentTestProps<UITabGroup>({
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
