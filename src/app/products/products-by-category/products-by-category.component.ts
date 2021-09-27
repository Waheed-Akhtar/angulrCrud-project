import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { valHooks } from 'jquery';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {
  productList:any;
  productid:any;
  constructor(private activatedRoute :ActivatedRoute,private _productService:ProductsService){};
   

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      console.log("dataaaaaaaa.idddd",data)
      this.productid=data.id
    })
this._productService.searchByCategory(this.productid).subscribe(data=>{
  console.log("dataaaaaaaa",data)
  this.productList= data
 
//   this.productList= data.filter((checkAdult:any)=>{
//     console.log("checkAdult",checkAdult.categoryId)
//     return this.productid === checkAdult.categoryId;
//   })  
// console.log("orignal data",this.productList)
})
  }

}
