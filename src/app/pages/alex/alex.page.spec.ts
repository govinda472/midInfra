import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlexPage } from './alex.page';

describe('AlexPage', () => {
  let component: AlexPage;
  let fixture: ComponentFixture<AlexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
