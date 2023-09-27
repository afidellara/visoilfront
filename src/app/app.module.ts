import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { NavComponent } from './components/nav/nav.component';
import { FormularioProductoComponent } from './components/products/formulario-producto/formulario-producto.component';
import { FormularioClienteComponent } from './components/cliente/formulario-cliente/formulario-cliente.component';
import { TablaClientesComponent } from './components/cliente/tabla-clientes/tabla-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    GaleriaComponent,
    LoginComponent,
    PruebaComponent,
    NavComponent,
    FormularioProductoComponent,
    FormularioClienteComponent,
    TablaClientesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
