import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Register } from '../register';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register: Register = { firstname: '',lastname:'', email:'' ,password: ''};

  user: User | undefined;

  constructor(private registerService: RegisterService, private authService: AuthService,  private router: Router, private userService: UserService) { }

  signUp(): void {
    this.registerService.signUp(this.register).subscribe({
      next: (response) => {
        console.log('Registro exitoso:', response);
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
        if (this.register.firstname !== undefined && this.register.password !== undefined) {
          this.loadUserByEmail(() => {
            localStorage.setItem('USER_DATA', JSON.stringify(this.user));
            // Las acciones que dependen de la carga del usuario se mueven aquí
            console.log(this.user);
            this.router.navigate(['/lista-books']);
          });
        } else {
          console.error('Error al registrarse: Los campos name y password son requeridos.');
        }
      },
      error: (error) => {
        console.error('Error al registrarse:', error);
      }
    });
  }
  
  loadUserByEmail(callback: () => void): void {
    this.userService.getUserByEmail(this.register.email!).subscribe({
      next: (userData) => {
        this.user = userData;
        localStorage.setItem('USER_DATA', JSON.stringify(userData)); // Mover aquí para asegurarse que se guarda tras cargar
        console.log("User Data loaded:", this.user);
        callback(); // Ejecutar el callback
      },
      error: (errorData) => {
        console.error('Failed to load user:', errorData);
        callback(); // Aún ejecutar el callback, tal vez para manejar errores
      }
    });
  }
  
}