import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      console.log('Users loaded:', this.users);
    }, error => {
      console.error('Error loading users:', error);
    });
  }

  deleteUser(userId: number): void {
    console.log('Deleting user with ID:', userId);
    this.userService.deleteUser(userId).subscribe(() => {
      this.loadUsers();
    }, error => {
      console.error('Error deleting user:', error);
    });
  }
  canDeleteUser(user: User): boolean {
    return user.role !== 'SUPER_ADMIN';
  }
}
