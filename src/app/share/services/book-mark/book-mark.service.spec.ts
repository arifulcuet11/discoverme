import { TestBed } from '@angular/core/testing';

import { BookMarkService } from './book-mark.service';

describe('BookMarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookMarkService = TestBed.get(BookMarkService);
    expect(service).toBeTruthy();
  });
});
