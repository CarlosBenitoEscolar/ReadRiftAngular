import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseURL = 'http://localhost:8080/api/book-reviews';

  constructor(private httpClient: HttpClient) {}

  getAllReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}`);  
  }

  getAllReviewsByBookId(bookId: number): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}/book/${bookId}`);
  }
  
  postReview(review: Review): Observable<Review> {
    return this.httpClient.post<Review>(`${this.baseURL}`, review);
  }

  getAllReviewsByAuthor(authorId: number): Observable<Review[]>{
    return this.httpClient.get<Review[]>(`${this.baseURL}/author/${authorId}`);
  }

  deleteReview(id:number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/${id}`);

  }

  updateReview(id: number, review: Review): Observable<Review> {
    return this.httpClient.put<Review>(`${this.baseURL}/${id}`, review);
  }

}
