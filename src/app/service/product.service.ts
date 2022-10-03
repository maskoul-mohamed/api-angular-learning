import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  getProducts(limit: number):Observable<Product[]>{
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products?limit='+limit);
  }
}
