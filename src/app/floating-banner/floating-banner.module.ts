import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingBannerComponent } from './floating-banner.component';
import { RouterModule, Routes } from '@angular/router';

const route :Routes= [
  {path:'', component:FloatingBannerComponent}
]

@NgModule({
  declarations: [FloatingBannerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class FloatingBannerModule { }
