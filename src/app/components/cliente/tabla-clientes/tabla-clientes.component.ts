import { Component } from '@angular/core';
import { ClienteService } from 'src/app/service/ClienteService.service';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css'],
})
export class TablaClientesComponent {
  registros: any[] = []; // Arreglo de registros de clientes
  modalesAbiertos: boolean[] = []; // Array para rastrear si los modales están abiertos
  registroSeleccionado: any = {}; // Registro actualmente seleccionado
  registroOriginal: any = {}; // Copia del registro original para cancelar cambios

  filtro: string = ''; // Filtro de búsqueda seleccionado
  query: string = ''; // Valor del filtro de búsqueda
  registrosFiltrados: any[] = []; // Arreglo de registros de clientes filtrados

  clienteService: ClienteService;

  constructor(clienteService: ClienteService) {
    this.clienteService = clienteService;
    this.agregarRegistros();
  }

  // Función para cambiar el valor del filtro
  cambiarQuery(event: any) {
    this.query = event.target.value;
  }

  // Función para cambiar el filtro de búsqueda
  cambiarFiltro(event: any) {
    this.filtro = event.target.value;
  }

  // Función para filtrar los registros de clientes
  filtrarRegistros() {
    switch (this.filtro) {
      case 'opcion1': {
        this.registrosFiltrados = this.registros;
        break;
      }
      case 'opcion3': {
        this.registrosFiltrados = this.registros.filter((registro) => {
          return registro.nombre
            .toLowerCase()
            .includes(this.query.toLowerCase());
        });
        break;
      }
      case 'opcion2': {
        this.registrosFiltrados = this.registros.filter((registro) => {
          return registro.cedula.includes(this.query.toLowerCase());
        });
        break;
      }

      default: {
        this.registrosFiltrados = this.registros;
        break;
      }
    }
  }

  // Función para agregar registros de clientes
  agregarRegistros() {
    this.clienteService.getCliente().subscribe((data: any) => {
      this.registros = data;
      this.registrosFiltrados = data;
    });
  }

  // Función para abrir el modal de edición
  abrirModal(index: number) {
    this.registroSeleccionado = { ...this.registros[index] };
    this.registroOriginal = { ...this.registros[index] };
    this.modalesAbiertos[index] = true;
  }

  // Función para cerrar el modal de edición
  cerrarModal(index: number, guardarCambios: boolean = false) {
    if (!guardarCambios) {
      this.registros[index] = { ...this.registroOriginal };
    }
    this.modalesAbiertos[index] = false;
  }

  // Función para eliminar un registro de cliente
  eliminarRegistro(index: number) {
    this.registros.splice(index, 1);
  }

  // Función para guardar cambios en un registro de cliente
  guardarCambios(index: number) {
    this.registros[index] = { ...this.registroSeleccionado };
    this.cerrarModal(index, true);
  }
}
