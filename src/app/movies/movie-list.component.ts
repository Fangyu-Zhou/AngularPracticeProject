import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../shared/models/Movie';
import { pipe } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.movieById = new Movie;
    this.todayMovieId = 1;
    this.genreId = 1;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        //use + to shortcut transfer string to number 
        this.genreId = +params.get("id");
        if (this.genreId > 0) {
          console.log(this.genreId);
          this.getAllMoviesByGenreId(this.genreId);
        } else {
          this.getAllMovies();
        }
        
      }
    )  
    // this.getMovieById(this.todayMovieId);
    ;
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
