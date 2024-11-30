import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataConnectivityPage } from './data-connectivity.page';

describe('DataConnectivityPage', () => {
  let component: DataConnectivityPage;
  let fixture: ComponentFixture<DataConnectivityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DataConnectivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
