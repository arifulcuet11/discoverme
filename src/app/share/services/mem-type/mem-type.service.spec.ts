import { TestBed } from '@angular/core/testing';

import { MemTypeService } from './mem-type.service';

describe('MemTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemTypeService = TestBed.get(MemTypeService);
    expect(service).toBeTruthy();
  });
});
