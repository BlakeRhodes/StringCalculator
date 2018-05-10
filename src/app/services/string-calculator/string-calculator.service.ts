import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/Observable/from';
import { expand } from 'rxjs/operators';
import { RandomNumberService } from '../random-number/random-number.service';

@Injectable()
export class StringCalculatorService {

  constructor(private rngService: RandomNumberService) { }

  getSum(s: string): Observable<number> {
    // Observable.of(s).pipe(expand(val => {
    //   return Observable.from(
    //   val
    //     .replace('\n', ',')
    //   .split(','))
    // )
    // });

    let result = 0;
    s.replace('F', '5')
      .replace('R', this.rngService.rng().toString())
      .replace('\n', ',')
      .split(',')
      .forEach(n => result += +n);
    return Observable.of(result);
  }
}