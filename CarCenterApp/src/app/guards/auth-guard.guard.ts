import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthServiceService,
              private router:Router){}

              canActivate():  boolean {                
                if(this.auth.estaAutenticado()){
                  return true;
                }else{
                  Swal.fire({title: 'Error de autenticacion',
                  allowOutsideClick: false,
                  text:'No se ha logueado!!!'                  
                });
                  this.router.navigateByUrl('/login');
                  return false;
                }
              }
  
    
    
    
  }
  

