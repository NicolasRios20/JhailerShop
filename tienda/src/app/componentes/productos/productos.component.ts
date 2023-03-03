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
  producto1: any[]=[];
  producto : any = [];
  nico: any;
  
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
        this.productos = data;
    });
 
  }

  onAddToShoppingCart(produtos:Producto){
    this.producto = produtos
    let id = this.producto.id_producto
    let idProducto:any
    let produc: any
    
    if (!localStorage.getItem('productos')) {
      localStorage.setItem('productos',JSON.stringify([]))
      this.srviciosService.addProductos(produtos)
      
    }else{
      produc = localStorage.getItem('productos')
      if (produc !== null) {
        this.nico = JSON.parse(produc);
        for (let i = 0; i < this.nico.length; i++) {
          idProducto = this.nico[i].id_producto;
          this.producto1.push(idProducto)
          console.log(this.producto1)
          //console.log(`id_producto of object ${i}: ${idProducto}`);
          if (id == this.producto1) {
            console.log("ya existe")
          } else {
            this.srviciosService.addProductos(produtos)
            console.log("se agrego")
          }
  
        }
      }
    }
    console.log(produc)



    this.total = this.srviciosService.getTotal();
  }
}
