import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteModel } from 'src/app/models/cliente.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styles: []
})
export class ClienteListarComponent implements OnInit {

  listado:ClienteModel[] = [];
  constructor(private clienteService:ClienteService,
              private router: Router) { }

  ngOnInit() {
    this.obtenerTodos();
  }

  obtenerTodos(){
    this.clienteService.obtenerClientes().subscribe((data) => {
      if(data != undefined){
        this.listado = data;
        console.log(data);
      }
    },(error) => {
      console.log(error); 
      Swal.fire({
        title: 'Info!!!',
        text: 'Mensaje:  ' + error.error.mensaje,
        allowOutsideClick: false
      });     
    });
  }

  borrarCliente(cliente:ClienteModel)
  {
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar a: ' + cliente.primerNombre + cliente.segundoNombre + '?',
      showCancelButton:true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if(resp.value){
        this.clienteService.borrarCliente(cliente.id).subscribe(data => {
          if(data != undefined){
            this.clienteService.obtenerClientes().subscribe(datad => {
              if(data !== undefined){
                this.listado = datad;
                console.log(this.listado);
              }
            });
            Swal.fire({
              title: 'Correcto',
              text: 'Cliente:  ' + cliente.primerNombre + cliente.segundoNombre + ' borrado correctamente',
              allowOutsideClick: false
            });
            // this.router.navigateByUrl('empleados');
          }
        })
      }
    })

  }
  

}
