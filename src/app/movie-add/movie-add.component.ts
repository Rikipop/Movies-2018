import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MovieService} from '../services/movie.service';
import { RouterModule, Routes, Router } from '@angular/router';

export interface Rating {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css'],
})
export class MovieAddComponent implements OnInit {
  selectedRating: string;
  like: string = '0';
  constructor(private router: Router, private service: MovieService) { }

  ngOnInit() { }

  onAddMovie(form: NgForm) {
    this.service.addMovie(form.value.title,
       form.value.director, form.value.star,
        form.value.thumbnail, form.value.trailerUrl,
         form.value.content, form.value.rating,
      this.like).subscribe();

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
