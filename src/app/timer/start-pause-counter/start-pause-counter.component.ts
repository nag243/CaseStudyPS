import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-start-pause-counter',
  templateUrl: './start-pause-counter.component.html',
  styleUrls: ['./start-pause-counter.component.scss']
})
export class StartPauseCounterComponent implements OnInit {

  @Input() startedvalue:any;
  @Input() pausedValue:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
