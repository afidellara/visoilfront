import { HttpHeaders } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../models/Cliente.model';
import { ClienteService } from '../../../service/ClienteService.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css'],
})
@Injectable()
export class FormularioClienteComponent {
  selectedFile: File | null = null;
  imageObj: File;
  imageUrl: string;
  cliente: Cliente = {
    cedula: '',
    tipoDocumento: '',
    nombre: '',
    apellido: '',
    genero: '',
    fechaNacimiento: '',
    correo: '',
    telefono: '',
    direccion: '',
    estadoCliente: true,
    fotoPerfil: '',
    ciudad: '',
    barrio: '',
    pass: '',
  };

  constructor(
    private clienteService: ClienteService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  registrarCliente() {
    const formData = new FormData();

    formData.append('cedula', this.cliente.cedula);
    formData.append('tipoDocumento', this.cliente.tipoDocumento);
    formData.append('nombre', this.cliente.nombre);
    formData.append('apellido', this.cliente.apellido);
    // Elimina la línea formData.append('imagen', this.producto.imagen); para evitar duplicados
    formData.append('genero', this.cliente.genero);
    formData.append('fechaNacimiento', this.cliente.fechaNacimiento);
    formData.append('correo', this.cliente.correo);
    formData.append('telefono', this.cliente.telefono);
    formData.append('direccion', this.cliente.direccion);
    formData.append('estadoCliente', this.cliente.estadoCliente.toString());
    formData.append('fotoPerfil', this.imageObj);
    formData.append('ciudad', this.cliente.ciudad);
    formData.append('barrio', this.cliente.barrio);
    formData.append('pass', this.cliente.pass);

    console.log('nombre: ' + this.cliente.nombre);
    console.log('selectedFile: ' + this.selectedFile);
    console.log('Datos del formulario antes de la solicitud:', formData);

    this.clienteService.registrarCliente(formData).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
        console.log(formData);
      },
      (error) => {
        this.toastr.warning('Error al agregar cliente');
        console.log('No se puede agregar el cliente... ' + error);
      }
    );
    console.log('CLIENTE REGISTRADO!!!');
  }

  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
  }
}
