import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styles: []
})
export class ClienteEditarComponent implements OnInit {
  id:string;
  cliente: any;

  constructor(private clienteService:ClienteService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {    
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerClientePorId();
  }

  obtenerClientePorId(){
      this.clienteService.obtenerEmpleadoPorId(this.id).subscribe((data) => {
        if(data != undefined){
          this.cliente = data;
        }
      })
  }

  actualizar(f:NgForm){
    if(f.valid){
      Swal.fire({
        title:'Cargando',
        text:'espere por favor'
      });
      Swal.showLoading();
      this.clienteService.actualizarCliente(this.cliente).subscribe((data) => {
          if(data != undefined){
            Swal.close();
            this.router.navigateByUrl('clienteListar');
          }
      });
    }
  }

}
