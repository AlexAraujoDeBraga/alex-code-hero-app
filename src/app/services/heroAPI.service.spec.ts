import { TestBed } from '@angular/core/testing';

import { HeroAPIService } from './heroAPI.service';

describe('HeroService', () => {
  let service: HeroAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
