import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SrviciosService } from '../../services/srvicios.service';
import Swal from "sweetalert2";


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  myShoppingCart: any;
  total = 0;
  
  constructor(
    private srviciosService: SrviciosService,
  ) { 
    this.myShoppingCart = this.srviciosService.getMyShoppingCart();
    this.total = this.myShoppingCart.reduce((sum: any,item: { price: any; }) => sum + item.price, 0);
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

}
