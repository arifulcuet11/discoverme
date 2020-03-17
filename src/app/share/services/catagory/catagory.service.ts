import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {

  routePrefix = '/api/GlobalEnum';
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any>{
    return this.http.get(this.routePrefix + '/get/'+ id);
  }

  gets(): Observable<any>{
    return this.http.get(this.routePrefix + '/catagory');
  }

  add(data): Observable<any>{
    return this.http.post(this.routePrefix + '/add', data);
  }

  edit(id: number, data): Observable<any>{
    return this.http.put(this.routePrefix + '/edit/'+ id, data);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.routePrefix + '/delete/' + id);
  }

}
