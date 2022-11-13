import { TestBed } from '@angular/core/testing';

import { RackDataService } from './rack-data.service';

describe('RackDataService', () => {
  let service: RackDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RackDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
