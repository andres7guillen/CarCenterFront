import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userToken: string = ''; 
  private url:string = 'https://localhost:44397/api/Cuenta';
  private headers = new HttpHeaders({
    'Content-type': 'application/json'    
});

  constructor(private http:HttpClient) { }

  Login(usuario:Usuario) {
    return this.http.post(this.url + '/Login', JSON.stringify(usuario),{headers: this.headers})
    .pipe(
      map(resp => {
        this.guardarToken(resp['token']);
        return resp;
      })
    )
  }

  LogOut(){
    localStorage.removeItem('token');
  }

  CrearUsuario(usuario:Usuario) {
    return this.http.post(this.url + '/Crear', JSON.stringify(usuario),{headers: this.headers})
    .pipe(
      map(resp => {
        this.guardarToken(resp['token']);
        return resp;
      })
    )
  }

  private guardarToken(token:string){
    this.userToken = token;
    localStorage.setItem('token',token);
  }

  leerToken():string{
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado():boolean {
    return this.userToken.length > 2;
  }




}
