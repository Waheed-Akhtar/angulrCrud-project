import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { Routes,RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { ProductsByDateComponent } from './products-by-date/products-by-date.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ViewProductsComponent,
    DeleteProductComponent,
    ViewProductComponent,
    ViewAllProductsComponent,
    UpdateProductsComponent,
    ProductsByCategoryComponent,
    ProductsByDateComponent
  ],
  imports: [
    CommonModule,

    ProductsRoutingModule,
    // RouterModule.forChild (productModule)
  ]
})
export class ProductsModule { 
  constructor(){
    console.log("prosucts Module lodaded")
  }
}
