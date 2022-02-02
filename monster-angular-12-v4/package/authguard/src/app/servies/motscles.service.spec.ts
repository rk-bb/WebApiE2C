import { TestBed } from '@angular/core/testing';

import { MotsclesService } from './motscles.service';

describe('MotsclesService', () => {
  let service: MotsclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotsclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
