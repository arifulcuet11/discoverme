import { TestBed } from '@angular/core/testing';

import { ContentAsReadService } from './content-as-read.service';

describe('ContentAsReadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentAsReadService = TestBed.get(ContentAsReadService);
    expect(service).toBeTruthy();
  });
});
