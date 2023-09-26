import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  usernameInputFocused: boolean = false;
  passwordInputFocused: boolean = false;
  user: string = '';
  pass: string = '';
  showPassword: boolean = false; 
  passwordToggleImageSrc: string = '/assets/img/eye-show.svg'; // Ruta de la imagen inicial



  constructor() {}
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
}
