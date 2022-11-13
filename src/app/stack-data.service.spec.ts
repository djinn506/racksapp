import { TestBed } from '@angular/core/testing';

import { StackDataService } from './stack-data.service';

describe('StackDataService', () => {
  let service: StackDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
