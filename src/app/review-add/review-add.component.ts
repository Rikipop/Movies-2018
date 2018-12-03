import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {ReviewService} from '../services/review.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent implements OnInit {

  constructor(private router:Router, private service:ReviewService) { }

  ngOnInit() {}

  onAddReview(form: NgForm)
  {
    this.service.addReview(form.value.title, form.value.content).subscribe()

    console.log(form.value);
    form.resetForm();

    this.router.navigate(['/review-list']);
  }

}
