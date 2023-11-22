import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SublimacionTextilService } from './../../../service/Servicios/SublimacionTextil.service';
import { CorteVinilloService } from './../../../service/Servicios/CorteVinillo.service';
import { Component, Injectable } from '@angular/core';
import { CofeccionService } from 'src/app/service/Servicios/CofeccionService.service';
import { CorteService } from 'src/app/service/Servicios/CorteService.service';
import { EstampadoService } from 'src/app/service/Servicios/EstampadoService.service';
import { TejidoIndustrialService } from 'src/app/service/Servicios/TejidoIndustrialService.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-servi',
  templateUrl: './formulario-servi.component.html',
  styleUrls: ['./formulario-servi.component.css']
})

@Injectable()
export class FormularioServiComponent {
  selectedProduct: string = 'opcion1'; // Propiedad para almacenar la opción seleccionada
  tejidoIndustrialForm: FormGroup;
  selectedFile: File | null = null;
  descripcion: string
  nombre: string

  servicio: any = {
    tipo: '',
    cedula: '',
    nombre: '',
    imagen: '',
    descripcion: '',
    adjuntas: '',
    tipoTela: '',
    cantidad: '',
    piezaCorte: '',
    tela: '',
    color: '',
    texto: '',
    tamanio: '',
  }


  constructor(private confeccionService: CofeccionService,
    private corteService: CorteService,
    private corteVinilloService:CorteVinilloService,
    private estampadoService: EstampadoService,
    private sublimacionTextilService: SublimacionTextilService,
    private tejidoIndustrialService: TejidoIndustrialService,
    private route:Router, private toastr:ToastrService){}

  onProductSelected(event: any) {
    this.selectedProduct = event.target.value;
    console.log(this.selectedProduct);
  }

  registrarServicio({ value }: { value: any }){
    if(this.selectedProduct=='opcion1'){
      this.registrarCorteViniloService(value);
    }

    if(this.selectedProduct=='opcion2'){
      this.registrarTejidoIndustrialServicio(value);
    }

    if(this.selectedProduct=='opcion3'){
      this.registrarSublimacionTextilServicio(value);
    }

    if(this.selectedProduct=='opcion4'){
      this.registrarEstampadoService(value);
    }

    if(this.selectedProduct=='opcion5'){
      this.registrarConfeccionServicio(value);
    }

    if(this.selectedProduct=='opcion6'){
      this.registrarCorteServicio(value);
    }


  }

  registrarConfeccionServicio(value: any ) {
    this.confeccionService.registrarCofeccion(value).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
        this.toastr.success('Servicio de confeccion registrado exitosamente');
      },
      (error) => {
        console.log('No se puede agregar el servicio de confeccion... ' + error);
        this.toastr.warning('Error al agregar servicio de confección');
      }
    );
    console.log('SERVICIO DE CONFECCION REGISTRADO!!!');
  }

  registrarSublimacionTextilServicio(value: any ) {
    this.sublimacionTextilService.registrarSublimacionTextil(value).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
        this.toastr.success('Servicio de sublimación registrado exitosamente');

      },
      (error) => {
        this.toastr.warning('Error al agregar servicio de sublimación textil');
        console.log('No se puede agregar el servicio de sublimacion textil... ' + error);
      }
    );
    console.log('SERVICIO DE SUBLIMACION TEXTL REGISTRADO!!!');
  }

  registrarCorteServicio(value: any ) {
    this.corteService.registrarCorte(value).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
        this.toastr.success('Servicio de corte registrado exitosamente');

      },
      (error) => {
        this.toastr.warning('Error al agregar servicio de corte');
        console.log('No se puede agregar el servicio de corte... ' + error);
      }
    );
    console.log('SERVICIO DE CORTE REGISTRADO!!!');
  }

  registrarTejidoIndustrialServicio({ value, files }: { value: any, files: any }) {
    this.tejidoIndustrialService.registrarTejidoIndustrial(value).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
        this.toastr.success('Servicio de tejido industrial registrado exitosamente');

      },
      (error) => {
        this.toastr.warning('Error al agregar servicio de tejido industrial');
        console.log('No se puede agregar el servicio de tejido industrial... ' + error);
      }
    );
    console.log('SERVICIO DE TEJIDO INDUSTRIAL REGISTRADO!!!');
  }

  registrarCorteViniloService(value: any ) {
    this.corteVinilloService.registrarCorteVinillo(value).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
        this.toastr.success('Servicio de corte vinilo registrado exitosamente');
      },
      (error) => {
        this.toastr.warning('Error al agregar servicio de corte vinilo');
        console.log('No se puede agregar el servicio de corte vinilo... ' + error);
      }
    );
    console.log('SERVICIO DE CORTE VINILO REGISTRADO!!!');
  }

  registrarEstampadoService(value: any ) {
    this.estampadoService.registrarEstampado(value).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
        this.toastr.success('Servicio de estampado registrado exitosamente');

      },
      (error) => {
        this.toastr.warning('Error al agregar servicio de estampado');
        console.log('No se puede agregar el servicio de estampado... ' + error);
      }
    );
    console.log('SERVICIO DE ESTAMPADO REGISTRADO!!!');
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  registrarServicio1(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('imagen', this.selectedFile);
      formData.append('nombre', this.nombre);
      formData.append('descripcion', this.descripcion);

      this.estampadoService.registrarEstampado(formData).subscribe(
        (response) => {
          console.log('Servicio registrado exitosamente', response);
        },
        (error) => {
          console.error('Error al registrar el servicio', error);
        }
      );
    } else {
      console.error('Por favor, selecciona un archivo');
    }
  }
}
