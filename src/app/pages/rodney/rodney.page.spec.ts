import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RodneyPage } from './rodney.page';

describe('RodneyPage', () => {
  let component: RodneyPage;
  let fixture: ComponentFixture<RodneyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RodneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 