import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  uri: string = 'http://localhost:9000';
  jwt: string;
  username: string;
  roles: Array<string>;

  constructor(private http: HttpClient) {}

  login(data) {
    return this.http.post(this.uri + '/login', data, { observe: 'response' });
  }
  register(data) {
    return this.http.post(this.uri + '/register', data, { observe: 'response' });
  }
  ConfirmRegister(token) {
    return this.http.get(this.uri + '/authentification-service/confirm-account?token=' + token, {
      observe: 'response'
    });
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    console.log('saving token ' + this.jwt);

    this.parseJWT();
  }
  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }

  parseJWT() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
  }
  isAdmin() {
    return this.roles.indexOf('ADMIN') >= 0;
  }
  isUser() {
    return this.roles.indexOf('USER') >= 0;
  }
  isBO() {
    return this.roles.indexOf('BO') >= 0;
  }
  isAuthenticated() {
    return this.roles && (this.isAdmin() || this.isUser() || this.isBO());
  }
  logOut() {
    localStorage.removeItem('token');
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
}
