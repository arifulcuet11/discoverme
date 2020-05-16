import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookMarkService {
  routePrefix = '/api/FavoriteContent';
  constructor(private http: HttpClient) { }

  add(model: any): Observable<any> {
    return this.http.post(this.routePrefix + '/add/', model);
  }
  gets(index: number, size: number): Observable<any> {
    return this.http.get(this.routePrefix + '/gets?index=' + index + '&size=' + size);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.routePrefix + '/delete/' + id);
  }
}

