import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TejidoIndustrial } from "../../models/servicios/TejidoIndustrial.model";

@Injectable()
export class TejidoIndustrialService{
    
    url: string = "http://localhost:4000/visoil/"

    constructor(private http: HttpClient){

    }

    registrarTejidoIndustrial(tejidoIndustrial: TejidoIndustrial): Observable<any>{
        return this.http.post(this.url+"registrartejidoIndustrial", tejidoIndustrial); 
    }

    getTejidoIndustrial():Observable<any>{
        return this.http.get(this.url+"tejidoIndustrial"); 
    }

    eliminarTejidoIndustrial(id: string):Observable<any>{
        return this.http.delete(this.url+"tejidoIndustrial/"+id); 
    }

    obtenerTejidoIndustrial(id:string): Observable<any>{
        return this.http.get(this.url+"tejidoIndustrial/"+id); 
    }

    modificarTejidoIndustrial(id: String, tejidoIndustrial: TejidoIndustrial): Observable<any> {
        return this.http.put(this.url + "tejidoIndustrial/" + id, tejidoIndustrial);
    }

    
}