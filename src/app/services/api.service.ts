import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //dependency injection
  constructor(protected http: HttpClient) {

  }

  getAll(url: String): Observable<any[]> {
    return this.http.get(`${environment.apiurl}${url}`)
      .pipe(
        map(response =>
          response as any[]
        )
        //we can do other operators here
        //, map(), 
      );
  }

  getById(url: String, id: number): Observable<any> {
    return this.http.get(`${environment.apiurl}${url}${id}`)
      .pipe(
        map(response => response as any)
      );
  }

  // ? means optional
  create(url: String, resource: Object = {}, options?) {
    return this.http.post(`${environment.apiurl}${url}`, JSON.stringify(resource), options)
      .pipe(
        map(response => response as any)
      );
  }
}
