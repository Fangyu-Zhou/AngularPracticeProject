import { Injectable } from '@angular/core';
import { UserAccount } from '../shared/models/userAccount';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserLogin } from '../shared/models/userLogin';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: UserAccount;

  constructor(private apiService: ApiService,
    private jwtService: JwtService,
    private jwtHelperService: JwtHelperService) { }

  login(userLogin: UserLogin): Observable<boolean> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.apiService.create('/token', userLogin, options)
      .pipe(
        map(response => {
          if (response) {
            this.jwtService.saveToken(response);
            return true;
          } else {
            return false;
          }
        })
      )
  }

  logout() {
    this.jwtService.destroyToken();
  }

  decodeToken(): UserAccount {
    const token = this.jwtService.getToken();
    if (!token) {
      return null;
    }

    const decodedToken = this.jwtHelperService.decodeToken(token);
    this.user = decodedToken;
    return this.user;
  }

  get getCurrentUserFullName(): string {
    if (this.decodeToken() != null) {
      const decodedResponse = this.decodeToken();
      const fullName = decodedResponse.firstName + " " + decodedResponse.lastName;
      return fullName;
    }
  }

  get isAdmin() {
    if (this.decodeToken() != null) {
      const role = this.decodeToken().role;
      if(role) {
        return role.includes('Admin');
      }
    }
  }
}
