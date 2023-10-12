import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-servi',
  templateUrl: './formulario-servi.component.html',
  styleUrls: ['./formulario-servi.component.css']
})
export class FormularioServiComponent {
  selectedProduct: string = 'opcion1'; // Propiedad para almacenar la opción seleccionada

  onProductSelected(event: any) {
    this.selectedProduct = event.target.value;
  }

}
