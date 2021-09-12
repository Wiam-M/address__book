import { TestBed } from '@angular/core/testing';

import { ContactDataBaseService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  let service: ContactDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
