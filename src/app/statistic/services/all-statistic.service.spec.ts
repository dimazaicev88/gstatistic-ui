import { TestBed } from '@angular/core/testing';

import { AllStatisticService } from './all-statistic.service';

describe('AllStatisticService', () => {
  let service: AllStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
