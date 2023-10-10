import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../models/Cliente.model';
import { ClienteService } from '../../../service/ClienteService.service';


@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css'],
})

@Injectable()
export class FormularioClienteComponent {
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

  constructor(private clienteService: ClienteService, private route: Router) {}

  registrarCliente({ value }: { value: any }) {
    
    this.clienteService.registrarCliente(value).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
      },
      (error) => {
        console.log('No se puede agregar el cliente... ' + error);
      }
    );
    console.log('CLIENTE REGISTRADO!!!');
  }
}
