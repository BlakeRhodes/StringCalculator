import {Injectable} from '@angular/core';
import {RandomNumberService} from '../random-number/random-number.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class StringCalculatorService {

  constructor(private rngService: RandomNumberService) {
  }

  getSum(s: string): Observable<number> {
    // Observable.of(s).pipe(expand(val => {
    //   return Observable.from(
    //   val
    //     .replace('\n', ',')
    //   .split(','))
    // )
    // });

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
}
