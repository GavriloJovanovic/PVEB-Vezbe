import { TestBed } from '@angular/core/testing';

import { GoalService } from './goal.service';

describe('RegionService', () => {
  let service: GoalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
