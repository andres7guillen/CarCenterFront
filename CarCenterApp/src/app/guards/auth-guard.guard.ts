import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthServiceService,
              private router:Router){}

              canActivate():  boolean {
                console.log('Block by guard');
                if(this.auth.estaAutenticado()){
                  return true;
                }else{
                  this.router.navigateByUrl('/login');
                  return false;
                }
              }
  
    
    
    
  }
  

