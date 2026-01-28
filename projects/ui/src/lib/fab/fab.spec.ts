import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIFab } from './fab';

describe('UIFab', () => {
  let component: UIFab;
  let fixture: ComponentFixture<UIFab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIFab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIFab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
