import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private getUrl = 'https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts';

  private getSingleProductUrl =
    'https://onlinetestapi.gerasim.in/api/Ecomm/GetProductById';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.getUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(this.getSingleProductUrl);
  }
}
