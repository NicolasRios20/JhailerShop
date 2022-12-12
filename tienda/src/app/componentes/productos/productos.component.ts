import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/product.model';

import { ProductosService } from 'src/app/services/productos.service';
import { SrviciosService } from 'src/app/services/srvicios.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  myShoppingCart: Producto[] = [];
  total=0;
  productos: Producto[] = [];
  

  constructor(
    private srviciosService: SrviciosService,
    private productosService: ProductosService,
    ) { 
    this.myShoppingCart = this.srviciosService.getMyShoppingCart();
   }

  ngOnInit(): void {
    this.productosService.getAllproductos()
    .subscribe(data => {
        this.productos = data;
    })
  }

  onAddToShoppingCart(produtos:Producto){
    this.srviciosService.addProductos(produtos)
    this.total = this.srviciosService.getTotal();
  }
}
