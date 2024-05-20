import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Register } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register: Register = { name: '', email:'' ,password: ''};

  constructor(private registerService: RegisterService, private authService: AuthService,  private router: Router) { }

  signUp(): void {
    this.registerService.signUp(this.register)
      .subscribe(
        response => {
          console.log('Registro exitoso:', response);
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
          console.log('Datos del usuario:', this.register);
          if (this.register.name !== undefined && this.register.password !== undefined) {
            this.router.navigate(['/lista-books']);
          } else {
            console.error('Error al registrarse: Los campos name y password son requeridos.');
          }
        },
        error => {
          console.error('Error al registrarse:', error);
        }
      );
  }
}