import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import { ReviewService } from '../services/review.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
  review : any = []
  title : String; 
  content : String;

  constructor(private router:Router, private route: ActivatedRoute, private service:ReviewService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getReview(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.review = data;
      console.log(this.review);
      this.title = this.review.title;
      console.log("message" +this.title);
      this.content = this.review.content;
      console.log("message" +this.content);

    });
  }

  onEditReview(form: NgForm) {
    this.service.updateReview(this.review._id, form.value.title, form.value.content).subscribe(() =>
    {
      this.router.navigate(['/review-list']);
    });
  }

}
