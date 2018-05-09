import {TestBed, inject} from '@angular/core/testing';

import {ReferenceService} from './reference.service';
import {OneTimePadService} from '../one-time-pad/one-time-pad.service';
import {Observable} from 'rxjs/Observable';

describe('ReferenceService', () => {
  let mockOneTimePadService: OneTimePadService;
  beforeEach(() => {
    mockOneTimePadService = new OneTimePadService();
    TestBed.configureTestingModule({
      providers: [
        ReferenceService,
        {provide: OneTimePadService, useValue: mockOneTimePadService}
      ]
    });
  });

  it('should be created', inject([ReferenceService], (service: ReferenceService) => {
    expect(service).toBeTruthy();
  }));

  it('should call the OneTimePadService', inject([ReferenceService], (service: ReferenceService) => {
    spyOn(mockOneTimePadService, 'getNumber').and.returnValue(Observable.of(4));

    service.doTest();

    expect(mockOneTimePadService.getNumber).toHaveBeenCalled();
  }));
});
