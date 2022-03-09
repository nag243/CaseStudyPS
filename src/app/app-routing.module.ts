import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'/banner', pathMatch: 'full'},
  { path: 'banner', loadChildren: () => import('./floating-banner/floating-banner.module').then(x => x.FloatingBannerModule) },
  { path: 'products', loadChildren: () => import('./products/products/products.module').then(x => x.ProductsModule) },
  { path: 'students-marks', loadChildren: () => import('./students-marks/students-marks.module').then(x => x.StudentsMarksModule) },
  {path: 'dynamic-div', loadChildren: () => import ('./dynamic-div/dynamic-div.module').then(x => x.DynamicDivModule)},
  {path:'timer', loadChildren: () => import('./timer/timer.module').then(x => x.TimerModule)},
  {path:'timer2', loadChildren:() => import ('./timer2/timer2.module').then (x =>x.Timer2Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
