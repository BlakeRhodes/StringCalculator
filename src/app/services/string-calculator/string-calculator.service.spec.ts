import { TestBed, inject } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';
import { Observable } from 'rxjs/Observable';
import { RandomNumberService } from '../random-number/random-number.service';

describe('StringCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringCalculatorService, RandomNumberService]
    });
  });

  it('should be created', inject([StringCalculatorService], (service: StringCalculatorService) => {
    expect(service).toBeTruthy();
  }));

  describe('getSum', () => {
    it('return zero when an empty string is passed in', inject([StringCalculatorService], (service: StringCalculatorService) => {
      const result = service.getSum('');

      expect(result).toEqual(Observable.of(0));
    }));

    it('should return the sum of two numbers in the string', inject([StringCalculatorService], (service: StringCalculatorService) => {
      const result = service.getSum('1,2');

      expect(result).toEqual(Observable.of(3));
    }));

    it('should return the sum of any numbers in the string', inject([StringCalculatorService], (service: StringCalculatorService) => {
      const result = service.getSum('1,2,3,4,5,6,7');

      expect(result).toEqual(Observable.of(28));
    }));

    it('should return the sum of numbers in the \\n separated string', inject([StringCalculatorService], (service: StringCalculatorService) => {
      const result = service.getSum('1\n7');

      expect(result).toEqual(Observable.of(8));
    }));

    it('should parse F as 5', inject([StringCalculatorService], (service: StringCalculatorService) => {
      const result = service.getSum('F,5');

      expect(result).toEqual(Observable.of(10));
    }));

    it('should handle random numbers', inject([StringCalculatorService, RandomNumberService], (service: StringCalculatorService, rngService: RandomNumberService) => {

      spyOn(rngService, 'rng').and.returnValue(Math.PI)

      const result = service.getSum('R,1');

      expect(result).toEqual(Observable.of(1 + Math.PI));
      expect(rngService.rng).toHaveBeenCalled();
    }));
  });
});
