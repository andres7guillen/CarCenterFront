// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ClienteDetalleComponent } from './components/Cliente/cliente-detalle/cliente-detalle.component';
import { ClienteCrearComponent } from './components/Cliente/cliente-crear/cliente-crear.component';
import { ClienteEditarComponent } from './components/Cliente/cliente-editar/cliente-editar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ClienteListarComponent } from './components/Cliente/cliente-listar/cliente-listar.component';
import { VehiculoListarComponent } from './components/Vehiculo/vehiculo-listar/vehiculo-listar.component';
import { MecanicoListarComponent } from './components/Mecanico/mecanico-listar/mecanico-listar.component';
import { MantenimientoListarComponent } from './components/Mantenimiento/mantenimiento-listar/mantenimiento-listar.component';
import { RepuestoListarComponent } from './components/Repuesto/repuesto-listar/repuesto-listar.component';
import { MarcaListarComponent } from './components/Marca/marca-listar/marca-listar.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicioListarComponent } from './components/Servicio/servicio-listar/servicio-listar.component';
import { MantenimientoCrearComponent } from './components/Mantenimiento/mantenimiento-crear/mantenimiento-crear.component';
import { MantenimientoDetalleComponent } from './components/Mantenimiento/mantenimiento-detalle/mantenimiento-detalle.component';
import { MantenimientoEditarComponent } from './components/Mantenimiento/mantenimiento-editar/mantenimiento-editar.component';
import { MarcaCrearComponent } from './components/Marca/marca-crear/marca-crear.component';
import { MarcaEditarComponent } from './components/Marca/marca-editar/marca-editar.component';
import { MarcaDetalleComponent } from './components/Marca/marca-detalle/marca-detalle.component';
import { MecanicoCrearComponent } from './components/Mecanico/mecanico-crear/mecanico-crear.component';
import { MecanicoDetalleComponent } from './components/Mecanico/mecanico-detalle/mecanico-detalle.component';
import { MecanicoEditarComponent } from './components/Mecanico/mecanico-editar/mecanico-editar.component';
import { RepuestoCrearComponent } from './components/Repuesto/repuesto-crear/repuesto-crear.component';
import { RepuestoDetalleComponent } from './components/Repuesto/repuesto-detalle/repuesto-detalle.component';
import { RepuestoEditarComponent } from './components/Repuesto/repuesto-editar/repuesto-editar.component';
import { ServicioCrearComponent } from './components/Servicio/servicio-crear/servicio-crear.component';
import { ServicioDetalleComponent } from './components/Servicio/servicio-detalle/servicio-detalle.component';
import { ServicioEditarComponent } from './components/Servicio/servicio-editar/servicio-editar.component';
import { VehiculoCrearComponent } from './components/Vehiculo/vehiculo-crear/vehiculo-crear.component';
import { VehiculoDetalleComponent } from './components/Vehiculo/vehiculo-detalle/vehiculo-detalle.component';
import { VehiculoEditarComponent } from './components/Vehiculo/vehiculo-editar/vehiculo-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListarComponent,
    VehiculoListarComponent,
    VehiculoCrearComponent,
    VehiculoDetalleComponent,
    VehiculoEditarComponent,
    ServicioListarComponent,
    ServicioCrearComponent,
    ServicioDetalleComponent,
    ServicioEditarComponent,
    MecanicoListarComponent,
    MecanicoCrearComponent,
    MecanicoDetalleComponent,
    MecanicoEditarComponent,
    MantenimientoListarComponent,
    MantenimientoCrearComponent,
    MantenimientoDetalleComponent,
    MantenimientoEditarComponent,
    RepuestoListarComponent,
    RepuestoCrearComponent,
    RepuestoDetalleComponent,
    RepuestoEditarComponent,
    MarcaListarComponent,
    MarcaCrearComponent,
    MarcaEditarComponent,
    MarcaDetalleComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    ClienteDetalleComponent,
    ClienteCrearComponent,
    ClienteEditarComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
