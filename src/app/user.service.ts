import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/user'; 

  constructor(private http: HttpClient, private router: Router) { }

  getUserInfo(): Observable<User> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<User>(`${this.baseUrl}/token`, { headers });
  }

  getUserByToken(token: string): Observable<User> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<User>(`${this.baseUrl}/token`, { headers });
  }
  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/email/${email}`);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/id/${id}`);
  }





}