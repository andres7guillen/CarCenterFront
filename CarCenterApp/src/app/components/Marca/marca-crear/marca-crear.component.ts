import { Component, OnInit } from '@angular/core';
import { MarcaModel } from 'src/app/models/marca.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { MarcaService } from 'src/app/services/marca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marca-crear',
  templateUrl: './marca-crear.component.html',
  styles: []
})
export class MarcaCrearComponent implements OnInit {
  marca: MarcaModel;

  constructor(private marcaService:MarcaService,
              private router:Router) { }

  ngOnInit() {
    this.marca = new MarcaModel();
  }

  guardar(f:NgForm,marca:MarcaModel){
    if(f.valid)
    {
      Swal.fire({
        title:'Guardando...',
        text:'Espere por favor'
      });
      Swal.showLoading();
      this.marcaService.crearMarca(marca).subscribe((data)=>{
          if(data != undefined){
            Swal.close();
            this.router.navigateByUrl('marcaListar');
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
