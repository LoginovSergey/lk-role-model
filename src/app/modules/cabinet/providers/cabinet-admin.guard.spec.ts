import { TestBed } from '@angular/core/testing';

import { CabinetAdminGuard } from './cabinet-admin.guard';

describe('CabinetAdminGuard', () => {
  let guard: CabinetAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CabinetAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
