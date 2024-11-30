import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndustrialRailPage } from './industrial-rail.page';

describe('IndustrialRailPage', () => {
  let component: IndustrialRailPage;
  let fixture: ComponentFixture<IndustrialRailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialRailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
