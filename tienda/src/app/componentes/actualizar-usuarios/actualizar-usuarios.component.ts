import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import jtw_decode from "jwt-decode";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { datosUsuario } from 'src/app/models/task';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-actualizar-usuarios',
  templateUrl: './actualizar-usuarios.component.html',
  styleUrls: ['./actualizar-usuarios.component.css']
})
export class ActualizarUsuariosComponent implements OnInit {

  constructor(private taskservice : TaskService) { }
  id:any
  user: datosUsuario[]=[]
  ngOnInit(): void {
    let datoToken: any = localStorage.getItem('token');
    let iduser: any = jtw_decode(datoToken)
    this.id = parseInt(iduser.id)
    console.log("hola",this.id)
    this.taskservice.actualizarUsuario(this.id)
    .subscribe(data => {
      this.user = data
        this.formulario.setValue({
          nombre: this.user[0].nombre,
          correo: this.user[0].correo,
          ciudad: this.user[0].ciudad,
          direccion: this.user[0].direccion,
          telefono: this.user[0].telefono,
          foto: this.user[0].foto
        })
    },error =>{
      alert("Ocurrio un Error por favor Verificar los Campos");
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
    const formData = new FormData()
    this.taskservice.actualizar(form,this.id).subscribe(data =>{
      console.log(data)
    })
  }

  eliminar():void{

    this.taskservice.elimnar(this.id).subscribe(data =>{
      localStorage.clear()
      console.log('elimidado', this.id)
    })
  }

  imagenFile(event:any){
    let file = event.target.files[0]
    this.formulario.patchValue({
      foto: file
    })
  }

}


