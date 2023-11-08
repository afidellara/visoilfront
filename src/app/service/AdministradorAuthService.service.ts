import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../models/Administrador.model';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AdministradorAuthService{
    url:string="http://localhost:4000/visoil/inicioSesionAdm"

    constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(correo: string, password: string): Observable<any> {
    const body = { correo, password };
    return this.http.post<Administrador>(`${this.url}`, body);
  } 

  guardarInicioSesionEnCookie(Administrador: Administrador) {
    this.cookieService.set('Administrador', JSON.stringify(Administrador));
  }

  cerrarSesion() {
    this.cookieService.delete('Administrador');
  }

  estaLogueadoAdministrador(): boolean {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const AdministradorCookie = cookies.find(cookie => cookie.startsWith('Administrador='));
    return !!AdministradorCookie;
  }
}

