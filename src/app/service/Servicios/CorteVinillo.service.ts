import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CorteVinillo } from "../../models/servicios/CorteVinillo.model";

@Injectable()
export class CorteVinilloService{
    
    url: string = "http://localhost:4000/visoil/"

    constructor(private http: HttpClient){

    }

    registrarCorteVinillo(corteVinillo: CorteVinillo): Observable<any>{
        return this.http.post(this.url+"registrarcorteVinillo", corteVinillo); 
    }

    getCorteVinillo():Observable<any>{
        return this.http.get(this.url+"corteVinillo"); 
    }

    eliminarCorteVinillo(id: string):Observable<any>{
        return this.http.delete(this.url+"corteVinillo/"+id); 
    }

    obtenerCorteVinillo(id:string): Observable<any>{
        return this.http.get(this.url+"corteVinillo/"+id); 
    }

    modificarCorteVinillo(id: String, corteVinillo: CorteVinillo): Observable<any> {
        return this.http.put(this.url + "corteVinillo/" + id, corteVinillo);
    }

    
}