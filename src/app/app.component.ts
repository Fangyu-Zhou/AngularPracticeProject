import { Component } from '@angular/core';

//decorators, make ts class an angular component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//ts class
export class AppComponent {
  title = 'helloAngular';
}
