import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from '../services/task.service';

@Injectable({
  providedIn: 'root'
})
export class GuardRutasGuard implements CanActivate {
  
  constructor(
    private taskService: TaskService,
    private route: Router
  ){}
  
  canActivate(){
    let datoToken: any = localStorage.getItem('token');
    if (datoToken) {
      return true;
    }else{
      return this.route.navigate(['/login']).then(() => false);
    } 
  }
}

