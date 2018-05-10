import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumberService {

  constructor() { }

  rng(): number {
    return Math.random();
  }
}
