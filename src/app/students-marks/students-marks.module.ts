import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsMarksComponent } from './students-marks.component';
import { SortPipe } from './sort.pipe';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {path:'',component:StudentsMarksComponent}
]

@NgModule({
  declarations: [StudentsMarksComponent, SortPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentsMarksModule { }
