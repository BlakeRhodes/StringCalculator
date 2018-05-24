import {TestBed, inject} from '@angular/core/testing';

import {StringCalculatorService} from './string-calculator.service';
import {Observable} from 'rxjs/Observable';
import {RandomNumberService} from '../random-number/random-number.service';

fdescribe('StringCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringCalculatorService, RandomNumberService]
    });
  });

  it('should be created', inject([StringCalculatorService], (service: StringCalculatorService) => {
    expect(service).toBeTruthy();
  }));

  describe('getSum', () => {
    it('return zero when an empty string is passed in',
      inject([StringCalculatorService], (service: StringCalculatorService) => {
        const result = service.getSum('');

        expect(result).toEqual(Observable.of(0));
      }));

    it('should return the sum of two numbers in the string',
      inject([StringCalculatorService], (service: StringCalculatorService) => {
        const result = service.getSum('1,2');

        expect(result).toEqual(Observable.of(3));
      }));

    it('should return the sum of any numbers in the string',
      inject([StringCalculatorService], (service: StringCalculatorService) => {
        const result = service.getSum('1,2,3,4,5,6,7');

        expect(result).toEqual(Observable.of(28));
      }));

    it('should return the sum of numbers in the \\n separated string',
      inject([StringCalculatorService], (service: StringCalculatorService) => {
        const result = service.getSum('1\n7\n');

        expect(result).toEqual(Observable.of(8));
      }));

    it('should parse F as 5',
      inject([StringCalculatorService], (service: StringCalculatorService) => {
        const result = service.getSum('F,F,5');

        expect(result).toEqual(Observable.of(15));
      }));

    it('should handle random numbers',
      inject([StringCalculatorService, RandomNumberService], (service: StringCalculatorService, rngService: RandomNumberService) => {

        spyOn(rngService, 'rng').and.returnValue(Math.PI);

        const result = service.getSum('R,1');

        expect(result).toEqual(Observable.of(5));
        expect(rngService.rng).toHaveBeenCalled();
      }));

    it('should round up the sum if it includes a random value',
      inject([StringCalculatorService, RandomNumberService], (service: StringCalculatorService, rngService: RandomNumberService) => {
        spyOn(rngService, 'rng').and.returnValue(Math.PI);

        const result = service.getSum('R,1');

        expect(result).toEqual(Observable.of(5));
        expect(rngService.rng).toHaveBeenCalled();
      }));

    it('should round up the sum when there are multiple decimals to add',
      inject([StringCalculatorService, RandomNumberService], (service: StringCalculatorService, rngService: RandomNumberService) => {
        spyOn(rngService, 'rng')
          .and.returnValue(Math.PI);

        const result = service.getSum('R,R,1');

        expect(result).toEqual(Observable.of(8));
      }));

    it('should throw error for null string',
      inject([StringCalculatorService, RandomNumberService], (service: StringCalculatorService, rngService: RandomNumberService) => {

        const result = service.getSum(null);

        result.subscribe(() => {
          },
          (error) => {
            expect(error).toEqual('Get Gud');
          });
      }));
  });
});
