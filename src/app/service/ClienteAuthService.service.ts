import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente.model';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class ClienteAuthService{
    url:string="http://localhost:4000/visoil/inicioSesionCliente"

    constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(correo: string, pass: string): Observable<any> {
    const body = { correo, pass };
    return this.http.post<Cliente>(`${this.url}`, body);
  }

  guardarInicioSesionEnCookie(Cliente: Cliente) {
    this.cookieService.set('Cliente', JSON.stringify(Cliente));
  }

  cerrarSesion() {
    this.cookieService.delete('Cliente');
  }

  estaLogueadoCliente(): boolean {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const ClienteCookie = cookies.find(cookie => cookie.startsWith('Cliente='));
    return !!ClienteCookie;
  }
}

