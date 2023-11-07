import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SublimacionTextil } from "../../models/servicios/SublimacionTextil.model";

@Injectable()
export class SublimacionTextilService{
    
    url: string = "http://localhost:4000/visoil/"

    constructor(private http: HttpClient){

    }

    registrarSublimacionTextil(sublimacionTextil: SublimacionTextil): Observable<any>{
        return this.http.post(this.url+"registrarSublimacionTextil", sublimacionTextil); 
    }

    getSublimacionTextil():Observable<any>{
        return this.http.get(this.url+"sublimacionTextil"); 
    }

    eliminarSublimacionTextil(id: string):Observable<any>{
        return this.http.delete(this.url+"sublimacionTextil/"+id); 
    }

    obtenerSublimaxionTextil(id:string): Observable<any>{
        return this.http.get(this.url+"sublimacionTextil/"+id); 
    }

    modificarSublimaxionTextil(id: String, sublimacionTextil: SublimacionTextil): Observable<any> {
        return this.http.put(this.url + "sublimacionTextil/" + id, sublimacionTextil);
    }

    
}