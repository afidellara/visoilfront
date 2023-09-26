import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameInputFocused: boolean = false;
  passwordInputFocused: boolean = false;
  user: string = '';
  pass: string = '';

  constructor() {}

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
    // Lógica de inicio de sesión
    console.log('Botón de inicio de sesión clickeado');
    // Puedes agregar tu lógica de inicio de sesión aquí
  }
}
