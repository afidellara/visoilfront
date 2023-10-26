import { Component } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-servi',
  templateUrl: './registro-servi.component.html',
  styleUrls: ['./registro-servi.component.css']
})
export class RegistroServiComponent {
  faCheck = faCheck;
  faTimes = faTimes;

  constructor(private router: Router) { } // Inyecta Router

  solicitarOpcion() {
    this.router.navigate(['/formularioServi']);
  }


}

