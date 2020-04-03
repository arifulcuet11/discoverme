import { TestBed } from '@angular/core/testing';

import { VersionGuard } from './version.guard';

describe('VersionGuard', () => {
  let guard: VersionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.get(VersionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
