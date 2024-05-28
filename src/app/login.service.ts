import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const userData = { email, password }; // Aquí se cambia 'name' por 'email'
    return this.http.post<any>('http://localhost:8080/api/auth/login', userData);
}

}