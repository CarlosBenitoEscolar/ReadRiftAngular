import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = 'http://localhost:8080/api/user'; 
  private adminUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getUserInfo(): Observable<User> {
    const headers = this.getAuthHeaders();
    return this.http.get<User>(`${this.baseUrl}/token`, { headers });
  }

  getUserByToken(token: string): Observable<User> {
    const headers = this.getAuthHeaders();
    return this.http.get<User>(`${this.baseUrl}/token`, { headers });
  }
  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/email/${email}`);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/id/${id}`);
  }
  getAllUsers(): Observable<User[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<User[]>(`${this.adminUrl}/users`, { headers });
  }

  deleteUser(userId: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.adminUrl}/user/${userId}`, { headers });
  }

  requestAdmin(): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.post<void>(`${this.baseUrl}/request-admin`, {}, { headers });
  }
  getAdminRequests(): Observable<User[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<User[]>(`${this.adminUrl}/admin-requests`, { headers });
  }
  
  approveAdminRequest(userId: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.post<void>(`${this.adminUrl}/user/${userId}/approve`, {}, { headers });
  }

  rejectAdminRequest(userId: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.post<void>(`${this.adminUrl}/user/${userId}/reject`, {}, { headers });
  }
}