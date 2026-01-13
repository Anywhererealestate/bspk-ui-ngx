import { ComponentFixture, TestBed } from '@angular/core/testing';
import { componentTestProps } from '../../utils/test-props';

import { UITag } from './tag';

describe('UITag', () => {
    let component: UITag;
    let fixture: ComponentFixture<UITag>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UITag],
        }).compileComponents();

        fixture = TestBed.createComponent(
            UITag,
            componentTestProps<UITag>({
                label: 'Test Tag',
            }),
        );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
