import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ImgComponent } from './componentes/img/img.component';
import { ProductoComponent } from './componentes/components/producto/producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { NavComponent } from './componentes/nav/nav.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { appRoutingProvider, routing } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from '../app/componentes/login/login.component';
import { ImgCarritoComponent } from '../app/componentes/imgcarrito/imgcarrito.component'



@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductoComponent,
    ProductosComponent,
    NavComponent,
    CrearProductoComponent,
    CarritoComponent,
    RegistroComponent,
    LoginComponent,
    ImgCarritoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
