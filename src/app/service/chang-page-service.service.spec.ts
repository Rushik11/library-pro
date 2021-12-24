import { TestBed } from '@angular/core/testing';

import { ChangPageServiceService } from './chang-page-service.service';

describe('ChangPageServiceService', () => {
  let service: ChangPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
