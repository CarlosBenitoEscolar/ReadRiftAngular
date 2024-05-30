import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Book } from './../book';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-books',
  templateUrl: './lista-books.component.html',
  styleUrls: ['./lista-books.component.css']
})
export class ListaBooksComponent implements OnInit{

  books:Book[];

  constructor(private bookService:BookService, private router: Router){}

  ngOnInit(): void {
   // this.obtenerBooks();
    this.obtenerBooksDisponibles();
  }

  /*private obtenerBooks(){
    this.bookServicio.obtenerListaDeBooks().subscribe(dato => {
      this.books = dato;
    })
  }*/
  private  obtenerBooksDisponibles(){
    this.bookService.obtenerLibrosDisponibles().subscribe(dato => {
      this.books = dato;
    })
  }

  comentario(bookId: number){
    this.router.navigate(['/reviews', bookId]);
  }
}

