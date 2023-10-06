import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteAuthService } from 'src/app/service/ClienteAuthService.service';

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



  constructor(private clienteAuthService: ClienteAuthService, private route: Router, private toastr:ToastrService){}
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


  
    iniciarSesion(){
      if(this.user == '' && this.pass==''){
        this.toastr.info('Escriba en los campos', 'Error campos vacios');
      }else{
      this.clienteAuthService.login(this.user, this.pass).subscribe(
        (response) => {
          this.clienteAuthService.guardarInicioSesionEnCookie(response)
          this.toastr.success('Inicio de sesión exitoso', 'Cliente logueado');
          this.route.navigate(['/registerproducts'])
          console.log('INICIA SESIÓN')
        }
        ,
        (error) => {
          if(error.status == 401 ){
            this.toastr.warning('Contraseña Incorrecta', 'Error en el inicio de sesión:');
          }else if(error.status==404){
            this.toastr.error('Correo no existe','Error en el inicio de sesión:');
          }else{
            this.toastr.error('Error de Servidor','Error en el inicio de sesión:');
          }
        }
      )
      }
    }

    cerrarSesion(){
      this.clienteAuthService.cerrarSesion()
    }
}


