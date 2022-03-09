import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { ControlCounterComponent } from './control-counter/control-counter.component';
import { ShowTimerComponent } from './show-timer/show-timer.component';
import { RouterModule, Routes } from '@angular/router';
import { StartPauseCounterComponent } from './start-pause-counter/start-pause-counter.component';

const routes:Routes = [
  { path: '', component:TimerComponent}
]

@NgModule({
  declarations: [TimerComponent, ControlCounterComponent, ShowTimerComponent, StartPauseCounterComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TimerModule { }
