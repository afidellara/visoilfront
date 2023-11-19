import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClienteService } from 'src/app/service/ClienteService.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})

@Injectable()
export class PruebaComponent {

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

  constructor(private clienteService: ClienteService, private route: Router, private toastr:ToastrService) {}

  registrarCliente({ value }: { value: any }) {
    
    this.clienteService.registrarCliente(value).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
        this.toastr.success('Cliente registrado exitosamente');

      },
      (error) => {
        this.toastr.warning('Error al agregar cliente');
        console.log('No se puede agregar el cliente... ' + error);
      }
    );
    console.log('CLIENTE REGISTRADO!!!');
  }
}
