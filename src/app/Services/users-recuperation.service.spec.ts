import { TestBed } from '@angular/core/testing';

import { UsersRecuperationService } from './users-recuperation.service';

describe('UsersRecuperationService', () => {
  let service: UsersRecuperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersRecuperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
