import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../models/categorias.interface';
import jtw_decode from "jwt-decode";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categoria: Categoria[] = [];
  imagen: any;
  constructor(
    private categoriasService: CategoriasService,
  ) { }

  ngOnInit(): void {
    this.categoriasService.getAll()
    .subscribe(data => {
        this.categoria = data;
    })

    let datoToken: any = localStorage.getItem('token');
    let iduser: any = jtw_decode(datoToken)
    this.imagen = iduser.foto
  }

  idCatecoria(even: any){
    console.log(even.value)
  }

  cerrarSesion(){
    localStorage.clear();
  }

}
