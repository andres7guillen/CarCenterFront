import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarcaModel } from '../models/marca.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private url:string = 'https://localhost:44397/api/Marca/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    "Authorization": "Bearer " + localStorage.getItem('token').toString()   
  });
  constructor(private http:HttpClient) { }

  crearMarca(marca:MarcaModel){
    return this.http.post(this.url + 'Crear',JSON.stringify(marca), {headers:this.headers});
  }

  obtenerMarcas(){
    return this.http.get(this.url,{headers:this.headers})
    .pipe(
      map(this.crearArreglo)
    );
  }

  obtenerMarcaPorId(id:string){
    return this.http.get(this.url + id , {headers:this.headers});
  }

  actualizarMarca(marca:MarcaModel){
    return this.http.put(this.url, JSON.stringify(marca),{headers:this.headers});
  }

  borrarMarca(id:string){
    return this.http.delete(this.url + id , {headers:this.headers});
  }

  private crearArreglo(marcasObj:object){
    const marcas : MarcaModel[] = [];
    Object.keys(marcasObj).forEach(key => {
      const entidad:MarcaModel = marcasObj[key];      
      marcas.push(entidad);
    }); 
    return marcas;
  }

}
