import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../models/proveedor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  url = '/api/proveedor/';
  factura = '/api/facturaProveedor/';

  constructor(
    private http: HttpClient,
  ) { }

  createProveedor(data: any){
    return this.http.post<Proveedor>(this.url,data);
  }
  getproveedores(){
    return this.http.get<Proveedor[]>(this.url);
  }

  numeroFactura(){
    return this.http.get<any>(this.factura);
  }

  eliminarProveedor(cedula:any){
    return this.http.delete<Proveedor[]>(`${this.url}${cedula}`);
  }

}
