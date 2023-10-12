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



const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'registerproducts', component:FormularioProductoComponent},
  {path: 'tablaproducts', component:TablaProductosComponent},
  {path: 'registrarcliente', component:FormularioClienteComponent},
  {path: 'consultarclientes', component:TablaClientesComponent},
  {path: 'registrarServi', component:RegistroServiComponent},
  {path: 'consultarServi', component:ConsultaServiComponent},
  {path: 'formularioServi', component:FormularioServiComponent},
  {path: 'consultarproductos', component:ConsultarProductosComponent},

  
  {path: 'prueba', component:PruebaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
