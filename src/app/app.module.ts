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
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [ClienteAuthService, ProductoService,ClienteService ,provideToastr(),provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
