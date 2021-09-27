import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { Routes,RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { ProductsByDateComponent } from './products-by-date/products-by-date.component';
import { SiteFrameworkModule } from '../site-framework/site-framework.module';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ViewProductComponent,
    DeleteProductComponent,
    ViewProductComponent,
    ViewAllProductsComponent,
    UpdateProductsComponent,
    ProductsByCategoryComponent,
    ProductsByDateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SiteFrameworkModule,

    ProductsRoutingModule,
    //  RouterModule.forChild(routes:any)
  ]
})
export class ProductsModule { 
  constructor(){
    console.log("prosucts Module lodaded")
  }
}


