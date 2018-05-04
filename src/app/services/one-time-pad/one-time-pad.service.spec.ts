import {TestBed, inject} from '@angular/core/testing';
import {OneTimePadService} from './one-time-pad.service';
import 'rxjs/add/observable/of';


describe('OneTimePadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneTimePadService]
    });
  });

  it('should be created', inject([OneTimePadService], (service: OneTimePadService) => {
    expect(service).toBeTruthy();
  }));

  describe('getNumber', () => {
    it('should return next number on list', inject([OneTimePadService], (service: OneTimePadService) => {
      service.values = [1, 2];
      const result = service.getNumber();
      result.subscribe(value => {
        expect(value).toEqual(1 );
      });
      result.subscribe(value => {
        expect(value).toEqual(2);
      });
    }));
    it('should start over after last number is returned', inject([OneTimePadService], (service: OneTimePadService) => {
      service.values = [1];
      const result = service.getNumber();
      result.subscribe(value => {
        expect(value).toEqual(1);
      });
      result.subscribe(value => {
        expect(value).toEqual(1);
      });
    }));
  });
});
