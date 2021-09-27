import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
products:any
  constructor(private _productServie:ProductsService) { }

  ngOnInit(): void {
    this._productServie.getAllProducts().subscribe((productData:any)=>{
      this.products=productData

    })
  }

}
