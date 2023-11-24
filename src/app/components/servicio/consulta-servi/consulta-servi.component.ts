import { Component, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CofeccionService } from 'src/app/service/Servicios/CofeccionService.service';
import { CorteService } from 'src/app/service/Servicios/CorteService.service';
import { CorteVinilloService } from 'src/app/service/Servicios/CorteVinillo.service';
import { EstampadoService } from 'src/app/service/Servicios/EstampadoService.service';
import { SublimacionTextilService } from 'src/app/service/Servicios/SublimacionTextil.service';
import { TejidoIndustrialService } from 'src/app/service/Servicios/TejidoIndustrialService.service';

@Component({
  selector: 'app-consulta-servi',
  templateUrl: './consulta-servi.component.html',
  styleUrls: ['./consulta-servi.component.css']
})

@Injectable()
export class ConsultaServiComponent {
  registros: any[] = []; // Inicialmente, la lista de registros está vacía
  mostrarRegistros = false; // Inicialmente, los registros están ocultos
  modalesAbiertos: boolean[] = []; // Array para controlar el estado de los modales
  registroSeleccionado: any = {}; // Variable para mantener el registro seleccionado
  registroOriginal: any = {}; // Variable para mantener una copia del registro original

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



  guardarCambios(index: number) {
    // Actualiza los valores del registro seleccionado en la matriz de registros
    this.registros[index].cedula = this.registroSeleccionado.cedula;
    this.registros[index].nombre = this.registroSeleccionado.nombre;
    this.registros[index].tipoServicio = this.registroSeleccionado.tipoServicio;
    this.registros[index].estado = this.registroSeleccionado.estado;
    this.registros[index].fechaPedido = this.registroSeleccionado.fechaPedido;


    this.cerrarModal(index, true); // Cierra el modal después de guardar
  }

  tipoServicio: string = 'CorteVinillo'; // Inicialmente seleccionamos 'Tipo1'


  //////////////////////////////////////////////////////////////////
  constructor(private estampadoService: EstampadoService,
    private corteVillinoService: CorteVinilloService,
    private tejidoIndustrialService: TejidoIndustrialService,
    private sublimacionTextilService: SublimacionTextilService,
    private confeccionService: CofeccionService,
    private corteServicioService: CorteService,
    private toastr: ToastrService){}


  servicio: any = {
    tipo: '',
    cedula: '',
    nombre: '',
    imagen: '',
    descripcion: '',
 //   adjuntas: '',
    tipoTela: '',
    cantidad: '',
    piezaCorte: '',
    tela: '',
    color: '',
    texto: '',
    tamanio: '',
    estado:''
  }

  servicios: any[];

  agregarRegistros(){

    if(this.tipoServicio==='CorteVinillo'){
      this.listarCorteVinillo();
    }

    if(this.tipoServicio==='TejidoIndustrial'){
      this.listarTejidoIndustrial();
    }

    if(this.tipoServicio==='SublimacionTextil'){
      this.listarSublimacionTextil();
    }

    if(this.tipoServicio==='Estampado'){
      this.listarEstampadoServicio();
    }

    if(this.tipoServicio==='Confeccion'){
      this.listarConfeccion();
    }

    if(this.tipoServicio==='Corte'){
      this.listarCorteServicio();
    }
  }

  EliminarServicio(codigo: string){

    if(this.tipoServicio==='CorteVinillo'){
      this.EliminarCorteVinillo(codigo);
    }

    if(this.tipoServicio==='TejidoIndustrial'){
      this.EliminarTejidoIndustrial(codigo);
    }

    if(this.tipoServicio==='SublimacionTextil'){
      this.EliminarSublimacionTextil(codigo);
    }

    if(this.tipoServicio==='Estampado'){
      this.EliminarEstampadoServicio(codigo);
    }

    if(this.tipoServicio==='Confeccion'){
      this.EliminarConfeccion(codigo);
    }

    if(this.tipoServicio==='Corte'){
      this.EliminarCorteServicio(codigo);
    }
  }

  //Estampado
  listarEstampadoServicio() {
    this.estampadoService.getEstampado().subscribe((estampado) => {
      this.servicios = estampado;
    });
  }

  EliminarEstampadoServicio(codigo: string){
    this.estampadoService.eliminarEstampado(codigo).subscribe((estampado) => {
      this.toastr.warning('Servicio de estampado eliminado existosamente');
      this.listarEstampadoServicio()
    });
  }

  obtenerEstampado(codigo: string) {
    this.estampadoService.obtenerEstampado(codigo).subscribe((datos) => {
      this.servicio = datos;
    });
  }

  modificaEstadoEmpleado({ value }: { value: any }) {
    value.estado = 'EN CURSO';
    this.estampadoService.modificarEstadoEstampado(value.cedula, value.estado).subscribe(
      () => {
        this.listarEstampadoServicio();
      },
      (error) => {
        console.error('Error al modificar el empleado:', error);
      }
    );
  }

  //corte vinillo
  listarCorteVinillo() {
    this.corteVillinoService.getCorteVinillo().subscribe((corteVillino) => {
      this.servicios = corteVillino;
    });
  }

  EliminarCorteVinillo(codigo: string){
    this.corteVillinoService.eliminarCorteVinillo(codigo).subscribe((estampado) => {
      this.toastr.warning('Servicio de corte vinillo eliminado existosamente');
      this.listarCorteVinillo()
    });
  }


  //TejidoIndustrial
  listarTejidoIndustrial() {
    this.tejidoIndustrialService.getTejidoIndustrial().subscribe((tejidoIndustrial) => {
      this.servicios = tejidoIndustrial;
    });
  }

  EliminarTejidoIndustrial(codigo: string){
    this.tejidoIndustrialService.eliminarTejidoIndustrial(codigo).subscribe((estampado) => {
      this.toastr.warning('Servicio de tejido industrial eliminado existosamente');
      this.listarCorteVinillo()
    });
  }

  //Sublimacion Textil
  listarSublimacionTextil() {
    this.sublimacionTextilService.getSublimacionTextil().subscribe((sublimacionTextil) => {
      this.servicios = sublimacionTextil;
    });
  }

  EliminarSublimacionTextil(codigo: string){
    this.sublimacionTextilService.eliminarSublimacionTextil(codigo).subscribe((estampado) => {
      this.toastr.warning('Servicio de sublimacion textil eliminado existosamente');
      this.listarSublimacionTextil()
    });
  }

  //Confeccion
  listarConfeccion() {
    this.confeccionService.getCofeccion().subscribe((confeccion) => {
      this.servicios = confeccion;
    });
  }

  EliminarConfeccion(codigo: string){
    this.confeccionService.eliminarCofeccion(codigo).subscribe((estampado) => {
      this.toastr.warning('Servicio de confección eliminado existosamente');
      this.listarConfeccion()
    });
  }

  listarCorteServicio() {
    this.corteServicioService.getcorte().subscribe((corte) => {
      this.servicios = corte;
    });
  }

  EliminarCorteServicio(codigo: string){
    this.corteServicioService.eliminarcorte(codigo).subscribe((estampado) => {
      this.toastr.warning('Servicio de corte servicio eliminado existosamente');
      this.listarCorteServicio()
    });
  }


}
