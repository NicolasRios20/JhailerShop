import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-actualizar-usuarios',
  templateUrl: './actualizar-usuarios.component.html',
  styleUrls: ['./actualizar-usuarios.component.css']
})
export class ActualizarUsuariosComponent implements OnInit {

  constructor(private activerrouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let usuario = this.activerrouter.snapshot.paramMap.get('id')
  }

}
