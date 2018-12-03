import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies : any = [];

  constructor(private service:MovieService) { }

  ngOnInit() {
    this.service.getMoviesData().subscribe(data => {
      this.movies = data;
    });
  }

  onMovieDelete(id:String){
    console.log("Delete called "+ id);
    this.service.deleteMovie(id).subscribe(() =>
    {
      this.ngOnInit();
    })
  }

  onMovieLike(movie:{_id:string, title: string, director: string, star: string, thumbnail: string, trailerUrl: string, content: string, rating: string, like:string}){
    console.log("Like called "+ movie.like);
    movie.like = String(Number(movie.like) + 1);    
    this.service.updateMovie(movie._id, movie.title, movie.director, movie.star, movie.thumbnail, movie.trailerUrl, movie.content, movie.rating, movie.like).subscribe();
  }
}
