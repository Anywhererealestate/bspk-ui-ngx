import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIButton } from '../button/button';
import { UIModal } from './modal';

describe('UIModal', () => {
    let fixture: ComponentFixture<UIModal>;
    let component: UIModal;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIModal, UIButton],
        }).compileComponents();

        fixture = TestBed.createComponent(UIModal);
        component = fixture.componentInstance;
    });

    it('emits onClose when handleClose called', () => {
        const spy = jest.spyOn(component.onClose, 'emit');
        component.handleClose();
        expect(spy).toHaveBeenCalled();
    });

    it('computes cancelButtonLabel correctly', () => {
        component.cancelButton = true;
        expect(component.cancelButtonLabel).toBe('Cancel');
        component.cancelButton = 'Nope';
        expect(component.cancelButtonLabel).toBe('Nope');
    });
});
