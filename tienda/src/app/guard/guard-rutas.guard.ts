import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jtw_decode from "jwt-decode";
import { Observable } from 'rxjs';
import { datosUsuario } from '../models/task';
import { TaskService } from '../services/task.service';


@Injectable({
  providedIn: 'root'
})
export class GuardRutasGuard implements CanActivate {
  
  id: any
  user: datosUsuario[]=[]
  constructor(
    private taskService: TaskService,
    private route: Router,
    private taskservice : TaskService
  ){}
  /*
  canActivate(){
   let datoToken: any = localStorage.getItem('token');
    let iduser: any = jtw_decode(datoToken)
    this.rol = parseInt(iduser.rol)
    if (this.rol == 1) {
      return true;
    }else{
      
      return this.route.navigate(['/']).then(() => false);
    
  }
*/
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkuserLogin(route);
  }

  checkuserLogin(route:ActivatedRouteSnapshot): boolean{
    let datoToken: any = localStorage.getItem('token');
    let iduser: any = jtw_decode(datoToken)
    if(route.data['rol'] == iduser.rol ){
      return true
    }else{
      this.route.navigate(['/']);
      return false;
    }
  }

}




