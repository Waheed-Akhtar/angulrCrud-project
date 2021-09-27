import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {routesConst} from '../routesConst'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  url= 'http://localhost:3000/'
  constructor(private _http:HttpClient) { }

createProduct(productBody:any):Observable<any>{
  const productUrl = 'http://localhost:3000/products'
  return this._http.post(productUrl,productBody)

}
updateProduct(productBody:any,productId:any):Observable<any>{
  const productUrl = 'http://localhost:3000/products/'+productId;
  return this._http.post(productUrl,productBody)

}
deleteProduct(productId:any):Observable<any>{
  const productUrl = 'http://localhost:3000/products/'+productId;
  return this._http.delete(productUrl)

}
// search(productBody:any):Observable<any>{
//   const productUrl = 'http://localhost:3000/products'
//   return this._http.get(productUrl)

// }
getAllProducts():Observable<any>{
  const productUrl = 'http://localhost:3000/' +routesConst.productsapi;
  return this._http.get(productUrl)
}
searchByCategory(categoryId:any):Observable<any>{
  const productUrl = 'http://localhost:3000/products?categoryId='+ categoryId;
  return this._http.get(productUrl)
}
SearchByDate(dateparms:any):Observable<any>{
  const productUrl = 'http://localhost:3000/products/'+ dateparms;
 return this._http.get(productUrl)
}
getAllCategories():Observable<any>{
  let categorriesUrl = 'http://localhost:3000/' + routesConst.allCategories;
 return this._http.get(categorriesUrl)
}
viewProduct(productid:any){
  let viewproducts = 'http://localhost:3000/' + routesConst.allCategories;
  return this._http.get(viewproducts)
}


}
