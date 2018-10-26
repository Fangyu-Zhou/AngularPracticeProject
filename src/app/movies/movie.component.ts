import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../shared/models/Movie';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieId: number = 0;
  movie: Movie = new Movie;

  constructor(private movieService: MovieService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        //use + to shortcut transfer string to number 
        this.movieId = +params.get("id");
        if (this.movieId > 0) {
          console.log(this.movieId);
          this.getMovieById(this.movieId);
        }
        
      }
    )
  }

  getMovieById(id: number) {
    this.movieService.getMovieById(id)
      .subscribe(
        mById => {
          this.movie = mById;
          console.log(this.movie);
        }
      )
  }

}
