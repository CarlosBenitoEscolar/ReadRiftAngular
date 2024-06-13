import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
  adminRequests: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadAdminRequests();
  }

  loadAdminRequests(): void {
    this.userService.getAdminRequests().subscribe(requests => {
      this.adminRequests = requests;
      console.log('Admin requests loaded:', this.adminRequests);
    }, error => {
      console.error('Error loading admin requests:', error);
    });
  }

  approveRequest(userId: number): void {
    console.log('Aprobando solicitud para userId:', userId);
    if (userId !== undefined) {
      this.userService.approveAdminRequest(userId).subscribe(() => {
        this.loadAdminRequests();
      }, error => {
        console.error('Error al aprobar solicitud:', error);
      });
    } else {
      console.error('userId is undefined');
    }
  }

  rejectRequest(userId: number): void {
    console.log('Rechazando solicitud para userId:', userId);
    if (userId !== undefined) {
      this.userService.rejectAdminRequest(userId).subscribe(() => {
        this.loadAdminRequests();
      }, error => {
        console.error('Error al rechazar solicitud:', error);
      });
    } else {
      console.error('userId is undefined');
    }
  }
}
