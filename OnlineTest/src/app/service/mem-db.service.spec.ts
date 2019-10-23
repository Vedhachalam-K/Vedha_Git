import { TestBed, inject } from '@angular/core/testing';

import { MemDbService } from './mem-db.service';

describe('MemDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemDbService]
    });
  });

  it('should be created', inject([MemDbService], (service: MemDbService) => {
    expect(service).toBeTruthy();
  }));
});
