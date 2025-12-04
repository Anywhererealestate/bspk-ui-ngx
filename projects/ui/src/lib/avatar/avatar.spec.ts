import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIAvatar } from './avatar';

describe('UIAvatar', () => {
    let component: UIAvatar;
    let fixture: ComponentFixture<UIAvatar>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIAvatar],
        }).compileComponents();

        fixture = TestBed.createComponent(UIAvatar);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
