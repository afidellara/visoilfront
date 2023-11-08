import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteAuthService } from 'src/app/service/ClienteAuthService.service';
import { AdministradorAuthService } from 'src/app/service/AdministradorAuthService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit{
  usernameInputFocused: boolean = false;
  passwordInputFocused: boolean = false;
  user: string = '';
  pass: string = '';
  showPassword: boolean = false; 
  passwordToggleImageSrc: string = '/assets/img/eye-show.svg'; // Ruta de la imagen inicial



  constructor(private clienteAuthService: ClienteAuthService,private administradorAuthService: AdministradorAuthService, private route: Router, private toastr:ToastrService){}
  ngOnInit(): void {
    this.user='';
    this.pass='';
  }
  
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.passwordToggleImageSrc = this.showPassword ? '/assets/img/eye-close.svg' : '/assets/img/eye-show.svg';
  }
  onInputFocus() {
    this.usernameInputFocused = true;
  }

  onInputBlur() {
    if (!this.user.trim()) {
      this.usernameInputFocused = false; 
    }  }
  onPasswordInputFocus() {
    this.passwordInputFocused = true;
  }

  onPasswordInputBlur() {
    if (!this.pass.trim()) {
      this.passwordInputFocused = false;
    }
  }

  login() {
    console.log('Botón de inicio de sesión clickeado');
  }

    // iniciarSesion(){
    //   if(this.user == '' && this.pass==''){
    //     this.toastr.info('Escriba en los campos', 'Error campos vacios');
    //   }else{
    //   this.administradorAuthService.login(this.user, this.pass).subscribe(
    //     (response) => {
    //       this.administradorAuthService.guardarInicioSesionEnCookie(response)
    //       this.toastr.success('Inicio de sesión exitoso', 'Cliente logueado');
    //       this.route.navigate(['/registerproducts'])
    //       console.log('INICIA SESIÓN')
    //     }
    //     ,
    //     (error) => {
    //       if(error.status == 401 ){
    //         this.toastr.warning('Contraseña Incorrecta', 'Error en el inicio de sesión:');
    //       }else if(error.status==404){
    //         this.toastr.error('Correo no existe','Error en el inicio de sesión:');
    //       }else{
    //         this.toastr.error('Error de Servidor','Error en el inicio de sesión:');
    //       }
    //     }
    //   )
    //   }
    // }

    iniciarSesion() {
      if (this.user == '' && this.pass == '') {
        this.toastr.info('Escriba en los campos', 'Error campos vacíos');
      } else {
        this.clienteAuthService.login(this.user, this.pass).subscribe(
          (responseCliente) => {
            // Si el cliente se autentica correctamente
            this.clienteAuthService.guardarInicioSesionEnCookie(responseCliente);
            this.toastr.success('Inicio de sesión exitoso', 'Cliente logueado');
            this.route.navigate(['/registerproducts']);
            console.log('INICIA SESIÓN COMO CLIENTE');
          },
          (errorCliente) => {
            // Si el cliente no se autentica correctamente, intentamos con el administrador
            this.administradorAuthService.login(this.user, this.pass).subscribe(
              (responseAdmin) => {
                // Si el administrador se autentica correctamente
                this.administradorAuthService.guardarInicioSesionEnCookie(responseAdmin);
                this.toastr.success('Inicio de sesión exitoso', 'Administrador logueado');
                this.route.navigate(['/dashboard']); // Redirige al panel de administrador
                console.log('INICIA SESIÓN COMO ADMINISTRADOR');
              },
              (errorAdmin) => {
                // Si ninguno de los dos se autentica correctamente, mostramos un mensaje de error
                if (errorCliente.status == 401 || errorAdmin.status == 401) {
                  this.toastr.warning('Contraseña Incorrecta', 'Error en el inicio de sesión:');
                } else if (errorCliente.status == 404 || errorAdmin.status == 404) {
                  this.toastr.error('Correo no existe', 'Error en el inicio de sesión:');
                } else {
                  this.toastr.error('Error de Servidor', 'Error en el inicio de sesión:');
                }
              }
            );
          }
        );
      }
    }

    cerrarSesion(){
      this.administradorAuthService.cerrarSesion()
    }
}


