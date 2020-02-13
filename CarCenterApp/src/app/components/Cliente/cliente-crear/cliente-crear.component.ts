import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteModel } from 'src/app/models/cliente.model';
import Swal from 'sweetalert2';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-cliente-crear',
  templateUrl: './cliente-crear.component.html',
  styles: []
})
export class ClienteCrearComponent implements OnInit {

  cliente: ClienteModel;
  constructor(private clienteService: ClienteService,
              private router:Router) { }

  ngOnInit() {
    this.cliente = new ClienteModel();
  }

  guardar(f:NgForm){debugger
    if(f.valid)
    {
      Swal.fire({
        title:'Guardando...',
        text:'Espere por favor'
      });
      Swal.showLoading();
      this.clienteService.crearCliente(this.cliente).subscribe((data)=>{
          if(data != undefined){
            Swal.close();
            this.router.navigateByUrl('clienteListar');
          }
      },(error)=>{
        Swal.close();
        Swal.fire({
          title:'Error',
          text: error.message,
          // type: 'info',
          allowOutsideClick: false
        });
      });


    }
  }

}
