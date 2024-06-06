import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ReviewService } from './../review.service';



@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{

  UserDataString = localStorage.getItem("USER_DATA");
  userData : any;
  id : any;

  reviews:Review[];

  review: Review ={
    id: 1,
    bookId: 1,
    rating: 0,
    comment: '',
    authorId: 1
  }

  constructor(private route: ActivatedRoute, private UserService:UserService, private router: Router, private reviewService:ReviewService) { }

  
  ngOnInit(): void {
    if(this.UserDataString){
      this.userData = JSON.parse(this.UserDataString);
      this.review.authorId = this.userData.id;
    }
    this.route.paramMap.subscribe(params => {
      const bookIdParam = params.get('id');
      if (bookIdParam) {
        this.review.bookId = +bookIdParam; 
      } else {
        console.error('No book ID found in route parameters');
      }
    });
  }

  registrarReview(): void {
    if (this.review.rating && this.review.comment) {
      this.reviewService.postReview(this.review).subscribe({
        next: (response) => {
          console.log('Reseña registrado con éxito:', response);
          this.router.navigate(['/lista-books']);
        },
        error: (error) => {
          console.error('Error registrando el reseña:', error);
        }
      });
    } else {
      console.error('Todos los campos deben ser completados.');
    }
  }

  

}
