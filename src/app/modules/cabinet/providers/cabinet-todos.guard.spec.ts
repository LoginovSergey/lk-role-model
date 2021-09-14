import { TestBed } from '@angular/core/testing';

import { CabinetTodosGuard } from './cabinet-todos.guard';

describe('CabinetTodosGuard', () => {
  let guard: CabinetTodosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CabinetTodosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
