import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-start-pause-counter2',
  templateUrl: './start-pause-counter.component.html',
  styleUrls: ['./start-pause-counter.component.scss']
})
export class StartPauseCounterComponent implements OnInit {

  startedCount: number;
  pausedCount: number;
  constructor(private timerService: TimerService) {

  }

  ngOnInit(): void {
    this.timerService.myMethodSubject.subscribe((data) => {
      this.startedCount = data.startedCount
      this.pausedCount = data.pausedCount
    }
    );
  }
}
