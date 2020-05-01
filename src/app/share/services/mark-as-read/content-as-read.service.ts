import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentAsReadService {

  routePrefix = '/api/MarkAsRead';
  constructor(private http: HttpClient) { }

  addMarkAsRead(model: any): Observable<any> {
    return this.http.post(this.routePrefix + '/add/', model);
  }
}
