import { Router } from '@angular/router';
import { Book } from './../book';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../exchange.service';
import { Exchange, ExchangeStatus } from '../exchange';



@Component({
  selector: 'app-lista-books',
  templateUrl: './lista-books.component.html',
  styleUrls: ['./lista-books.component.css']
})
export class ListaBooksComponent implements OnInit{

  books:Book[];
  searchTitle: string = '';
  searchAuthor: string = '';
  searchIsbn: string = '';

  constructor(private bookService:BookService, private router: Router, private exchangeService: ExchangeService){}

  ngOnInit(): void {
    this.obtenerBooksDisponibles();
  }

  private  obtenerBooksDisponibles(){
    this.bookService.obtenerLibrosDisponibles().subscribe(dato => {
      this.books = dato;
    })
  }

  comentario(bookId: number){
    this.router.navigate(['/reviews', bookId]);
  }

  reservarLibro(bookId: number, owner_id: number): void {
    const userDataString = localStorage.getItem("USER_DATA");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const exchangeRequest: Exchange = {
        bookId: bookId,
        donorId: owner_id,
        borrowerId: userData.id,
        status: ExchangeStatus.PENDING, 
        requestDate: new Date()
      };

      this.exchangeService.registrarExchange(exchangeRequest).subscribe({
        next: (response) => {
          console.log('Reserva realizada con éxito:', response);
          this.marcarLibroComoSolicitado(bookId);
        },
        error: (error) => {
          console.error('Error al reservar el libro:', error);
        }
      });
    } else {
      console.error('Usuario no autenticado');
    }
  }
  marcarLibroComoSolicitado(bookId: number): void {
    const book = this.books.find(b => b.id === bookId);
    if (book) {
      book.requested = true;
    }
  }
  buscarLibros(): void {
    this.bookService.buscarLibros(this.searchTitle, this.searchAuthor, this.searchIsbn).subscribe(dato => {
      this.books = dato;
    });
  }
}
