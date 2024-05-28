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

  UserDataString = localStorage.getItem("USER_DATA");
  userData : any;

  books:Book[];

  book: Book = {
    id: 1,
    author: '',
    title: '',
    condition: '',
    description: '',
    isbn: '',
    url_image: '',
    available: true,
    owner_id: 1
  };

  constructor(private bookService:BookService, private UserService:UserService, private router: Router){}

  ngOnInit(): void {
   // this.obtenerBooks();
    this.obtenerBooksDisponibles();
    if(this.UserDataString){
      this.userData = JSON.parse(this.UserDataString);
      this.book.owner_id = this.userData.id;
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
    if (this.book.author && this.book.title && this.book.isbn && this.book.url_image && this.book.condition) {
      this.bookService.registrarBook(this.book).subscribe({
        next: (response) => {
          console.log('Libro registrado con éxito:', response);
          this.router.navigate(['/lista-books']);
        },
        error: (error) => {
          console.error('Error registrando el libro:', error);
        }
      });
    } else {
      console.error('Todos los campos deben ser completados.');
    }
  }
}

