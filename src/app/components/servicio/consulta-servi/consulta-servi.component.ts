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
        { cedula: '123', nombre: 'Jesus', tipoServicio: 'Servicio 1', estado: 'Pendiente', fechaPedido:'2021-08-08' },
        { cedula: '321', nombre: 'Stefani', tipoServicio: 'Servicio 2', estado: 'Pagado', fechaPedido:'2021-12-01' },
        { cedula: '113', nombre: 'Alejandro', tipoServicio: 'Servicio 3', estado: 'Pendiente', fechaPedido:'2021-03-22' }
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
    // Preguntar al usuario si está seguro de eliminar el registro
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este registro?');
  
    if (confirmacion) {
      // Elimina el registro si el usuario confirma
      this.registros.splice(index, 1);
    } else {
      // No hagas nada si el usuario cancela la eliminación
    }
  }
  

  guardarCambios(index: number) {
    // Actualiza los valores del registro seleccionado en la matriz de registros
    this.registros[index].cedula = this.registroSeleccionado.cedula;
    this.registros[index].nombre = this.registroSeleccionado.nombre;
    this.registros[index].tipoServicio = this.registroSeleccionado.tipoServicio;
    this.registros[index].estado = this.registroSeleccionado.estado;
    this.registros[index].fechaPedido = this.registroSeleccionado.fechaPedido;


    this.cerrarModal(index, true); // Cierra el modal después de guardar
  }
}
