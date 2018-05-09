import { Injectable } from '@angular/core';
import {OneTimePadService} from '../one-time-pad/one-time-pad.service';

@Injectable()
export class ReferenceService {

  constructor(private oneTimePadService: OneTimePadService) { }

  doTest(): void {
    this.oneTimePadService.getNumber();
  }
}
