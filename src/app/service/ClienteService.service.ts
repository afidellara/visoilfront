import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/Cliente.model";

@Injectable()
export class ClienteService{
    
    url: string = "http://localhost:4000/visoil/"

    constructor(private http: HttpClient){

    }

    registrarCliente(cliente: Cliente): Observable<any>{
        return this.http.post(this.url+"registrarcliente", cliente); 
    }
}