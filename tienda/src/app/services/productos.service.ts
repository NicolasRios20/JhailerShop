import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, CrearProducto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  url = '/api/products/';

  constructor(
    private http: HttpClient
  ) { }

  getAllproductos(){
    return this.http.get<Producto[]>(this.url);
  }

  create(data: CrearProducto){
    
    return this.http.post<Producto>(this.url,data);

  }

}
