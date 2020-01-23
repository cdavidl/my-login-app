import { TestBed, async, inject } from '@angular/core/testing';

import { CanactivateviaauthGuard } from './canactivateviaauth.guard';

describe('CanactivateviaauthguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanactivateviaauthGuard]
    });
  });

  it('should ...', inject([CanactivateviaauthGuard], (guard: CanactivateviaauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
