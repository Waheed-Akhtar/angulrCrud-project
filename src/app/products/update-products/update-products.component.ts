import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  productid:any;
  constructor(private activatedRoute :ActivatedRoute) {
    this.productid=0;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productid=data.id
    })
  }
}
