import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminGuard implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    if (this.authService.isAuthenticated()) {
      const user = await this.userService.getUserInfo().toPromise();
      if (user && user.role === 'SUPER_ADMIN') {
        return true;
      }
    }
    this.router.navigate(['/principal']);
    return false;
  }
}
