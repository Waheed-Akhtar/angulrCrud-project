import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { routesConst } from 'src/app/routesConst';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories:any
  constructor(private _productService:ProductsService,private router:Router) { }
  routesConst = routesConst
  ngOnInit(): void {
   this._productService.getAllCategories().subscribe(category=>{
     console.log('allcategories',category)
    this.categories=category
    })
  }


}
