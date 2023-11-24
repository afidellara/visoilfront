import { Component, Injectable, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto.model';
import { ProductoService } from 'src/app/service/ProductoService.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})


@Injectable()
export class TablaProductosComponent implements OnInit {

  productos:Producto[] = [];

  producto: any = {
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

  constructor(private productoService: ProductoService){}
  ngOnInit(): void {
   this.listarProducto();
  }


  listarProducto() {
    this.productoService.getProductos().subscribe((producto) => {
      this.productos = producto;
    });
  }
}
