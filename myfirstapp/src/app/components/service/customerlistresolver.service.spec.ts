import { TestBed } from '@angular/core/testing';

import { CustomerlistresolverService } from './customerlistresolver.service';

describe('CustomerlistresolverService', () => {
  let service: CustomerlistresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerlistresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
