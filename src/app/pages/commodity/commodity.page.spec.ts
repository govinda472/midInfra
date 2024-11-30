import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommodityPage } from './commodity.page';

describe('CommodityPage', () => {
  let component: CommodityPage;
  let fixture: ComponentFixture<CommodityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
