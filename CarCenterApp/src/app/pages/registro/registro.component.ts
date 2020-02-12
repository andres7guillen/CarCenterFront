import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthServiceService,
              private router:Router) { }

  usuario:Usuario = new Usuario();

  ngOnInit() {
  }

  onSubmit(formulario:NgForm){
    if(formulario.valid){
      Swal.fire({title:'',text:'espere por favor...',
                allowOutsideClick:false});
      Swal.showLoading();

      this.authService.CrearUsuario(this.usuario).subscribe(data => {
        console.log(data);
        Swal.close();
        this.router.navigateByUrl('/home');
      },(error) => {
        Swal.close();
        Swal.fire({title:'Error al crear usuario',text:error.error,
                allowOutsideClick:false});
        console.log(error.error);
      })
    }
    
  }

}
