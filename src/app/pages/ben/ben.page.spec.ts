import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenPage } from './ben.page';

describe('BenPage', () => {
  let component: BenPage;
  let fixture: ComponentFixture<BenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
