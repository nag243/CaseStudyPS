import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './dynamic-div.component';
import { Routes, RouterModule } from '@angular/router';
import{ScrollingModule} from '@angular/cdk/scrolling'


const route :Routes = [
  { path:'', component:DynamicDivComponent}
]


@NgModule({
  declarations: [DynamicDivComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    RouterModule.forChild(route)
  ]
})
export class DynamicDivModule { }
