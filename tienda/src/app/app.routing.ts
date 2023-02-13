import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ProductosComponent } from './componentes/productos/productos.component'; 
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ActualizarUsuariosComponent } from './componentes/actualizar-usuarios/actualizar-usuarios.component';
import { ProveedorComponent } from './componentes/proveedor/proveedor.component';


const appRoutes:Routes =[

    {path:'productos', component:ProductosComponent},
    {path:'crear-producto', component:CrearProductoComponent},
    {path:'carrito', component:CarritoComponent},
    {path:'registro', component:RegistroComponent},
    {path:'login', component:LoginComponent},
    {path:'proveedor', component:ProveedorComponent},
    {path:'editaruser', component:ActualizarUsuariosComponent},
    {path:'**',pathMatch:'full',redirectTo:'productos'},

];

export const appRoutingProvider: any[]=[];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);