import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent }
];
// const routes:Routes =[
//   {path:'',children:[{
//     path:'',component:ProductsComponent
//   }]   
//   }] 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }