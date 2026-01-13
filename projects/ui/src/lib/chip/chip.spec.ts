import { ComponentFixture, TestBed } from '@angular/core/testing';

import { componentTestProps } from '../../utils/test-props';
import { UIChip } from './chip';

describe('UIChip', () => {
    let component: UIChip;
    let fixture: ComponentFixture<UIChip>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIChip],
        }).compileComponents();

        fixture = TestBed.createComponent(
            UIChip,
            componentTestProps<UIChip>({
                label: 'Test Chip',
                // Add any input properties here if needed
            }),
        );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
