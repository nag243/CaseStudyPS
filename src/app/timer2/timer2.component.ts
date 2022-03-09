import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer2',
  templateUrl: './timer2.component.html',
  styleUrls: ['./timer2.component.scss']
})
export class Timer2Component implements OnInit {

  startedCount = 0;
  pausedCount = 0;
  eventsArray: Array<any> = [];
  hideTimeStamps: boolean;

  constructor(private timerService: TimerService) {
    // this.timerService.myMethod(this.startedCount)
  }
  ngOnInit(): void {
    this.timerService.counterDetails.subscribe((data) => {
      this.startedCount = data.startedCount;
      this.pausedCount = data.pausedCount;
      this.timerService.myMethodSubject.next({startedCount:this.startedCount,pausedCount:this.pausedCount})
      this.hideTimeStamps = data.hideTimeStamps;

      if (data.eventType == 'reset') {
        this.eventsArray = [];
      }

      if (data.eventDetails) {
        this.eventsArray = data.eventDetails;
      }
    });

    this.timerService.refreshControlCounter.subscribe(data => {
      this.startedCount = 0;
      this.pausedCount = 0;
      this.eventsArray = [];
      this.hideTimeStamps = false;
    })
  }
}
