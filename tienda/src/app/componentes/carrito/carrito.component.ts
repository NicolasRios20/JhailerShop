import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SrviciosService } from '../../services/srvicios.service';
import Swal from "sweetalert2";
import { Producto } from 'src/app/models/product.model';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  myShoppingCart: any;
  total = 0;
  datosTabla: any = []
  cantidad = 0;
  precio = 0;
  
  productos: any [] = []
  

  constructor(
    private srviciosService: SrviciosService,
  ) { 
    this.myShoppingCart = this.srviciosService.getMyShoppingCart();
    this.total = this.myShoppingCart.reduce((sum: any,item: { price: any; }) => sum + item.price, 0);
    const producto = localStorage.getItem('productos');
    if (producto !== null) {
      this.productos = JSON.parse(producto);
    } else {
    this.productos = [];
    }
    for (let i = 0; i < this.productos.length; i++) {
      const nuevaFila = {
      columna1: this.productos[i].id_producto,
      columna2 : this.productos[i].nombre_producto,
      columna3: this.cantidad,
      columna4: this.productos[i].precio_producto,
      columna5: this.precio,
    }

    this.datosTabla.push(nuevaFila)
    }

  }

  ngOnInit(): void { }

  eliminar(){
    localStorage.clear();
    this.exitoso();
  }

  exitoso(){
    Swal.fire({
      title: 'COMPRA EXITOSA',
      icon: 'success',
      showCloseButton: true,
      confirmButtonText: '<a href="http://localhost:4200/productos" style="text-color: white;" t>OK</a>'
    })
  }

  /*calcularTotal(): number {
    let total = 0;
    for (let producto of this.productos) {
      total += producto.precio;
    }
    return total;
  }*/

  incrementar(){
    this.cantidad = this.cantidad+1
    console.log(this.cantidad)
  }

}
