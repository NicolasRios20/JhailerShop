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
  user: datosUsuario[]=[]
  usuario: datosUsuario = {
    nombre: '' ,
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
    let id = parseInt(iduser.id)
    console.log("hola",id)
    this.taskservice.actualizarUsuario(id)
    .subscribe(data => {
      this.user = data
      this.usuario = this.user[0]
        console.log(this.usuario)
    },error =>{

    });
  }

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    id_categoria:new FormControl('',[Validators.required]),
  });

  actualizarUser(form:any){
    
    console.log(form)
  }

}


