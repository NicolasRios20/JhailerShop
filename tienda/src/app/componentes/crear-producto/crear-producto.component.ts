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
    price: 0,
    image:'',
    name: '',
    description: '',
  }

  formulario = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });
  
  constructor(
    private productosService: ProductosService,
    ) {};

  ngOnInit(): void {
    
  };

  crearProducto(form: any){
    const producto: CrearProducto = {
      name: form.name,
      description: form.description,
      image: form.image,
      price: form.price
    };

    this.productosService.create(producto)
    .subscribe(data => {
      this.productos.unshift(data);
      this.producCreat = data
    });
  };

};
