import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ProductosComponent } from './componentes/productos/productos.component'; 
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ActualizarUsuariosComponent } from './componentes/actualizar-usuarios/actualizar-usuarios.component';
import { ProveedorComponent } from './componentes/proveedor/proveedor.component';
import { GuardRutasGuard } from './guard/guardsCanActivate/guard-rutas.guard';



const appRoutes:Routes =[

    //rutas compartidas
    {path:'registro', component:RegistroComponent},
    {path:'login', component:LoginComponent },
    {path:'productos', component:ProductosComponent},
    {path:'carrito', component:CarritoComponent},
    
    //rutas del aministrador
    {path:'proveedor', component:ProveedorComponent, data:{rol: ['1']}, canActivate: [GuardRutasGuard]},
    {path:'crear-producto', component:CrearProductoComponent, data:{rol: ['1']}, canActivate: [GuardRutasGuard]},

    //rutas del usuario
    {path:'perfil-usuario', component:ActualizarUsuariosComponent, data:{rol: ['0']}, canActivate: [GuardRutasGuard]},
    

    //ruta por defecto
    {path:'**',pathMatch:'full',redirectTo:'productos'},

];

export const appRoutingProvider: any[]=[];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);