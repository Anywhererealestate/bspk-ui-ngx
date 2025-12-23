import { ComponentFixture, TestBed } from '@angular/core/testing';
import { componentTestProps } from '../../utils/componentTestProps';
import { UIAvatar } from './avatar';

describe('UIAvatar', () => {
    let component: UIAvatar;
    let fixture: ComponentFixture<UIAvatar>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIAvatar],
        }).compileComponents();

        fixture = TestBed.createComponent(
            UIAvatar,
            componentTestProps<UIAvatar>({
                name: 'Test User',
            }),
        );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
