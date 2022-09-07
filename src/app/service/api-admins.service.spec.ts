import { TestBed } from '@angular/core/testing';

import { ApiAdminsService } from './api-admins.service';

describe('ApiAdminsService', () => {
  let service: ApiAdminsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAdminsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
