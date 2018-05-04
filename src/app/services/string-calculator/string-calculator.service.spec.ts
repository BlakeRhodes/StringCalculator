import { TestBed, inject } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringCalculatorService]
    });
  });

  it('should be created', inject([StringCalculatorService], (service: StringCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
