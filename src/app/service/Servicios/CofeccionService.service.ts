import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cofeccion } from "../../models/servicios/Cofeccion.model";

@Injectable()
export class CofeccionService{
    
    url: string = "http://localhost:4000/visoil/"

    constructor(private http: HttpClient){

    }

    registrarCofeccion(cofeccion: Cofeccion): Observable<any>{
        return this.http.post(this.url+"registrarcofeccion", cofeccion); 
    }

    getCofeccion():Observable<any>{
        return this.http.get(this.url+"cofeccion"); 
    }

    eliminarCofeccion(id: string):Observable<any>{
        return this.http.delete(this.url+"cofeccion/"+id); 
    }

    obtenerCofeccion(id:string): Observable<any>{
        return this.http.get(this.url+"cofeccion/"+id); 
    }

    modificarCofeccion(id: String, cofeccion: Cofeccion): Observable<any> {
        return this.http.put(this.url + "cofeccion/" + id, cofeccion);
    }

    
}