import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  //Esta URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/api/books";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  obtenerListaDeBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }
/*
  //este metodo nos sirve para registrar un empleado
  registrarEmpleado(empleado:Empleado) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }

  //este metodo sirve para actualizar el empleado
  actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }*/
}