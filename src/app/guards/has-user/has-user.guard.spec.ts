import { TestBed, async, inject } from '@angular/core/testing';

import { HasUserGuard } from './has-user.guard';

describe('HasUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HasUserGuard]
    });
  });

  it('should ...', inject([HasUserGuard], (guard: HasUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
