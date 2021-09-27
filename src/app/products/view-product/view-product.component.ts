import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
productid:any;
prductData:any
  constructor(private activatedRoute :ActivatedRoute,private _productService:ProductsService) {
    this.productid=0;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productid=data.id
    })


    this._productService.viewProduct(this.productid).subscribe(res=>{
      console.log("product vew data",res)
      this.prductData= res

    })
  }

}
