import { TestBed } from '@angular/core/testing';

import { ContentLikeService } from './content-like.service';

describe('ContentLikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentLikeService = TestBed.get(ContentLikeService);
    expect(service).toBeTruthy();
  });
});
