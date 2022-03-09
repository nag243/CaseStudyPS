import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-control-counter2',
  templateUrl: './control-counter2.component.html',
  styleUrls: ['./control-counter2.component.scss']
})
export class ControlCounter2Component implements OnInit {

  startEvent: boolean = false; // not started initially
  disableInput: boolean = false;
  countStartEvent: number = 0;
  countPauseEvent: number = 0;
  eventDetails: Array<any> =[];
  @ViewChild('timerInput', { static: true }) timerInput: ElementRef;
  showErrorMsg: string = '';

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.refreshControlCounter.subscribe(data => {
      this.startEvent = false; // initial value
      this.disableInput = false;
      this.countStartEvent = 0;
      this.countPauseEvent = 0;
      this.eventDetails = [];
      this.timerInput.nativeElement.value = null;
    })
  }

  startPauseCounter() {
    if (parseInt(this.timerInput.nativeElement.value)) {
      this.disableInput = true;
      this.showErrorMsg = '';
      this.startEvent = !this.startEvent;

      if (this.startEvent) {
        // Event start
        this.countStartEvent = this.countStartEvent + 1;
      } else {
        // Event Pause
        this.countPauseEvent = this.countPauseEvent + 1;
      }
      let eventItem = {
        eventType: this.startEvent ? 'start' : 'pause',
        time: Date.now(),
        duration: this.timerInput.nativeElement.value
      };
      this.eventDetails.push(eventItem);

      this.timerService.counterDetails.next({
        hideTimeStamps: false, startedCount: this.countStartEvent,
        pausedCount: this.countPauseEvent, eventDetails: this.eventDetails
      })

    } else {
      this.showErrorMsg = 'Invalid Input';
    }
  }

  resetTimer() {
    this.eventDetails = [];
    this.timerService.counterDetails.next({
      hideTimeStamps: true, startedCount: 0,
      pausedCount: 0, eventType:'reset', eventDetails: []
    })

    this.disableInput = false;
    this.startEvent = false;
    this.countStartEvent = 0;
    this.countPauseEvent = 0;
    this.timerInput.nativeElement.value = null;
  }

}
