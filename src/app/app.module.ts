import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { LoginComponent } from './components/login/login.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { NavComponent } from './components/nav/nav.component';
import { FormularioProductoComponent } from './components/products/formulario-producto/formulario-producto.component';
import { ClienteAuthService } from './service/ClienteAuthService.service';
import { HttpClientModule } from '@angular/common/http';
import { TablaProductosComponent } from './components/products/tabla-productos/tabla-productos.component';
import { ProductoService } from './service/ProductoService.service';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { provideAnimations,BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegistroServiComponent } from './components/servicio/registro-servi/registro-servi.component';
import { ConsultaServiComponent } from './components/servicio/consulta-servi/consulta-servi.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormularioServiComponent } from './components/servicio/formulario-servi/formulario-servi.component';
import { ClienteService } from './service/ClienteService.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioClienteComponent } from './components/cliente/formulario-cliente/formulario-cliente.component';
import { TablaClientesComponent } from './components/cliente/tabla-clientes/tabla-clientes.component';
import { ConsultarProductosComponent } from './components/products/consultar-productos/consultar-productos.component';
import { IniciarSesionClienteGuard } from './guard/IniciarSesionClienteGuard.guard';

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
    TablaProductosComponent,
    RegistroServiComponent,
    ConsultaServiComponent,
    FormularioServiComponent,
    FormularioClienteComponent,
    TablaClientesComponent,
    ConsultarProductosComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ClienteAuthService, ProductoService,ClienteService ,IniciarSesionClienteGuard,provideToastr(),provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
