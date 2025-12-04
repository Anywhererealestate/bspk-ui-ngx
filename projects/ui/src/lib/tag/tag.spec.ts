import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UITag } from './tag';

describe('UITag', () => {
    let component: UITag;
    let fixture: ComponentFixture<UITag>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UITag],
        }).compileComponents();

        fixture = TestBed.createComponent(UITag);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
