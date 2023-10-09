import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-servi',
  templateUrl: './consulta-servi.component.html',
  styleUrls: ['./consulta-servi.component.css']
})
export class ConsultaServiComponent {
  registros: any[] = []; // Inicialmente, la lista de registros está vacía
  mostrarRegistros = false; // Inicialmente, los registros están ocultos
  modalesAbiertos: boolean[] = []; // Array para controlar el estado de los modales
  registroSeleccionado: any = {}; // Variable para mantener el registro seleccionado
  registroOriginal: any = {}; // Variable para mantener una copia del registro original

  // Función para agregar los registros
  agregarRegistros() {
    this.registros.forEach(() => this.modalesAbiertos.push(false));

    if (this.registros.length > 0) {
      // Si hay registros, quitarlos (limpiar la lista)
      this.registros = [];
    } else {
      this.registros.push(
        { cliente: 'Cliente 1', costo: '$100.00', fechaPedido: '2023-10-10', descripcion: 'Descripción del pedido 1' },
        { cliente: 'Cliente 2', costo: '$75.50', fechaPedido: '2023-10-15', descripcion: 'Descripción del pedido 2' },
        { cliente: 'Cliente 3', costo: '$200.25', fechaPedido: '2023-10-20', descripcion: 'Descripción del pedido 3' } // Agrega más registros según sea necesario
      );
    }
  }

  abrirModal(index: number) {
    // Asigna el registro actualmente seleccionado
    this.registroSeleccionado = { ...this.registros[index] };
    // Guarda una copia del registro original
    this.registroOriginal = { ...this.registros[index] };
    // Asegúrate de que `registroSeleccionado` se haya inicializado correctamente
    console.log(this.registroSeleccionado);
    this.modalesAbiertos[index] = true;
  }

  // Función para cerrar el modal
  cerrarModal(index: number, guardarCambios: boolean = false) {
    if (!guardarCambios) {
      // Si se hace clic en "Cancelar", restaura el registro original
      this.registros[index] = { ...this.registroOriginal };
    }
    this.modalesAbiertos[index] = false;
  }

  eliminarRegistro(index: number) {
    // Aquí puedes implementar la lógica para eliminar el registro en la posición `index` de la matriz `registros`
    this.registros.splice(index, 1); // Elimina el registro en la posición `index`
  }

  guardarCambios(index: number) {
    // Actualiza los valores del registro seleccionado en la matriz de registros
    this.registros[index].cliente = this.registroSeleccionado.cliente;
    this.registros[index].costo = this.registroSeleccionado.costo;
    this.registros[index].fechaPedido = this.registroSeleccionado.fechaPedido;
    this.registros[index].descripcion = this.registroSeleccionado.descripcion;

    this.cerrarModal(index, true); // Cierra el modal después de guardar
  }
}
