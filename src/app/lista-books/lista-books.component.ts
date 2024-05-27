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

  UserDataString = localStorage.getItem("USER_DATA");
  userData : any;

  books:Book[];

  book: Book = {
    id: 20,
    author: 'Gabriel García Márquez',
    title: 'Cien años de soledad',
    description: 'nueva',
    condition: 'New',
    available: true,
    isbn: '3',
    url_image: 'https://example.com/cien-anos.jpg',
    owner_id: 1,  // Supongamos que 1 es el ID de un usuario registrado
  };

  constructor(private bookService:BookService, private UserService:UserService){}

  ngOnInit(): void {
   // this.obtenerBooks();
    this.obtenerBooksDisponibles();
    if(this.UserDataString){
      this.userData = JSON.parse(this.UserDataString);
    }
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

  loadUserByEmail(){
    console.log (this.userData.id!)
   /* this.UserService.getUserByEmail("john@example.com").subscribe({
      next: (userData) => {
        localStorage.setItem('USER_DATA', JSON.stringify(userData));
        console.log(userData);
      },
      error: (errorData) => {
      },
      complete: () => {
        console.info("User Data ok");
      }
    })*/
  }

  registrarBook(): void {
    this.book.owner_id = this.userData.id
    this.bookService.registrarBook(this.book).subscribe({
      next: (response) => {
        console.log('Libro registrado con éxito:', response);
        // Implementa aquí las acciones post-registro, como redirecciones o mensajes
      },
      error: (error) => {
        console.error('Error registrando el libro:', error);
      }
    });
  }

}
