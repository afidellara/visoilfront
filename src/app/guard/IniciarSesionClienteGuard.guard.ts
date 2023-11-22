import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ClienteAuthService } from "../service/ClienteAuthService.service";


@Injectable()
export class IniciarSesionClienteGuard implements CanActivate{
    constructor(private loginService: ClienteAuthService, private router: Router){}


    canActivate(): boolean {
        const existeEmpleadoCookie = this.loginService.estaLogueadoCliente();
        if (existeEmpleadoCookie) {
          // La cookie "empleado" existe, permitir acceso a la ruta protegida
          return true;
        } else {
          // La cookie "empleado" no existe, redirigir al usuario a la página de inicio de sesión
          this.router.navigate(['/login']);
          return false;
        }
      }
}
