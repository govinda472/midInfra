import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortsPage } from './ports.page';

describe('PortsPage', () => {
  let component: PortsPage;
  let fixture: ComponentFixture<PortsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PortsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
