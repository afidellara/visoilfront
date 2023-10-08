import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-servi',
  templateUrl: './consulta-servi.component.html',
  styleUrls: ['./consulta-servi.component.css']
})
export class ConsultaServiComponent {
  registros: any[] = []; // Inicialmente, la lista de registros está vacía
  mostrarRegistros = false; // Inicialmente, los registros están ocultos

  // Función para agregar los registros
  agregarRegistros() {
    if (this.registros.length > 0) {
      // Si hay registros, quitarlos (limpiar la lista)
      this.registros = [];
    }else{
      this.registros.push(
        { cliente: 'Cliente 1', costo: '$100.00', fechaPedido: '2023-10-10', descripcion: 'Descripción del pedido 1' },
        { cliente: 'Cliente 2', costo: '$75.50', fechaPedido: '2023-10-15', descripcion: 'Descripción del pedido 2' },
        { cliente: 'Cliente 3', costo: '$200.25', fechaPedido: '2023-10-20', descripcion: 'Descripción del pedido 3' }        // Agrega más registros según sea necesario
      );
    }
  }

}
