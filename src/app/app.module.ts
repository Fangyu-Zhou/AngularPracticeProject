import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//root module to import libraries
//first file to look into when app is not working

import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { MovieListComponent } from './movies/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
