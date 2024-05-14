import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  //Esta URL obtiene el listado de todos los libros en el backend
  private baseURL = "http://localhost:8080/api/books";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los libros
  obtenerListaDeBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }
/*
  //este metodo nos sirve para registrar un libro
  registrarBook(book:Book) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,book);
  }

  //este metodo sirve para actualizar el libro
  actualizarBook(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,book);
  }

  //este metodo sirve para obtener o buscar un libro
  obtenerBookPorId(id:number):Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
  }

  eliminarBook(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }*/
}