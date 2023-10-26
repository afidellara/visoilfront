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

    getProducto():Observable<any>{
        return this.http.get(this.url+"Producto");
    }

    eliminarProducto(cedula: string):Observable<any>{
        return this.http.delete(this.url+"Producto/"+cedula);
    }

    obtenerProducto(precio:string): Observable<any>{
        return this.http.get(this.url+"Producto/"+precio);
    }

    modificarProducto(cedula: String, Producto: Producto): Observable<any> {
        return this.http.put(this.url + "Producto/" + cedula, Producto);
    }

}