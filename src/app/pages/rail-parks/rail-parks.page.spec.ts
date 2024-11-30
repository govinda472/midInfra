import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RailParksPage } from './rail-parks.page';

describe('RailParksPage', () => {
  let component: RailParksPage;
  let fixture: ComponentFixture<RailParksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RailParksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
