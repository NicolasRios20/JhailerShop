import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import jtw_decode from "jwt-decode";

@Component({
  selector: 'app-actualizar-usuarios',
  templateUrl: './actualizar-usuarios.component.html',
  styleUrls: ['./actualizar-usuarios.component.css']
})
export class ActualizarUsuariosComponent implements OnInit {

  constructor(private taskservice : TaskService) { }
  usuario: any;
  ngOnInit(): void {
    let datoToken: any = localStorage.getItem('token');
    let iduser: any = jtw_decode(datoToken)
    let id = parseInt(iduser.id)
    console.log("hola",id)
    this.taskservice.actualizarUsuario(id)
    .subscribe(data => {
        this.usuario = data;
        console.log(this.usuario)
    })
  }

}
