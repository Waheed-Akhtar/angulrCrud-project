import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { ProductsRoutingModule } from './products/products-routing.module';
const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(module => module.ProductsModule) }



];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ProductsRoutingModule,
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
