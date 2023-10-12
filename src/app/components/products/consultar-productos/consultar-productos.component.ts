import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-productos',
  templateUrl: './consultar-productos.component.html',
  styleUrls: ['./consultar-productos.component.css']
})
export class ConsultarProductosComponent {
  registros: any[] = []; 
  mostrarRegistros = false; 
  modalesAbiertos: boolean[] = []; 
  registroSeleccionado: any = {}; 
  registroOriginal: any = {}; 

  // Función para agregar los registros
  agregarRegistros() {
    this.registros.forEach(() => this.modalesAbiertos.push(false));

    if (this.registros.length > 0) {
      // Si hay registros, quitarlos (limpiar la lista)
      this.registros = [];
    } else {
      this.registros.push(
        { codigo: '123456', nombre: 'Camisa', descripcion: 'Camisa de mujer estilizada', precio: 200, categoria:'Mujer',
         referencia:'Catalina', imagen:'Link', tela: 'Seda', talla: 'L', medida:'unica', disenio:'Frutas del bosque'},
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
    this.registros[index].codigo = this.registroSeleccionado.codigo;
    this.registros[index].nombre = this.registroSeleccionado.nombre;
    this.registros[index].descripcion = this.registroSeleccionado.descripcion;
    this.registros[index].precio = this.registroSeleccionado.precio;
    this.registros[index].categoria = this.registroSeleccionado.categoria;
    this.registros[index].referencia = this.registroSeleccionado.referencia;
    this.registros[index].imagen = this.registroSeleccionado.precio;
    this.registros[index].tela = this.registroSeleccionado.tela;
    this.registros[index].talla = this.registroSeleccionado.talla;
    this.registros[index].medida = this.registroSeleccionado.medida;
    this.registros[index].disenio = this.registroSeleccionado.disenio;

    this.cerrarModal(index, true); // Cierra el modal después de guardar
  }

  confirmDelete(index: number) {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar esto?');

    if (confirmDelete) {
      this.eliminarRegistro(index);
    } else {
      // El usuario eligió cancelar
    console.log("Se cancelo la acción");
    }
  }


}
