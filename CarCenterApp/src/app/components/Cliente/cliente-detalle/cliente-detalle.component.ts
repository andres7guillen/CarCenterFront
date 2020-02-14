import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styles: []
})
export class ClienteDetalleComponent implements OnInit {
  id:string;
  cliente:any;

  constructor(private route:ActivatedRoute,
              private clienteService:ClienteService) { }

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

}
