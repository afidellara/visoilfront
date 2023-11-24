import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Corte } from "../../models/servicios/Corte.model";

@Injectable()
export class CorteService{

    url: string = "http://localhost:4000/visoil/servicio/"

    constructor(private http: HttpClient){

    }

    registrarCorte(corte: FormData): Observable<any>{
        return this.http.post(this.url+"corte", corte);
    }

    getcorte():Observable<any>{
        return this.http.get(this.url+"corte");
    }

    eliminarcorte(id: string):Observable<any>{
        return this.http.delete(this.url+"corte/"+id);
    }

    obtenercorte(id:string): Observable<any>{
        return this.http.get(this.url+"corte/"+id);
    }

    modificarCorte(id: String, corte: Corte): Observable<any> {
        return this.http.put(this.url + "corte/" + id, corte);
    }


}
