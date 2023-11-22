import { HttpHeaders } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto.model';
import { ProductoService } from 'src/app/service/ProductoService.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})

@Injectable()
export class FormularioProductoComponent {
  selectedFile: File | null = null;
  imageObj: File;
  imageUrl: string;
  codigo: string;
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

  registrarProducto() {
    const formData = new FormData();

    formData.append('codigo', this.codigo);
    formData.append('nombre', this.producto.nombre);
    formData.append('descripcion', this.producto.descripcion);
    formData.append('precio', this.producto.precio.toString());
    formData.append('categoria', this.producto.categoria);
    // Elimina la línea formData.append('imagen', this.producto.imagen); para evitar duplicados
    formData.append('imagen', this.imageObj);
    formData.append('tela', this.producto.tela);
    formData.append('talla', this.producto.talla);
    formData.append('medida', this.producto.medida);
    formData.append('disenio', this.producto.disenio);

    console.log('nombre: '+ this.producto.nombre);
    console.log('selectedFile: ' + this.selectedFile);
    console.log('Datos del formulario antes de la solicitud:', formData);


    this.productoService.registrarProducto(formData).subscribe(
      (data) => {
        this.route.navigate(['/tablaproducts']);
        console.log(data)
        console.log(formData)
      },
      (error) => {
        console.log('No se pudo agregar el producto ' + error);
      }
    );
    console.log('PRODUCTO REGISTRADO');
  }


  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
   }


}
