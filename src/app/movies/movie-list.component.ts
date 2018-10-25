import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../shared/models/Movie';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];
  todayMovieId: number;
  movieById: Movie;
  genreId: number;
  moviesByGenreId: Movie[];

  constructor(private movieService: MovieService) {
    this.movieById = new Movie;
    this.todayMovieId = 1;
    this.genreId = 1;
  }

  ngOnInit() {
    this.getAllMovies();
    this.getMovieById(this.todayMovieId);
    this.getAllMoviesByGenreId(this.genreId);
  }

  getAllMovies() {
    this.movieService.getAllMovies()
      .subscribe(
        m => {
          this.movies = m;
          console.log(this.movies);
        }
      )
  }

  getMovieById(id: number) {
    this.movieService.getMovieById(id)
      .subscribe(
        mById => {
          this.movieById = mById;
          console.log(this.movieById);
        }
      )
  }

  getAllMoviesByGenreId(genreId: number) {
    this.movieService.getAllMoviesByGenreId(genreId)
      .subscribe(
        mByGenreID => {
          this.moviesByGenreId = mByGenreID;
          // console.log(this.moviesByGenreId); 
        }
      )
  }

}
