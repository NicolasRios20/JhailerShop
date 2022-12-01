import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/product.model';

@Component({
  selector: 'app-img-carrito',
  templateUrl: './imgcarrito.component.html',
  styleUrls: ['./imgcarrito.component.css']
})
export class ImgCarritoComponent{

  @Output() addedProduct = new EventEmitter<Producto>();
  
  @Input() producto : Producto = {
    id: '',
    precio: 0,
    image:'',
    name: '',
    description: '',
  }
  
  constructor() { }

  addToShoppingCart(producto: Producto): void {
    this.addedProduct.emit(producto);
  }

}