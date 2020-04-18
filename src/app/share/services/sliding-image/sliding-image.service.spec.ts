import { TestBed } from '@angular/core/testing';

import { SlidingImageService } from './sliding-image.service';

describe('SlidingImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlidingImageService = TestBed.get(SlidingImageService);
    expect(service).toBeTruthy();
  });
});
