import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto.model';
import { ProductoService } from 'src/app/service/ProductoService.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})

@Injectable()
export class FormularioProductoComponent {

  producto: Producto = {
      codigo:'',
      nombre:'',
      descripcion:'',
      precio:0,
      categoria:'',
      referencia:'',
      imagen:'',
      tela:'',
      talla:'',
      medida:'',
      disenio:'',
  }

  constructor(private productoService: ProductoService, private route: Router){}

  registrarProducto({ value }: { value: any }) {
    
      this.productoService.registrarProdcuto(value).subscribe(
        (data) => {
          this.route.navigate(['/tablaproducts']);
          console.log(data);
        },
        (error) => {
          console.log('No se puedo agregar el administrador ' + error);
        }
      );
      console.log('PRODUCTO REGISTRADO');

}

}
