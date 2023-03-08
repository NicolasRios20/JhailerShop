import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SrviciosService } from '../../services/srvicios.service';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  myShoppingCart: any;
  total = 0;
  datosTabla: any = []
  cantidad = 1;
  precio = 0;
  
  productos: any [] = []
  

  constructor(
    private srviciosService: SrviciosService,private route: Router,private location: Location

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


  
  incrementarCantidad(index: number) {
    this.datosTabla[index].columna3++;
  }

  decrementarCantidad(index: number) {
    //this.datosTabla[index].columna3--;
    if (this.datosTabla[index].columna3 == 1) {
      
    }else{
      this.datosTabla[index].columna3--;
    }
  }

  eliminarCantidad(id: any){
    console.log(id)
    let produc: any
    produc = localStorage.getItem('productos')
    this.productos = JSON.parse(produc);
    for (let i = 0; i < this.productos.length; i++) {
      // Comparar el ID del producto actual con el ID a eliminar
      if (this.productos[i].id_producto === id) {
          // Eliminar el producto del arreglo
          //this.productos.splice(i, 1);
          console.log(this.productos.splice(i, 1), "hola")
      }
      console.log(this.productos, 'hola')
      let produ: any = this.productos
      localStorage.removeItem('productos')
      localStorage.setItem('productos',JSON.stringify(produ))
      location.reload();
  }


  }


}
