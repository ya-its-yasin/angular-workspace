import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../model/Product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  product:Product = new Product();

  constructor(private service:ProductService){}

  saveProduct(product:Product):any{
    this.service.saveProduct(product).subscribe(
      () => {  }
    );
  }

  onSubmit() {
     this.saveProduct(this.product);
    }

}
