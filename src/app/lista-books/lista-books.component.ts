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

  constructor(private bookServicio:BookService){}

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
    this.bookServicio.obtenerLibrosDisponibles().subscribe(dato => {
      this.books = dato;
    })
  }

}
