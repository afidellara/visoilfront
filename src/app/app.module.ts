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
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ClienteAuthService, ProductoService,provideToastr(),provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
