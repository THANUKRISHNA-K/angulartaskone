import { TestBed } from '@angular/core/testing';

import { SuperauthService } from './superauth.service';

describe('SuperauthService', () => {
  let service: SuperauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
