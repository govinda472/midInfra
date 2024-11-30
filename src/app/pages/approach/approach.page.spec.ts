import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApproachPage } from './approach.page';

describe('ApproachPage', () => {
  let component: ApproachPage;
  let fixture: ComponentFixture<ApproachPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
