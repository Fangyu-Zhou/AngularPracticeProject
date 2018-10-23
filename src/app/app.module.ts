import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//root module to import libraries
//first file to look into when app is not working

import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
