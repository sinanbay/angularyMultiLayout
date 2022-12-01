import { TestBed } from '@angular/core/testing';

import { NotifyCService } from './notify-c.service';

describe('NotifyCService', () => {
  let service: NotifyCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
