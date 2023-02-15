import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginI } from '../models/login.interface';





import { datosUsuario, Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
   api = '/api/users/';


  constructor(
    private http: HttpClient
  ) { }
  
  loginByEmail(form: LoginI){
    return this.http.post<LoginI>(`${this.api}email/`,form);
  }



  getAllTasks(){

    return this.http.get(this.api);
  }

  getTask(cc: string){
    const path = `${this.api}${123}`;
    return this.http.get<Task>(path);
  }

  crearUsuario(task: Task){
    const path = `${this.api}`;
    return this.http.post(path, task);

  }
  actualizarUsuario(id: any){
    const token = localStorage.getItem('token')
    return this.http.get<[datosUsuario]>(`${this.api}${id}`,{headers :{'Authorization' : `Bearer ${token}`}});
  }
}
