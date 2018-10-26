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
  movie: number = 0;
  movieById: Movie = new Movie;

  constructor(private movieService: MovieService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        //use + to shortcut transfer string to number 
        this.movie = +params.get("id");
        if (this.movie > 0) {
          console.log(this.movie);
          this.getMovieById(this.movie);
        }
        
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

}
