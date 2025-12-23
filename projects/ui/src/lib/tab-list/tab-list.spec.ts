import { ComponentFixture, TestBed } from '@angular/core/testing';
import { componentTestProps } from '../../utils/componentTestProps';
import { UITabList } from './tab-list';

describe('TabList', () => {
    let component: UITabList;
    let fixture: ComponentFixture<UITabList>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UITabList],
        }).compileComponents();

        fixture = TestBed.createComponent(
            UITabList,
            componentTestProps<UITabList>({
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
