import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Producto } from "../models/Producto.model";

@Injectable()
export class ProductoService{

    url: string = "http://localhost:4000/visoil/"

    constructor(private http: HttpClient){

    }

    registrarProducto(producto: FormData): Observable<any> {
      // Configura los encabezados necesarios para indicar que estás enviando datos en formato FormData

      // Realiza la solicitud POST con los encabezados configurados
      return this.http.post(this.url + 'registrarproducto', producto);
    }
}
