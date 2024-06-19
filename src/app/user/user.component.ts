import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User | undefined;
  userRole: string | null = null;

  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserByToken();
    if (this.authService.isAuthenticated()) {
      this.userService.getUserInfo().subscribe(user => {
        this.userRole = user.role || null;
      });
    }
  }

  getUserByToken(): void {
    if (typeof localStorage !== undefined && localStorage.getItem('token') !== null) {
      const token: string = localStorage.getItem('token') as string;
      this.userService.getUserByToken(token).subscribe(
        (user: User) => {
          this.user = user;
        },
        (error) => {
          console.error('Error al obtener el usuario:', error);
        }
      );
    } else {
      console.error('No se encontró el token en el localStorage');
    }
  }
  requestAdmin(): void {
    this.userService.requestAdmin().subscribe(() => {
      console.log('Solicitud para ser admin enviada.');
      alert('Solicitud para ser admin enviada.');
    }, error => {
      console.error('Error al enviar la solicitud para ser admin:', error);
      alert('Error al enviar la solicitud para ser admin.');
    });
  }
  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
  isUser(): boolean {
    return this.userRole === 'USER';
  }
}