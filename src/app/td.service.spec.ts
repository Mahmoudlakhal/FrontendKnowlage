import { TestBed } from '@angular/core/testing';

import { TDService } from './td.service';

describe('TDService', () => {
  let service: TDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
