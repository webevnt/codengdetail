import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url:string="/assets/products.json";
  constructor(private http:HttpClient) { }
  
  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url);
  }

}
