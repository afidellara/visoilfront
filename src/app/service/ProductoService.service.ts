import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Producto } from "../models/Producto.model";

@Injectable()
export class ProductoService{

    url: string = "http://localhost:4000/visoil/"

    constructor(private http: HttpClient){

    }

    registrarProdcuto(producto: Producto): Observable<any>{
        return this.http.post(this.url+"registrarproducto", producto);
    }
}
