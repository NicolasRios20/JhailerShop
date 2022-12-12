import { Component, OnInit } from '@angular/core';
import { CrearProducto, Producto } from '../../models/product.model';
import { ProductosService } from 'src/app/services/productos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';


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
    imagen:'',
  }

  formulario = new FormGroup({
    nombre_producto: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    precio_producto: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required]),
    id_categoria:new FormControl('',[Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  
  constructor(
    private productosService: ProductosService,
    ) {};

  ngOnInit(): void {
    
  };

  onFileChange(event:any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
        this.formulario.patchValue({
        fileSource: file
      });
    }
  }

  crearProducto(form: any){
    const formData = new FormData();
    const file = this.formulario.get('fileSource');
    formData.append('file', file?.value || '');
    formData.append('cantidad', this.formulario.get('cantidad')?.value || '');
    formData.append('nombre_producto', this.formulario.get('nombre_producto')?.value || '');
    formData.append('id_categoria', this.formulario.get('id_categoria')?.value || '');
    formData.append('descripcion', this.formulario.get('descripcion')?.value || '');
    formData.append('precio_producto', this.formulario.get('precio_producto')?.value || '');

    this.productosService.create(formData)
    .subscribe(data => {
      alert("Registro Exitoso")
      this.formulario.reset()
    },error =>{
      alert("Ocurrio un Error por favor Verificar los Campos")
    })
  }
}
