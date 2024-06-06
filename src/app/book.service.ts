import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:8080/api/books";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  obtenerLibrosDisponibles(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/available/true`);
  }
  
  registrarBook(book:Book) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,book);
  }

  getBooksByOwner(ownerId: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/owner/${ownerId}`);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.baseURL}/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
  }
  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
  }
}