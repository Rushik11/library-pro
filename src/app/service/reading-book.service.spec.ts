import { TestBed } from '@angular/core/testing';

import { ReadingBookService } from './reading-book.service';

describe('ReadingBookService', () => {
  let service: ReadingBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
