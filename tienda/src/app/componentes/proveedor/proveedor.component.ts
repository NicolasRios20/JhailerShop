import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formulario = new FormGroup({
    nombre_proveedor: new FormControl('', [Validators.required]),
    ubicacion: new FormControl('', [Validators.required]),
    cuenta_bancaria: new FormControl('', [Validators.required]),
  });

  crearProducto(form: any){

    console.log(form);
    
  }

}
