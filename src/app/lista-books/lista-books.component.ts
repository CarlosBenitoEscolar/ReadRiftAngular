import { Router } from '@angular/router';
import { UserService } from '../user.service';
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

  constructor(private bookService:BookService, private router: Router, private exchangeService: ExchangeService){}

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

  reservarLibro(bookId: number, owner_id: number): void {
    const userDataString = localStorage.getItem("USER_DATA");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const exchangeRequest: Exchange = {
        bookId: bookId,
        donorId: owner_id,
        borrowerId: userData.id,
        status: ExchangeStatus.PENDING,  // Asegúrate de usar el tipo correcto
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
      console.error('Usuario no autenticado');
    }
  }

}
