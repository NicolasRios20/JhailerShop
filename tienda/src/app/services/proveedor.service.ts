import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../models/proveedor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  url = '/api/proveedor/';

  constructor(
    private http: HttpClient,
  ) { }

  createProveedor(data: any){
    return this.http.post<Proveedor>(this.url,data);
  }


}
