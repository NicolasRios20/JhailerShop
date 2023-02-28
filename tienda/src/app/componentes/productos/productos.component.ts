import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/product.model';
import jtw_decode from "jwt-decode";
import { ProductosService } from 'src/app/services/productos.service';
import { SrviciosService } from 'src/app/services/srvicios.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  usuario: 0 = 0;
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

    if(localStorage.getItem('token')){
      let datoToken: any = localStorage.getItem('token');
      let iduser: any = jtw_decode(datoToken)
      this.usuario = iduser.rol;
    }else{
      this.usuario = 0;
    }

    this.productosService.getAllproductos()
    .subscribe(data => {
        this.productos = data.reverse();
    });
 
  }

  onAddToShoppingCart(produtos:Producto){
    this.srviciosService.addProductos(produtos)
    this.total = this.srviciosService.getTotal();
  }
}
