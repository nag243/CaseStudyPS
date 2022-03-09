import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public myMethodSubject = new Subject<any>();
  counterDetails = new Subject<any>();
  refreshControlCounter = new Subject<any>();
  hideTimeStamps: boolean = false;
  startedCount = 0;
  pausedCount = 0;
  eventsArray: Array<any> = [];
  constructor() {
  }

  myMethod(data) {
    console.log(data);
    this.myMethodSubject.next(data);
  }
}
