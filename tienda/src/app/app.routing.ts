import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ProductosComponent } from './componentes/productos/productos.component'; 
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ActualizarUsuariosComponent } from './componentes/actualizar-usuarios/actualizar-usuarios.component';
import { ProveedorComponent } from './componentes/proveedor/proveedor.component';
import { GuardRutasGuard } from './guard/guard-rutas.guard';



const appRoutes:Routes =[

    {path:'productos', component:ProductosComponent},
    {path:'crear-producto', component:CrearProductoComponent, data:{rol: ['1']}, canActivate: [GuardRutasGuard]},
    {path:'carrito', component:CarritoComponent},
    {path:'registro', component:RegistroComponent, data:{rol: ['0']}, canActivate: [GuardRutasGuard]},
    {path:'login', component:LoginComponent},
    {path:'proveedor', component:ProveedorComponent, data:{rol: ['1']}, canActivate: [GuardRutasGuard]},
    {path:'perfil-usuario', component:ActualizarUsuariosComponent, data:{rol: ['0']}, canActivate: [GuardRutasGuard]},
    {path:'**',pathMatch:'full',redirectTo:'productos'},

];

export const appRoutingProvider: any[]=[];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);