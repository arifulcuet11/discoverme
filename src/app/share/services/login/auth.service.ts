import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  routePrefix = '/api/Account';
  constructor(private http: HttpClient) { }

  signUp(user: any): Observable<any> {
    return this.http.post(this.routePrefix + '/signup/', user);
  }

  login(loginModel: any): Observable<any> {
    return this.http.post(this.routePrefix + '/login', loginModel);
  }

  add(data): Observable<any> {
    return this.http.post(this.routePrefix + '/add', data);
  }
  checkToken(): Observable<any> {
    return this.http.get(this.routePrefix + '/token');
  }

}
