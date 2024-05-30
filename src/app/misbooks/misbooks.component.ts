import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from './../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-misbooks',
  templateUrl: './misbooks.component.html',
  styleUrls: ['./misbooks.component.css']
})
export class MisbooksComponent implements OnInit {

  UserDataString = localStorage.getItem("USER_DATA");
  userData: any;
  ownerId: number;
  books: Book[] = [];
  bookToEdit: Book | null = null;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    if (this.UserDataString) {
      this.userData = JSON.parse(this.UserDataString);
      this.ownerId = this.userData.id;
      this.getBooksByOwner(this.ownerId);
    }
  }

  getBooksByOwner(ownerId: number): void {
    this.bookService.getBooksByOwner(ownerId).subscribe({
      next: (response) => {
        this.books = response;
        console.log('Libros del propietario:', this.books);
      },
      error: (error) => {
        console.error('Error al obtener los libros:', error);
      }
    });
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        this.books = this.books.filter(book => book.id !== id);
        console.log('Libro eliminado con éxito.');
      },
      error: (error) => {
        console.error('Error al eliminar el libro:', error);
      }
    });
  }

  editBook(book: Book): void {
    this.bookToEdit = { ...book };
  }

  updateBook(): void {
    if (this.bookToEdit && this.bookToEdit.id !== undefined) {
      this.bookService.updateBook(this.bookToEdit.id, this.bookToEdit).subscribe({
        next: (response) => {
          this.books = this.books.map(book => book.id === response.id ? response : book);
          this.bookToEdit = null;
          console.log('Libro actualizado con éxito:', response);
        },
        error: (error) => {
          console.error('Error actualizando el libro:', error);
        }
      });
    }
  }

  cancelEdit(): void {
    this.bookToEdit = null;
  }
}
