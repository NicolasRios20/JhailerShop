import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { LoginI } from '../../models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre: any= {};
  ingreso: boolean = false;
  usuario: LoginI[] =[];

  logiForm:any = new FormGroup({
    email: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required)
  })

  constructor( private url:TaskService) { }

  ngOnInit(): void {
  }

  
  onLogin(form: any){
    const ingreso :LoginI  = {
      correo_cliente: form.email,
      contrasena: form.contrasena,

    };

    this.url.loginByEmail(ingreso)
    
    .subscribe((data) => {
      this.usuario.unshift(data);
      this.ingreso = true;

      if (this.ingreso == true) {
        this.nombre = data;
        this.exitoso();
      }  
    },error=>{
      this.fallido();
    });
  };

  exitoso(){
    Swal.fire({
      title: 'INGRESO EXITOSO',
      icon: 'success',
      showCloseButton: true,
      confirmButtonText: '<a href="http://localhost:4200/productos" style="text-color: white;" t>OK</a>'
    })
  }

  fallido(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'EMAIL O CONTRASEÑA INVALIA INTENTE DE NUEVO',
    })
  }


  /*onLogin(form:any){
    this.url.loginByEmail(form).subscribe(data =>{
      console.log(data);
    })
  }*/

}
