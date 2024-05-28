import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false; 

  constructor(
    private loginService: LoginService, 
    private authService: AuthService, 
    private router: Router,
    private userService: UserService
  ) {}

  loginUser(): void {
    this.loginService.login(this.email, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        // Ahora obtenemos los datos del usuario
        this.userService.getUserByToken(response.token).subscribe({
          next: (userData: User) => {
            localStorage.setItem('USER_DATA', JSON.stringify(userData));
            if (this.authService.isAuthenticated()) {
              this.router.navigate(['/lista-books']);
            }
          },
          error: (error: any) => {
            console.error('Error al obtener datos del usuario:', error);
            this.loginError = true;
          }
        });
      },
      error => {
        console.error('Error en el login:', error);
        this.loginError = true;
      }
    );
  }
}
