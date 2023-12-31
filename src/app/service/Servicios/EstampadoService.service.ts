import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Estampado } from "../../models/servicios/Estampado.model";

@Injectable()
export class EstampadoService{

    url: string = "http://localhost:4000/visoil/servicio/"

    constructor(private http: HttpClient){

    }

    registrarEstampado(data: FormData): Observable<any>{
        return this.http.post(this.url+"estampado", data);
    }

    getEstampado():Observable<any>{
        return this.http.get(this.url+"estampado");
    }

    eliminarEstampado(id: string):Observable<any>{
        return this.http.delete(this.url+"estampado/"+id);
    }

    obtenerEstampado(id:string): Observable<any>{
        return this.http.get(this.url+"estampado/"+id);
    }

    modificarEstampado(id: String, estampado: Estampado): Observable<any> {
        return this.http.put(this.url + "estampado/" + id, estampado);
    }

    modificarEstadoEstampado(id: String, estado: string): Observable<any> {
      return this.http.put(this.url + "estampado/" + id, estado);
  }


}
