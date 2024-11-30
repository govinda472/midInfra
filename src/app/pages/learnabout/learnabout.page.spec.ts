import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LearnaboutPage } from './learnabout.page';

describe('LearnaboutPage', () => {
  let component: LearnaboutPage;
  let fixture: ComponentFixture<LearnaboutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnaboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
