import {Injectable} from '@angular/core';
import {RandomNumberService} from '../random-number/random-number.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {observable} from 'rxjs/symbol/observable';

@Injectable()
export class StringCalculatorService {

  constructor(private rngService: RandomNumberService) {
  }

  getSum(s: string): Observable<any> {
    console.log('R was replaced with 3.14');
    if (s === '') {
      return Observable.of(0);
    }
    else if (!s) {
      return Observable.throw('Get Gud');
    }

    let sum = 0;
    s.replace(/F/g, '5')
      .replace(/R/g, this.rngService.rng().toString())
      .replace(/\n/g, ',')
      .split(',')
      .forEach(n => sum += +n);

    const result = Math.ceil(sum);
    if (result % 3 === 0) {
      return Observable.of('fizz');
    }
    return Observable.of(result);
  }

  getRunningTotal(s: string): Observable<number> {
    const numbers = s.split(',');
    let previousValue = 0;
    const sum: number[] = [];
    numbers.forEach(number => {
      previousValue += +number;
      sum.push(previousValue);
    });
    return Observable.of(...sum);
  }
}
