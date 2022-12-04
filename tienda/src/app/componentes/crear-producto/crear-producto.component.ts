import { Component, OnInit } from '@angular/core';
import { CrearProducto, Producto } from '../../models/product.model';
import { ProductosService } from 'src/app/services/productos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productos: Producto[] = [];
  
  producCreat: Producto = {
    id: '',
    nombre_producto: '',
    cantidad: 0,
    id_categoria: 0,
    precio_producto: 0,
    descripcion: '',
  }

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    categoria:new FormControl('',Validators.required)
  });
  
  constructor(
    private productosService: ProductosService,
    ) {};

  ngOnInit(): void {
    
  };

  crearProducto(form: any){
    const producto: CrearProducto = {
      nombre_producto: form.nombre,
      cantidad: form.cantidad,
      precio_producto: form.precio,
      descripcion: form.descripcion,
      id_categoria:form.categoria
    };

    this.productosService.create(producto)
    .subscribe(data => {
      this.productos.unshift(data);
      this.producCreat = data
    });
  };

};
