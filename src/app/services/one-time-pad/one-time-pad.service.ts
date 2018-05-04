import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OneTimePadService {

  values = [1, 2, 3, 4, 5, 6, 7, 8];
  private page = 0;

  constructor() {
  }

  getNumber(): Observable<number> {
    return new Observable<number>(x => {
      x.next(this.values[this.page]);
      this.page++;
      if ( this.page === this.values.length) {
        this.page = 0;
      }
    });
  }
}
