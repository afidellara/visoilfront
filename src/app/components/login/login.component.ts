import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  usernameInputFocused: boolean = false;
  passwordInputFocused: boolean = false;

  constructor() {}

  ngAfterViewInit() {
    this.loadScript('assets/js/input-focus.js').then(() => {
      console.log('Script loaded successfully!');
    }).catch(error => {
      console.error('Script load error:', error);
    });
  }

  private loadScript(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;

      script.onload = () => {
        resolve();
      };

      script.onerror = () => {
        reject(new Error(`Failed to load script: ${url}`));
      };

      document.body.appendChild(script);
    });
  }
  
  login() {
    // Aquí puedes agregar tu lógica de inicio de sesión
    console.log('Botón de inicio de sesión clickeado');
    // Puedes agregar tu lógica de inicio de sesión aquí
  }
}
