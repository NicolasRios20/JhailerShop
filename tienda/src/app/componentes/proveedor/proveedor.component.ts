import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../models/proveedor.interface';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  
  proveedor: Proveedor[] = []

  constructor(
    private proveedorService: ProveedorService
  ) { }

  ngOnInit(): void {
  }

  formulario = new FormGroup({
    nombre_proveedor: new FormControl('', [Validators.required]),
    cedula: new FormControl('', [Validators.required]),
    ubicacion_p: new FormControl('', [Validators.required]),
    cuenta_bancaria: new FormControl('', [Validators.required]),
  });

  crearProveedor(form: any){
    this.proveedor = form;
    this.proveedorService.createProveedor(form)
    .subscribe(data => {
      console.log(data)
      alert("hola " + "Registro Exitoso");
    },error =>{
      console.log(error.status)
    });
  }

}
