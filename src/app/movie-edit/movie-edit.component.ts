import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {MovieService} from '../services/movie.service';
import { NgForm } from "@angular/forms";

export interface Rating {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie : any = [];
  title : string;
  director: string;
  star: string;
  thumbnail: string;
  trailerUrl: string;
  content: string;
  selectedRating: string;
  like: string

  constructor(private router:Router, private route: ActivatedRoute, private service:MovieService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getMovie(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.movie = data;
      console.log(this.movie);
      this.title = this.movie.title;
      console.log("message " +this.title);
      this.director = this.movie.director;
      console.log("message " +this.director);
      this.star = this.movie.star;
      console.log("message " +this.star);
      this.thumbnail = this.movie.thumbnail;
      console.log("message " +this.thumbnail);
      this.trailerUrl = this.movie.trailerUrl;
      console.log("message " +this.trailerUrl);
      this.content = this.movie.content;
      console.log("message " +this.content);
      this.selectedRating = this.movie.rating;
      console.log("message " +this.selectedRating);
      this.like = this.movie.like;
      console.log("message " +this.like);
    });
  }

  onEditMovie(form: NgForm) {
    this.service.updateMovie(this.movie._id, form.value.title, form.value.director, form.value.star, form.value.thumbnail, form.value.trailerUrl, form.value.content, form.value.rating, this.movie.like).subscribe();
    
    console.log(form.value);
    form.resetForm();

    this.router.navigate(['/movie-list']);
  }

  ratings: Rating[] = [
    {value: '1', viewValue: '*'},
    {value: '2', viewValue: '**'},
    {value: '3', viewValue: '***'},
    {value: '4', viewValue: '****'},
    {value: '5', viewValue: '*****'}
  ];
}
