import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GilbertPage } from './gilbert.page';

describe('GilbertPage', () => {
  let component: GilbertPage;
  let fixture: ComponentFixture<GilbertPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GilbertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
