import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  startedCount = 0; // For Started Count
  pausedCount = 0; // For Paused Count
  eventsArray: Array<any> = [];
  hideTimeStamps: boolean;
  doRefreshControlCounter: any;

  constructor() { }

  ngOnInit(): void {
  }

  updateOtherComponents(e: any) {
    this.hideTimeStamps = false;
    if (e.eventType == 'start') {
      this.startedCount = e.countStartEvent
    } else if (e.eventType == 'pause') {
      this.pausedCount = e.countPauseEvent;
    } else if (e.eventType == 'reset') {
      this.startedCount = 0;
      this.pausedCount = 0;
      this.hideTimeStamps = true;
    }

    if (e.eventType == 'reset') {
      this.eventsArray = [];
    } else {
      this.eventsArray.push({ eventType: e.eventType, time: Date.now(), duration: e.timerDuration });
    }
  }

  refreshControlCounter() {
    this.resetCounterComponent();
  }

  resetCounterComponent() {
    this.eventsArray = [];
    this.startedCount = 0;
    this.pausedCount = 0;
    this.hideTimeStamps = true;
    this.doRefreshControlCounter = new Object();
    this.doRefreshControlCounter.refresh = true;
  }
}

