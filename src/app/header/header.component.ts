import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userRole: string | null = null;

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.userService.getUserInfo().subscribe(user => {
        this.userRole = user.role || null;
      });
    }
  }

  isAdmin(): boolean {
    return this.userRole === 'ADMIN' || this.userRole === 'SUPER_ADMIN';
  }

  isSuperAdmin(): boolean {
    return this.userRole === 'SUPER_ADMIN';
  }
  
  isNormalUser(): boolean {
    return this.userRole === 'USER';
  }
}
