import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-request-admin',
  templateUrl: './request-admin.component.html',
  styleUrls: ['./request-admin.component.css']
})
export class RequestAdminComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  requestAdmin(): void {
    this.userService.requestAdmin().subscribe(() => {
      alert('Admin request sent');
    });
  }
}
