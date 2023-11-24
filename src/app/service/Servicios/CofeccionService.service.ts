import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cofeccion } from "../../models/servicios/Cofeccion.model";

@Injectable()
export class CofeccionService{

    url: string = "http://localhost:4000/visoil/servicio/"

    constructor(private http: HttpClient){

    }

    registrarCofeccion(cofeccion: FormData): Observable<any>{
        return this.http.post(this.url+"confeccion", cofeccion);
    }

    getCofeccion():Observable<any>{
        return this.http.get(this.url+"confeccion");
    }

    eliminarCofeccion(id: string):Observable<any>{
        return this.http.delete(this.url+"confeccion/"+id);
    }

    obtenerCofeccion(id:string): Observable<any>{
        return this.http.get(this.url+"confeccion/"+id);
    }

    modificarCofeccion(id: String, cofeccion: Cofeccion): Observable<any> {
        return this.http.put(this.url + "confeccion/" + id, cofeccion);
    }


}
