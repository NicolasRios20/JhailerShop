import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginI } from '../models/login.interface';




import { Task } from '../models/task';

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

  /*loginByEmail(form: LoginI): Observable<ResponseI>{
    let direccion = `${this.api}email`;
    return this.http.post<ResponseI>(direccion,form);
  }*/

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
}
