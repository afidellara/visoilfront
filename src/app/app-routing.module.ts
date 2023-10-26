import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { FormsModule } from '@angular/forms';
import { FormularioProductoComponent } from './components/products/formulario-producto/formulario-producto.component';
import { FormularioClienteComponent } from './components/cliente/formulario-cliente/formulario-cliente.component';
import { TablaClientesComponent } from './components/cliente/tabla-clientes/tabla-clientes.component';
import { TablaProductosComponent } from './components/products/tabla-productos/tabla-productos.component';
import { RegistroServiComponent } from './components/servicio/registro-servi/registro-servi.component';
import { ConsultaServiComponent } from './components/servicio/consulta-servi/consulta-servi.component';
import { FormularioServiComponent } from './components/servicio/formulario-servi/formulario-servi.component';
import { ConsultarProductosComponent } from './components/products/consultar-productos/consultar-productos.component';
import { IniciarSesionClienteGuard } from './guard/IniciarSesionClienteGuard.guard';



const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'registerproducts', component:FormularioProductoComponent,canActivate:[IniciarSesionClienteGuard]},
  {path: 'tablaproducts', component:TablaProductosComponent,canActivate:[IniciarSesionClienteGuard]},
  {path: 'registrarcliente', component:FormularioClienteComponent,canActivate:[IniciarSesionClienteGuard]},
  {path: 'consultarclientes', component:TablaClientesComponent,canActivate:[IniciarSesionClienteGuard]},
  {path: 'registrarServi', component:RegistroServiComponent,canActivate:[IniciarSesionClienteGuard]},
  {path: 'consultarServi', component:ConsultaServiComponent,canActivate:[IniciarSesionClienteGuard]},
  {path: 'formularioServi', component:FormularioServiComponent,canActivate:[IniciarSesionClienteGuard]},
  {path: 'consultarproductos', component:ConsultarProductosComponent,canActivate:[IniciarSesionClienteGuard]},
  {path: 'prueba', component:PruebaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
