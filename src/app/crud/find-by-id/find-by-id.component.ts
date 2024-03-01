import { Component } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-find-by-id',
  templateUrl: './find-by-id.component.html',
  styleUrl: './find-by-id.component.css'
})
export class FindByIdComponent {

  constructor(private service:ProductService){}

  product:Product = new Product();
  
  findProduct():any {
    this.service.findProduct(this.product.pid).subscribe(
      (product) => this.product = product
    );
    }

}
