import { Estampado } from './../../../models/servicios/Estampado.model';
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
import { HttpErrorResponse } from '@angular/common/http';

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
  imageObj: File;
  imageUrl: string;

  servicio: any = {
    tipo: '',
    cedula: '',
    nombre: '',
    imagen: '',
    descripcion: '',
    tipoTela: '',
    cantidad: '',
    piezaCorte: '',
    tela: '',
    color: '',
    texto: '',
    tamanio: '',
    estado:'',
    telefono:''
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

  registrarServicio(){

    const formData = new FormData();
      formData.append('tipo', this.servicio.tipo);
      formData.append('cedula', this.servicio.cedula);
      formData.append('nombre', this.servicio.nombre);
      formData.append('imagen', this.imageObj);
      formData.append('descripcion', this.servicio.descripcion);
      formData.append('tipoTela', this.servicio.tipoTela);
      formData.append('cantidad', this.servicio.cantidad);
      formData.append('color', this.servicio.color);
      formData.append('texto', this.servicio.texto);
      formData.append('tamanio', this.servicio.tamanio);
      formData.append('telefono', this.servicio.telefono);


    if(this.selectedProduct=='opcion1'){
      this.registrarCorteViniloService(formData);
    }

    if(this.selectedProduct=='opcion2'){
      this.registrarTejidoIndustrialServicio(formData);
    }

    if(this.selectedProduct=='opcion3'){
      this.registrarSublimacionTextilServicio(formData);
    }

    if(this.selectedProduct=='opcion4'){
      this.registrarEstampadoService(formData);
    }

    if(this.selectedProduct=='opcion5'){
      this.registrarConfeccionServicio(formData);
    }

    if(this.selectedProduct=='opcion6'){
      this.registrarCorteServicio(formData);
    }
  }

  registrarConfeccionServicio(value: FormData ) {
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

  registrarSublimacionTextilServicio(value: FormData ) {
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

  registrarCorteServicio(value: FormData ) {
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

  registrarTejidoIndustrialServicio( value: FormData) {
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

  registrarCorteViniloService(value: FormData ) {
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

  registrarEstampadoService(estampado: FormData ) {
    this.estampadoService.registrarEstampado(estampado).subscribe(
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



  registrarServicio1(): void {
    // if (this.selectedFile) {

      const formData = new FormData();
      formData.append('nombre', this.servicio.nombre);
      formData.append('imagen', this.imageObj);

      this.estampadoService.registrarEstampado(formData).subscribe(
        (response) => {
          console.log('Servicio registrado exitosamente', response);
        },
        (error) => {
          console.error('Error al registrar el servicio', error);

          // Imprimir detalles específicos del error
          if (error instanceof HttpErrorResponse) {
            console.error('Status:', error.status);
            console.error('Mensaje:', error.error.message);
          }

          this.toastr.warning('Error al registrar el servicio', 'Error');
        }
      );
    // } else {
    //   console.error('Por favor, selecciona un archivo');
    // }
  }

  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
    this.toastr.success('IMAGEN SELECCIONADA '+ this.imageObj.name);
    console.log(FILE);
   }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.toastr.success('IMAGEN SELECCIONADA '+ this.selectedFile);

  }

}
