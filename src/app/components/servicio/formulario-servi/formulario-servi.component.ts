import { Router } from '@angular/router';
import { SublimacionTextilService } from './../../../service/Servicios/SublimacionTextil.service';
import { CorteVinilloService } from './../../../service/Servicios/CorteVinillo.service';
import { Component, Injectable } from '@angular/core';
import { CofeccionService } from 'src/app/service/Servicios/CofeccionService.service';
import { CorteService } from 'src/app/service/Servicios/CorteService.service';
import { EstampadoService } from 'src/app/service/Servicios/EstampadoService.service';
import { TejidoIndustrialService } from 'src/app/service/Servicios/TejidoIndustrialService.service';

@Component({
  selector: 'app-formulario-servi',
  templateUrl: './formulario-servi.component.html',
  styleUrls: ['./formulario-servi.component.css']
})

@Injectable()
export class FormularioServiComponent {
  selectedProduct: string = 'opcion1'; // Propiedad para almacenar la opción seleccionada

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
    private route:Router){}

  onProductSelected(event: any) {
    this.selectedProduct = event.target.value;
    console.log(this.selectedProduct);
  }

  registrarServicio({ value }: { value: any }){

    if(this.selectedProduct=='opcion2'){
      this.registrarTejidoIndustrialServicio(value);
    }

    if(this.selectedProduct=='opcion3'){
      this.registrarSublimacionTextilServicio(value);
    }

    if(this.selectedProduct=='opcion5'){
      this.registrarConfeccionServicio(value);
    }

    if(this.selectedProduct=='opcion6'){
      this.registrarCorteServicio(value);
    }

    if(this.selectedProduct=='opcion1'){
      this.registrarCorteServicio(value);
    }
  }

  registrarConfeccionServicio(value: any ) {
    this.confeccionService.registrarCofeccion(value).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
      },
      (error) => {
        console.log('No se puede agregar el servicio de confeccion... ' + error);
      }
    );
    console.log('SERVICIO DE CONFECCION REGISTRADO!!!');
  }

  registrarSublimacionTextilServicio(value: any ) {
    this.sublimacionTextilService.registrarSublimacionTextil(value).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
      },
      (error) => {
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
      },
      (error) => {
        console.log('No se puede agregar el servicio de corte... ' + error);
      }
    );
    console.log('SERVICIO DE CORTE REGISTRADO!!!');
  }

  registrarTejidoIndustrialServicio(value: any ) {
    this.tejidoIndustrialService.registrarTejidoIndustrial(value).subscribe(
      (data) => {
        this.route.navigate(['/consultarclientes']);
        console.log(data);
      },
      (error) => {
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
      },
      (error) => {
        console.log('No se puede agregar el servicio de corte vinilo... ' + error);
      }
    );
    console.log('SERVICIO DE CORTE VINILO REGISTRADO!!!');
  }
}
