import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UITruncated } from './truncated';

describe('UITruncated', () => {
    let component: UITruncated;
    let fixture: ComponentFixture<UITruncated>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UITruncated],
        }).compileComponents();

        fixture = TestBed.createComponent(UITruncated);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
