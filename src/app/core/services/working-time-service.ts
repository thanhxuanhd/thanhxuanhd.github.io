import { Injectable } from '@angular/core';
import { IWorkTime } from '../models';
import workTimes from 'src/assets/configs/works.json';

@Injectable({
  providedIn: 'root'
})
export class WorkTimeService {
  private workTimes: Array<IWorkTime> = [];


  getWorkTimes(): Array<IWorkTime> {

    if (this.workTimes && this.workTimes.length === 0) {
      this.workTimes = workTimes;
    }

    return this.workTimes;
  }

}
