import { TestBed } from '@angular/core/testing';

import { UserActivationService } from './user-activation.service';

describe('UserActivationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserActivationService = TestBed.get(UserActivationService);
    expect(service).toBeTruthy();
  });
});
