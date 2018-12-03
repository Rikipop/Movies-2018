import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movie} from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  
  getMoviesData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/movies");
  }

  addMovie(title: string, director: string, star: string, thumbnail: string, trailerUrl: string, content: string, rating: string, like: string): Observable<any> {
    const movie: Movie = {
      title: title,
      director: director,
      star: star,
      thumbnail: thumbnail,
      trailerUrl: trailerUrl,
      content: content,
      rating: rating,
      like: like
    };

    return this.http.post("http://localhost:8081/api/movies",movie,{responseType: 'text'});
  }

  deleteMovie(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/movies/"+id);
  }

  getMovie(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/movies/"+id);
  }

  updateMovie(id: String, title: string, director: string, star: string, thumbnail: string, trailerUrl: string, content: string, rating: string, like: string): Observable<any> {
    const movie: Movie = {
      title: title,
      director: director,
      star: star,
      thumbnail: thumbnail,
      trailerUrl: trailerUrl,
      content: content,
      rating: rating,
      like: like
    };
  return this.http.put("http://localhost:8081/api/movies/"+id, movie);
  }
}