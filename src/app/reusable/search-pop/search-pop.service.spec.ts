import { TestBed } from '@angular/core/testing';

import { SearchPopService } from './search-pop.service';

describe('SearchPopService', () => {
  let service: SearchPopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
