import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente.model';

@Injectable()
export class ClienteService {
  url: string = 'http://localhost:4000/visoil/';

  constructor(private http: HttpClient) {}

  registrarCliente(cliente: FormData): Observable<any> {
    return this.http.post(this.url + 'registrarcliente', cliente);
  }

  getCliente(): Observable<any> {
    return this.http.get(this.url + 'clientes');
  }

  eliminarCliente(cedula: string): Observable<any> {
    return this.http.delete(this.url + 'clientes/' + cedula);
  }

  obtenerCliente(cedula: string): Observable<any> {
    return this.http.get(this.url + 'clientes/' + cedula);
  }

  modificarCliente(cedula: String, Cliente: Cliente): Observable<any> {
    return this.http.put(this.url + 'clientes/' + cedula, Cliente);
  }
}
