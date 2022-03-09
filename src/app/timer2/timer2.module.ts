import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTimer2Component } from './show-timer2/show-timer2.component';
import { ControlCounter2Component } from './control-counter2/control-counter2.component';
import { RouterModule, Routes } from '@angular/router';
import { Timer2Component } from './timer2.component';
import { StartPauseCounterComponent } from './start-pause-counter/start-pause-counter.component';

const routes:Routes =[
  {path:'', component:Timer2Component}
]

@NgModule({
  declarations: [
    ShowTimer2Component,
    ControlCounter2Component,
    Timer2Component,
    StartPauseCounterComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Timer2Module { }
