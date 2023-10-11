import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent {
  registros: any[] = []; // Arreglo de registros de clientes
  modalesAbiertos: boolean[] = []; // Array para rastrear si los modales están abiertos
  registroSeleccionado: any = {}; // Registro actualmente seleccionado
  registroOriginal: any = {}; // Copia del registro original para cancelar cambios

  // Función para agregar registros de clientes
  agregarRegistros() {
    this.registros.forEach(() => this.modalesAbiertos.push(false));

    if (this.registros.length > 0) {
      // Si hay registros, quitarlos (limpiar la lista)
      this.registros = [];
    } else {
      this.registros.push(
        {
          tipoDocumento: 'CC',
          cedula: '123456789',
          fotoPerfil: 'perfil1.jpg',
          nombre: 'John',
          apellidos: 'Doe',
          genero: 'Masculino',
          fechaNacimiento: '1990-01-15',
          correoElectronico: 'john@example.com',
          contraseña: '********',
          numeroTelefono: '123-456-7890',
          direccion: '123 Main St',
          ciudad: 'Ciudad',
          estado: 'Activo'
        },
        {
          tipoDocumento: 'TI',
          cedula: '987654321',
          fotoPerfil: 'perfil2.jpg',
          nombre: 'Jane',
          apellidos: 'Doe',
          genero: 'Femenino',
          fechaNacimiento: '1992-05-20',
          correoElectronico: 'jane@example.com',
          contraseña: '********',
          numeroTelefono: '987-654-3210',
          direccion: '456 Elm St',
          ciudad: 'Otra Ciudad',
          estado: 'Inactivo'
        }
      );
    }
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
