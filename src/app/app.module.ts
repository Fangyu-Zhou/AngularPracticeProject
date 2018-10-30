import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
//root module to import libraries
//first file to look into when app is not working

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { MovieListComponent } from './movies/movie-list.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movies/movie.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/layout/header.component';
import { FooterComponent } from './shared/layout/footer.component';
import { AboutUsComponent } from './shared/components/about-us.component';
import { ContactUsComponent } from './shared/components/contact-us.component';
import { NotFoundComponent } from './shared/components/not-found.component';
import { MovieFormComponent } from './movies/movie-form.component';
import { MyMoviesComponent } from './movies/my-movies.component';
import { CreateAccountComponent } from './account/create-account.component';
import { CreateMovieComponent } from './admin/create-movie.component';
// import { LoginComponent } from './login/login.component'

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    MovieListComponent,
    HomeComponent,
    MovieComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    MovieFormComponent,
    MyMoviesComponent,
    CreateAccountComponent,
    CreateMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost']
      }
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'movies', component: MovieListComponent },
      { path: 'movie/:id', component: MovieComponent },
      { path: 'genre/:id', component: MovieListComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'contactUs', component: ContactUsComponent },
      { path: 'account/create', component: CreateAccountComponent },
      { path: 'admin/movie/new', component: CreateMovieComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
