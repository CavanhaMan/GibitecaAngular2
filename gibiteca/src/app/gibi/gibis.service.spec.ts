import { TestBed } from '@angular/core/testing';

import { GibisService } from './gibis.service';

describe('GibisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GibisService = TestBed.get(GibisService);
    expect(service).toBeTruthy();
  });
});
