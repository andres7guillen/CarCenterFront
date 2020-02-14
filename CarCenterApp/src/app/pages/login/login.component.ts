import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  usuario:Usuario;  

  constructor(private auth:AuthServiceService,
              private router:Router) { }

  ngOnInit() {
    this.usuario = new Usuario();
    //this.usuario.email = 'andres7guillen@gmail.com';
    //this.usuario.PassWord = 'Y0K0GAWA_1992';

  }

  onLogin(formulario:NgForm){
    if(formulario.valid){
      Swal.fire({title:'info',text:'espere por favor...',
                allowOutsideClick:false
    });
      Swal.showLoading();
      
      this.auth.Login(this.usuario).subscribe(data => {
        Swal.close();
        console.log(data);
        this.router.navigateByUrl('/home');
      },(error) => {
        Swal.close();
        Swal.fire({title:'Error al autenticar',text:error.error });

        console.log(error.error);
      })
    }
  }

}
