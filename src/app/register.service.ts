import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class ReguisterService {
  private signUpUrl = 'http://localhost:8080/api/auth/signup'; 

  constructor(private http: HttpClient) { }

  signUp(signUpRequest: Register): Observable<any> {
    return this.http.post<any>(this.signUpUrl, signUpRequest);
  }
} 