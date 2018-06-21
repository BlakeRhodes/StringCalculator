import {Injectable} from '@angular/core';
import {RandomNumberService} from '../random-number/random-number.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {observable} from 'rxjs/symbol/observable';

@Injectable()
export class StringCalculatorService {

  constructor(private rngService: RandomNumberService) {
  }

  getSum(s: string): Observable<number> {
    if (s === '') {
      return Observable.of(0);
    } else if (!s) {
      return Observable.throw('Get Gud');
    }

    let result = 0;
    s.replace(/F/g, '5')
      .replace(/R/g, this.rngService.rng().toString())
      .replace(/\n/g, ',')
      .split(',')
      .forEach(n => result += +n);
    return Observable.of(Math.ceil(result));
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
