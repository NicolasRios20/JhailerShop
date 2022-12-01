import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Producto } from 'src/app/models/product.model';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent {

  @Output() addedProduct = new EventEmitter<Producto>();
  
  @Input() producto : Producto = {
    id: '',
    precio: 0,
    image:'',
    name: '',
    description: '',
  }

  onAddTocart(){
    this.addedProduct.emit(this.producto);
  }

  constructor() { }

}
