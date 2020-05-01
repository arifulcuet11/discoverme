import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentLikeService {

  routePrefix = '/api/ContentLike';
  constructor(private http: HttpClient) { }

  addContentLike(model: any): Observable<any> {
    return this.http.post(this.routePrefix + '/add/', model);
  }
}
