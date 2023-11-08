import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";
import { AdministradorAuthService } from "../service/AdministradorAuthService.service";


@Injectable()
export class IniciarSesionAdmGuard implements CanActivate{
    constructor(private loginService: AdministradorAuthService, private router: Router){}
    
    
    canActivate(): boolean {
        const existeEmpleadoCookie = this.loginService.estaLogueadoAdministrador();
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