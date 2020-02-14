import { Component, OnInit } from '@angular/core';
import { MarcaModel } from 'src/app/models/marca.model';
import { Router } from '@angular/router';
import { MarcaService } from 'src/app/services/marca.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marca-listar',
  templateUrl: './marca-listar.component.html',
  styles: []
})
export class MarcaListarComponent implements OnInit {
  listado: MarcaModel[] = [];

  constructor(private router:Router,
              private marcaService:MarcaService) { }

  ngOnInit() {
    this.obtenerMarcas();
  }

  obtenerMarcas()
  {
    this.marcaService.obtenerMarcas().subscribe((data) => {
      if(data != undefined){
        this.listado = data;
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

  borrarMarca(marca:MarcaModel)
  {
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar a: ' + marca.nombreMarca + '?',
      showCancelButton:true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if(resp.value){
        this.marcaService.borrarMarca(marca.id).subscribe((data) => {
          if(data != undefined){
            this.obtenerMarcas();
          }
        })
        Swal.fire({
          title: 'Correcto',
          text: 'Marca:  ' + marca.nombreMarca + ' borrada correctamente',
          allowOutsideClick: false
        });
      }
    })

  }

}
