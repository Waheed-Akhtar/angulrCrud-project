import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { ProductsByDateComponent } from './products-by-date/products-by-date.component';
import { ProductsComponent } from './products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'list-product', component: ViewAllProductsComponent },
  { path: 'create-product', component: AddProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'update-product/:id', component: UpdateProductsComponent },
  { path: 'search-bydate/:id', component: ProductsByDateComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'category/:id', component: ProductsByCategoryComponent },
  // { path: 'list-product', component: ViewAllProductsComponent },
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
