import { Component, OnInit } from '@angular/core';
import { ClienteAuthService } from './service/ClienteAuthService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visoilfront';
  mostrar = false;

  constructor(private clienteAuthService:ClienteAuthService){

  }
  

  mostrarLogin():boolean{
    this.mostrar = this.clienteAuthService.estaLogueadoCliente()
    if(!this.mostrar){
      return this.mostrar = false;
    }else{
      return this.mostrar = true;
    }

  }
  
}
