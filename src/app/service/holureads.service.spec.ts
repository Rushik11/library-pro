import { TestBed } from '@angular/core/testing';

import { HolureadsService } from './holureads.service';

describe('HolureadsService', () => {
  let service: HolureadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolureadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
