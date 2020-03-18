import { TestBed } from '@angular/core/testing';

import { SubCatagoryService } from './sub-catagory.service';

describe('SubCatagoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubCatagoryService = TestBed.get(SubCatagoryService);
    expect(service).toBeTruthy();
  });
});
