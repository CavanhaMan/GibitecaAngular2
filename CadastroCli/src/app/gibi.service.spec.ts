import { TestBed } from '@angular/core/testing';

import { GibiService } from './gibi.service';

describe('GibiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GibiService = TestBed.get(GibiService);
    expect(service).toBeTruthy();
  });
});
