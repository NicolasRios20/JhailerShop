import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../models/categorias.interface';
import { query } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categoria: Categoria[] = [];
  constructor(
    private categoriasService: CategoriasService
  ) { }

  ngOnInit(): void {
    this.categoriasService.getAll()
    .subscribe(data => {
        this.categoria = data;
    })
  }

  idCatecoria(even: any){
    console.log(even.value)
  }

}
