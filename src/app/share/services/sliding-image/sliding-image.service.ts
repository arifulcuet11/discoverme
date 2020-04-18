import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlidingImageService {

  routePrefix = '/api/MobileCoverImage';
  constructor(private http: HttpClient) { }

  signUp(user: any): Observable<any> {
    return this.http.post(this.routePrefix + '/signup/', user);
  }

  gets(): Observable<any> {
    return this.http.get(this.routePrefix + '/all');
  }

  add(data): Observable<any> {
    return this.http.post(this.routePrefix + '/add', data);
  }
  checkToken(): Observable<any> {
    return this.http.get(this.routePrefix + '/token');
  }

}
