import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import jtw_decode from "jwt-decode";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { datosUsuario } from 'src/app/models/task';

@Component({
  selector: 'app-actualizar-usuarios',
  templateUrl: './actualizar-usuarios.component.html',
  styleUrls: ['./actualizar-usuarios.component.css']
})
export class ActualizarUsuariosComponent implements OnInit {

  constructor(private taskservice : TaskService) { }
  id:any
  user: datosUsuario[]=[]
  usuario: datosUsuario = {
    nombre: '',
    correo: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    foto: '',
    rol: ''
  }
  ngOnInit(): void {
    let datoToken: any = localStorage.getItem('token');
    let iduser: any = jtw_decode(datoToken)
    this.id = parseInt(iduser.id)
    console.log("hola",this.id)
    this.taskservice.actualizarUsuario(this.id)
    .subscribe(data => {
      this.user = data
      this.usuario = this.user[0]
        console.log(this.usuario)
        this.formulario.setValue({
          nombre: this.usuario.nombre,
          correo: this.usuario.correo,
          ciudad: this.usuario.ciudad,
          direccion: this.usuario.direccion,
          telefono: this.usuario.telefono,
          foto: this.usuario.foto
        })
    },error =>{

    });
    
  }

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    foto: new FormControl('', [Validators.required]),
  });

  actualizarUser(form:any,){
    this.taskservice.actualizar(form,this.id).subscribe(data =>{
      console.log(data)
    })
    console.log(form)
    console.log(this.id)
  }

}


