import { TestBed } from '@angular/core/testing';

import { SearchallcustomerswithsellerService } from './searchallcustomerswithseller.service';

describe('SearchallcustomerswithsellerService', () => {
  let service: SearchallcustomerswithsellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchallcustomerswithsellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
