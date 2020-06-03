import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  routePrefix = '/api/Notification';
  constructor(private http: HttpClient) { }

  add(model: any): Observable<any> {
    return this.http.post(this.routePrefix + '/add/', model);
  }
  general(index: number, size: number): Observable<any> {
    return this.http.get(this.routePrefix + '/general?index=' + index + '&size=' + size);
  }
  user(): Observable<any> {
    return this.http.get(this.routePrefix + '/user');
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.routePrefix + '/delete/' + id);
  }
}
