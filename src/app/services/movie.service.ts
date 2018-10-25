import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/Movie';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }

  getAllMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies');
  }

  getMovieById(id: number): Observable<Movie> {
    return this.apiService.getById('/movies/', id);
  }

  getAllMoviesByGenreId(genreId: number): Observable<Movie[]> {
    return this.apiService.getAll('/movies/genre/' + genreId);
  }

  getNowPlayingMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/nowplaying');
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/upcoming');
  }

  getMovieDetailsFromTmdb() {

  }

  getPopularMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/popular');
  }
}
