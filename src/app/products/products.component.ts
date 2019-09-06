import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products=[];

  constructor(private _productService:ProductsService) { }

  ngOnInit() {
    this._productService.getProducts()
    .subscribe(data=>this.products=data);
  }

}
