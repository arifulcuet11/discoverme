import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  routePrefix = '/api/Comment';
  constructor(private http: HttpClient) { }

  add(model: any): Observable<any> {
    return this.http.post(this.routePrefix + '/add/', model);
  }
  getAll(id: number): Observable<any> {
    return this.http.get(this.routePrefix + '/all/' + id);
  }
  update(id: number, model: any): Observable<any> {
    return this.http.post(this.routePrefix + '/update/' + id, model);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.routePrefix + '/delete/' + id);
  }
}
