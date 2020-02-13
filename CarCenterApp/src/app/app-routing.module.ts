import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ClienteCrearComponent } from './components/Cliente/cliente-crear/cliente-crear.component';
import { ClienteDetalleComponent } from './components/Cliente/cliente-detalle/cliente-detalle.component';
import { ClienteEditarComponent } from './components/Cliente/cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './components/Cliente/cliente-listar/cliente-listar.component';
import { MantenimientoListarComponent } from './components/Mantenimiento/mantenimiento-listar/mantenimiento-listar.component';
import { MantenimientoCrearComponent } from './components/Mantenimiento/mantenimiento-crear/mantenimiento-crear.component';
import { MantenimientoDetalleComponent } from './components/Mantenimiento/mantenimiento-detalle/mantenimiento-detalle.component';
import { MantenimientoEditarComponent } from './components/Mantenimiento/mantenimiento-editar/mantenimiento-editar.component';
import { MarcaListarComponent } from './components/Marca/marca-listar/marca-listar.component';
import { MarcaCrearComponent } from './components/Marca/marca-crear/marca-crear.component';
import { MarcaDetalleComponent } from './components/Marca/marca-detalle/marca-detalle.component';
import { MarcaEditarComponent } from './components/Marca/marca-editar/marca-editar.component';
import { MecanicoListarComponent } from './components/Mecanico/mecanico-listar/mecanico-listar.component';
import { MecanicoCrearComponent } from './components/Mecanico/mecanico-crear/mecanico-crear.component';
import { MecanicoDetalleComponent } from './components/Mecanico/mecanico-detalle/mecanico-detalle.component';
import { MecanicoEditarComponent } from './components/Mecanico/mecanico-editar/mecanico-editar.component';
import { RepuestoListarComponent } from './components/Repuesto/repuesto-listar/repuesto-listar.component';
import { RepuestoCrearComponent } from './components/Repuesto/repuesto-crear/repuesto-crear.component';
import { RepuestoDetalleComponent } from './components/Repuesto/repuesto-detalle/repuesto-detalle.component';
import { RepuestoEditarComponent } from './components/Repuesto/repuesto-editar/repuesto-editar.component';
import { ServicioListarComponent } from './components/Servicio/servicio-listar/servicio-listar.component';
import { ServicioCrearComponent } from './components/Servicio/servicio-crear/servicio-crear.component';
import { ServicioDetalleComponent } from './components/Servicio/servicio-detalle/servicio-detalle.component';
import { ServicioEditarComponent } from './components/Servicio/servicio-editar/servicio-editar.component';
import { VehiculoListarComponent } from './components/Vehiculo/vehiculo-listar/vehiculo-listar.component';
import { VehiculoCrearComponent } from './components/Vehiculo/vehiculo-crear/vehiculo-crear.component';
import { VehiculoDetalleComponent } from './components/Vehiculo/vehiculo-detalle/vehiculo-detalle.component';
import { VehiculoEditarComponent } from './components/Vehiculo/vehiculo-editar/vehiculo-editar.component';
import { AuthGuard } from '../app/guards/auth-guard.guard';
import { FacturacionComponent } from './components/facturacion/facturacion.component';

const routes: Routes = [
  
    {path:'home', component: HomeComponent },
    {path:'registro', component: RegistroComponent },
    {path:'login', component:LoginComponent  },
    //CLIENTE
    {path:'clienteListar', component: ClienteListarComponent, canActivate:[ AuthGuard ]},
    {path:'clienteCrear', component:ClienteCrearComponent, canActivate:[ AuthGuard ]},
    {path:'clienteDetalle/:id', component: ClienteDetalleComponent, canActivate:[ AuthGuard ]},
    {path:'clienteEditar/:id', component:ClienteEditarComponent, canActivate:[ AuthGuard ]},
    //MANTENIMIENTO
    {path:'mantenimientoListar',component:MantenimientoListarComponent, canActivate:[ AuthGuard ]},
    {path:'mantenimientoCrear', component:MantenimientoCrearComponent, canActivate:[ AuthGuard ]},
    {path:'mantenimientoDetalle/:id', component:MantenimientoDetalleComponent, canActivate:[ AuthGuard ]},
    {path:'mantenimientoEditar/:id', component:MantenimientoEditarComponent, canActivate:[ AuthGuard ]},


    //MARCA
    {path:'marcaListar', component:MarcaListarComponent, canActivate:[ AuthGuard ]},
{path:'marcaCrear', component:MarcaCrearComponent, canActivate:[ AuthGuard ]},
    {path:'marcaDetalle/:id',component:MarcaDetalleComponent, canActivate:[ AuthGuard ]},
{path:'marcaEditar/:id', component:MarcaEditarComponent, canActivate:[ AuthGuard ]},

    //MECANICO
{path:'mecanicoListar', component:MecanicoListarComponent, canActivate:[ AuthGuard ]},
    {path:'mecanicoCrear}', component:MecanicoCrearComponent, canActivate:[ AuthGuard ]},
{path:'mecanicoDetalle/:id', component:MecanicoDetalleComponent, canActivate:[ AuthGuard ]},
    {path:'mecanicoEditar/:id', component:MecanicoEditarComponent, canActivate:[ AuthGuard ]},
    //REPUESTO
{path:'repuestoListar',component:RepuestoListarComponent, canActivate:[ AuthGuard ]},
    {path:'repuestoCrear',component:RepuestoCrearComponent, canActivate:[ AuthGuard ]},
{path:'repuestoDetalle/:id', component:RepuestoDetalleComponent, canActivate:[ AuthGuard ]},
    {path:'repuestoEditar/:id', component:RepuestoEditarComponent, canActivate:[ AuthGuard ]},
    //SERVICIO
{path:'servicioListar', component:ServicioListarComponent, canActivate:[ AuthGuard ]},
    {path:'servicioCrear', component:ServicioCrearComponent, canActivate:[ AuthGuard ]},
{path:'servicioDetalle/:id',component:ServicioDetalleComponent, canActivate:[ AuthGuard ]},
    {path:'servicioEditar',component:ServicioEditarComponent, canActivate:[ AuthGuard ]},
    //VEHICULO
{path:'vehiculoListar',component:VehiculoListarComponent, canActivate:[ AuthGuard ]},
    {path:'vehiculoCrear',component:VehiculoCrearComponent, canActivate:[ AuthGuard ]},
{path:'vehiculoDetalle/:id',component:VehiculoDetalleComponent, canActivate:[ AuthGuard ]},
    {path:'vehiculoEditar/:id',component:VehiculoEditarComponent, canActivate:[ AuthGuard ]},

    //FACTURACION
{path:'facturacion', component:FacturacionComponent, canActivate:[AuthGuard]},

    {path:'**', redirectTo:'registro'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
