import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-show-timer2',
  templateUrl: './show-timer2.component.html',
  styleUrls: ['./show-timer2.component.scss']
})
export class ShowTimer2Component implements OnInit {
  // count:string;
  seconds: number = 0;
  activeTimer: any;
  prevLength: number = -1;
  constructor(private timerService: TimerService) {
   
  }

  ngOnInit(): void {
    this.timerService.counterDetails.subscribe(data => {
      let valid = false, pauseTimer = false;
      let lastIndex = data.eventDetails.length > 0 ? data.eventDetails.length - 1 : 0;
      if (data.eventDetails.length == 0) {
        clearInterval(this.activeTimer);
        this.seconds = 0;
        this.prevLength = -1;
        this.activeTimer = null;
      }
      if (this.prevLength == -1) {
        valid = true;
      } else if (this.prevLength > 0) {
        if (data.eventDetails.length != this.prevLength) {
          valid = true;

          //Pause Timer
          let eventType = data.eventDetails[lastIndex] ? data.eventDetails[lastIndex].eventType : "";

          if (eventType && eventType.toLowerCase() == 'pause') {
            pauseTimer = true;
          }
        }
      }

      if (valid) {
        if (pauseTimer) {
          let value = this.seconds;
          clearInterval(this.activeTimer);
          this.seconds = value;
        } else {
          if (data.eventDetails.length > 0) {
            this.prevLength = data.eventDetails.length;
          }
          if (this.prevLength > 1 && pauseTimer == false) {

          } else {
            this.seconds = data.eventDetails[lastIndex] ? data.eventDetails[lastIndex].duration : "--";

          }
          this.startTimer(this.seconds)
        }
      }
    })
  }

  startTimer(seconds: any) {
    let thisObj = this;
    if (seconds != '--') {
      seconds = parseInt(seconds);
      let timerId = setInterval(() => {
        if (seconds > 0) {
          seconds = seconds - 1;
          thisObj.seconds = seconds;
        } else {
          this.seconds = 0;
          this.prevLength = -1;
          this.timerService.hideTimeStamps = false;
          this.timerService.startedCount = 0;
          this.timerService.pausedCount = 0;
          this.timerService.eventsArray = [];

          this.timerService.refreshControlCounter.next(true);
          clearInterval(this.activeTimer);
        }
      }, 1000);
      this.activeTimer = timerId;
    }
  }
}
