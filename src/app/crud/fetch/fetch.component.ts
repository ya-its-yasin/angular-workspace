import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.css'
})
export class FetchComponent implements OnInit{

  products:Product[]=[]

  constructor(private service:ProductService){}

  ngOnInit():void{
    this.products=this.getProducts();
  }

  getProducts():any{
    this.service.getProducts().subscribe( products =>{
      this.products=products;
    });
  }

}
