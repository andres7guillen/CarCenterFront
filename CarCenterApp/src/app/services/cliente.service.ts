import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClienteModel } from '../models/cliente.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string = 'https://localhost:44397/api/Cliente/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    "Authorization": "Bearer " + localStorage.getItem('token').toString()   
  });
  constructor(private http:HttpClient) { }

  crearCliente(cliente:ClienteModel){
    return this.http.post(this.url + "Crear",JSON.stringify(cliente),{headers: this.headers});
  }

  actualizarCliente(cliente:ClienteModel){
    return this.http.put(this.url + "actualizar",JSON.stringify(cliente),{headers: this.headers})
  }

  obtenerClientes(){
    return this.http.get(this.url + 'ObtenerTodos',{headers:this.headers})
    .pipe(
      map(this.crearArreglo)
    );
  }

  obtenerEmpleadoPorId(id:string){
    return this.http.get(this.url + id,{headers:this.headers});
  }

  borrarCliente(id:string){
    return this.http.delete(this.url + id,{headers: this.headers});
  }

  private crearArreglo(clientesObj:object){
    const clientes : ClienteModel[] = [];
    Object.keys(clientesObj).forEach(key => {
      const entidad:ClienteModel = clientesObj[key];      
      clientes.push(entidad);
    }); 
    return clientes;
  }


}
