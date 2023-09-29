import { Component } from '@angular/core';

/**
 * @title Basic select
 */

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css'],
})
export class FormularioClienteComponent {
  tiposDocumentos = [
    { value: 'TI', viewValue: 'Tarjeta de Identidad' },
    { value: 'CC', viewValue: 'Cédula de Ciudadanía' },
    { value: 'PS', viewValue: 'Pasaporte' },
    { value: 'EX', viewValue: 'Cédula de Extranjería' }
  ];
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}