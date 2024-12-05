import { TestBed } from '@angular/core/testing';

import { ShowlogoService } from './showlogo.service';

describe('ShowlogoService', () => {
  let service: ShowlogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowlogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
