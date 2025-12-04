import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIListItem } from './list-item';

describe('UIListItem', () => {
  let component: UIListItem;
  let fixture: ComponentFixture<UIListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
