import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/product.model';
import { LoginI } from '../models/login.interface';
import { ResponseI } from "../models/response.interface";
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class SrviciosService {

  private myShoppingCart: Producto[] = [];
 
  constructor() { }

  addProductos(producto: Producto){
    const productos = JSON.parse(localStorage.getItem("productos") || "[]" ) ;
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos))
  }

  getMyShoppingCart(){
    return JSON.parse(localStorage.getItem("productos") || "[]" ) ;
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum,item) => sum + item.precio_producto, 0);
  }

}
