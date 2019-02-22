import { TestBed } from '@angular/core/testing';

import { MagasinsService } from './magasins.service';

describe('MagasinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagasinsService = TestBed.get(MagasinsService);
    expect(service).toBeTruthy();
  });
});
