import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { ImgCarritoComponent } from '../app/componentes/imgcarrito/imgcarrito.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ActualizarUsuariosComponent } from './componentes/actualizar-usuarios/actualizar-usuarios.component';
import { ProveedorComponent } from './componentes/proveedor/proveedor.component';
import { InterceptorService } from './interceptors/interceptor.service';
<<<<<<< HEAD
import { FacturaProveedorComponent } from './componentes/factura-proveedor/factura-proveedor.component';
=======
import { NavAdmiComponent } from './componentes/navAdmin/nav-admi/nav-admi.component';
>>>>>>> 75f46049c65d8b12b16387826c35887d75616ac7




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
    CarruselComponent,
    FooterComponent,
    ActualizarUsuariosComponent,
    ProveedorComponent,
<<<<<<< HEAD
    FacturaProveedorComponent,
=======
    NavAdmiComponent,
>>>>>>> 75f46049c65d8b12b16387826c35887d75616ac7

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
  ],
  providers: [appRoutingProvider,
    {provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
