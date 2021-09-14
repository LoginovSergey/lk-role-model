import { TestBed } from '@angular/core/testing';

import { CabinetResolver } from './cabinet.resolver';

describe('CabinetResolver', () => {
  let resolver: CabinetResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CabinetResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
