import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ExchangeService } from '../exchange.service';
import { Exchange, ExchangeStatus } from '../exchange';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  book: Book | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookService, private exchangeService: ExchangeService) { }

  ngOnInit(): void {
    const bookId = +this.route.snapshot.paramMap.get('id')!;
    this.getBookDetails(bookId);
  }

  getBookDetails(id: number): void {
    this.bookService.getBookById(id).subscribe({
      next: (book) => {
        this.book = book;
      },
      error: (error) => {
        console.error('Error al obtener los detalles del libro:', error);
      }
    });
  }
  reservarLibro(): void {
    const userDataString = localStorage.getItem("USER_DATA");
    if (userDataString && this.book) {
      const userData = JSON.parse(userDataString);
      const exchangeRequest: Exchange = {
        bookId: this.book.id,
        borrowerId: userData.id,
        donorId: this.book.ownerId,
        status: ExchangeStatus.PENDING,
        requestDate: new Date()
      };

      this.exchangeService.registrarExchange(exchangeRequest).subscribe({
        next: (response) => {
          console.log('Reserva realizada con éxito:', response);
        },
        error: (error) => {
          console.error('Error al reservar el libro:', error);
        }
      });
    } else {
      console.error('Usuario no autenticado o detalles del libro no disponibles');
    }
  }
}

