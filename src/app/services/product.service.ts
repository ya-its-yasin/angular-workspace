import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8090/product/v1/allproducts");
  }

  saveProduct(product:Product):Observable<Object>{
    return this.http.post("http://localhost:8090/product/v1/addproduct",product);
  }
}
