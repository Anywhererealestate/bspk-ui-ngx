import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAlert } from './banner-alert';

describe('BannerAlert', () => {
  let component: BannerAlert;
  let fixture: ComponentFixture<BannerAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
