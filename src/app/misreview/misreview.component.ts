import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { ReviewService } from './../review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-misreview',
  templateUrl: './misreview.component.html',
  styleUrls: ['./misreview.component.css']
})
export class MisreviewComponent implements OnInit {

  UserDataString = localStorage.getItem("USER_DATA");
  userData: any;
  authorId: number;
  reviews: Review[] = [];
  reviewToEdit: Review | null = null;

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit(): void {
    if (this.UserDataString) {
      this.userData = JSON.parse(this.UserDataString);
      this.authorId = this.userData.id;
      this.getReviewsByAuthorId(this.authorId);
    }
  }

  getReviewsByAuthorId(authorId: number): void {
    this.reviewService.getAllReviewsByAuthor(authorId).subscribe({
      next: (response) => {
        this.reviews = response;
        console.log('Reseñas del autor:', this.reviews);
      },
      error: (error) => {
        console.error('Error al obtener las reseñas:', error);
      }
    });
  }

  deleteReview(id: number): void {
    this.reviewService.deleteReview(id).subscribe({
      next: () => {
        this.reviews = this.reviews.filter(review => review.id !== id);
        console.log('Reseña eliminada con éxito.');
      },
      error: (error) => {
        console.error('Error al eliminar la reseña:', error);
      }
    });
  }

  editReview(review: Review): void {
    this.reviewToEdit = { ...review };
  }

  updateReview(): void {
    if (this.reviewToEdit && this.reviewToEdit.id !== undefined) {
      console.log('Datos para actualizar:', this.reviewToEdit);  
      this.reviewService.updateReview(this.reviewToEdit.id, this.reviewToEdit).subscribe({
        next: (response) => {
          this.reviews = this.reviews.map(review => review.id === response.id ? response : review);
          this.reviewToEdit = null;
          console.log('Reseña actualizada con éxito:', response);
        },
        error: (error) => {
          console.error('Error actualizando la reseña:', error);
        }
      });
    }
  }
  

  cancelEdit(): void {
    this.reviewToEdit = null;
  }
}
