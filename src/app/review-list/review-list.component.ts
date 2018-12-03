import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../services/review.service';
import { Observable } from 'rxjs';
import {Review} from '../models/review.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews : any = [];

  constructor(private service:ReviewService) { }

  ngOnInit() {
    this.service.getReviewsData().subscribe(data => {
      this.reviews = data;
    });
  }

  onReviewDelete(id:String){
    console.log("Delete called "+ id);
    this.service.deleteReview(id).subscribe(() =>
    {
      this.ngOnInit();
    })
  }

}
