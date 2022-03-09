import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-timer',
  templateUrl: './show-timer.component.html',
  styleUrls: ['./show-timer.component.scss']
})
export class ShowTimerComponent implements OnInit {

  activeTimer: any;
  prevLength: number = -1;
  seconds: number = 0;
  @Input() eventDetails: any;
  @Output() timerExpired: any = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    let valid = false, pauseTimer = false;
    let lastIndex = this.eventDetails.length > 0 ? this.eventDetails.length - 1 : 0;
    if (this.eventDetails.length == 0) {
      clearInterval(this.activeTimer);
      this.seconds = 0;
      this.prevLength = -1;
      this.activeTimer = null;
    }
    if (this.prevLength == -1) {
      valid = true;
    } else if (this.prevLength > 0) {
      if (this.eventDetails.length != this.prevLength) {
        valid = true;

        //Pause Timer
        let eventType = this.eventDetails[lastIndex] ? this.eventDetails[lastIndex].eventType : "";

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
        if (this.eventDetails.length > 0) {
          this.prevLength = this.eventDetails.length;
        }
        if (this.prevLength > 1 && pauseTimer == false) {

        } else {
          this.seconds = this.eventDetails[lastIndex] ? this.eventDetails[lastIndex].duration : "--";
        }
        this.startTimer(this.seconds)
      }
    }
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
          // console.log("Clearing timer id--", this.activeTimer);
          this.timerExpired.emit();
          clearInterval(this.activeTimer);
        }
      }, 1000);
      this.activeTimer = timerId;
    }
  }

}
