import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-by-date',
  templateUrl: './products-by-date.component.html',
  styleUrls: ['./products-by-date.component.css']
})
export class ProductsByDateComponent implements OnInit {

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
