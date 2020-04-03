import { TestBed } from '@angular/core/testing';

import { MarkAsReadService } from './mark-as-read.service';

describe('MarkAsReadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkAsReadService = TestBed.get(MarkAsReadService);
    expect(service).toBeTruthy();
  });
});
