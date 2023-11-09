import { Component, OnInit } from '@angular/core';
import { ClienteAuthService } from './service/ClienteAuthService.service';
import { AdministradorAuthService } from './service/AdministradorAuthService.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visoilfront';
  mostrar = false;

  constructor(private clienteAuthService:ClienteAuthService,private administradorAuthService: AdministradorAuthService,private router: Router){

  }

  mostrarL():boolean{
    return this.mostrar = this.mostrarLogin()
  }
  

  mostrarLogin():boolean{
    this.mostrar = this.clienteAuthService.estaLogueadoCliente()
    if(!this.mostrar){
      return this.mostrar = false;
    }else{
      return this.mostrar = true;
    }

  }

  mostrarLogin2():boolean{
    this.mostrar = this.administradorAuthService.estaLogueadoAdministrador()
    if(!this.mostrar){
      return this.mostrar = false;
    }else{
      return this.mostrar = true;
    }
  }

}
