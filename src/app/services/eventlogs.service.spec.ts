import { TestBed } from '@angular/core/testing';

import { EventlogsService } from './eventlogs.service';

describe('EventlogsService', () => {
  let service: EventlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
