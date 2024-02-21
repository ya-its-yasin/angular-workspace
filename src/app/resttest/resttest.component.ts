import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resttest',
  templateUrl: './resttest.component.html',
  styleUrl: './resttest.component.css'
})
export class ResttestComponent {

  private url:string = "https://jsonplaceholder.typicode.com/todos";
  private data:any;
  constructor(private http:HttpClient){}

  ngOnInit(): void{
    console.log("form onInit() ...");
    this.http.get(this.url)
    .subscribe((resData)=>{
      this.data = resData;
      console.log(this.data)
    });
  }
}

/*


https://jsonplaceholder.typicode.com/todos


http://localhost:8080/product/v1/allproducts
http://localhost:8080/product/v1/product/{id}
http://localhost:8080/product/v1/addproduct
http://localhost:8080/product/v1/modifyproduct
http://localhost:8080/product/v1/deleteproduct

*/
