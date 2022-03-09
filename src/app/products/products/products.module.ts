import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { Order } from './order.pipe';
import { RouterModule, Routes } from '@angular/router';

const route :Routes = [
  {path:'', component:ProductsComponent}
]


@NgModule({
  declarations: [ProductsComponent,Order],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
    
  ]
})
export class ProductsModule { }
