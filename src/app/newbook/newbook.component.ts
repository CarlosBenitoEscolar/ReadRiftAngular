import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Book } from './../book';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit{
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
    ownerId: 1
  };

  constructor(private bookService:BookService, private UserService:UserService, private router: Router){}

  ngOnInit(): void {
    if(this.UserDataString){
      this.userData = JSON.parse(this.UserDataString);
      this.book.ownerId = this.userData.id;
    }
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
