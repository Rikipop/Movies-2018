import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Review} from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviewsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/reviews");
  }

  addReview(title: string, content: string): Observable<any> {
    const review: Review = {title: title, content: content};
    return this.http.post("http://localhost:8081/api/reviews",review,{responseType: 'text'});
  }

  deleteReview(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/reviews/"+id);
  }

  getReview(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/reviews/"+id);
  }

  updateReview(id:String, title: string, content: string): Observable<any> {
    const review: Review = {title: title, content: content};
  return this.http.put("http://localhost:8081/api/reviews/"+id, review);
  }

}
