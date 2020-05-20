import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemService {
  routePrefix = '/api/Mem';
  constructor(private http: HttpClient) { }

  getByMemTypeId(id: number): Observable<any> {
    return this.http.get(this.routePrefix + '/memType?memTypeId=' + id);
  }
  search(text: string, index: number, size: number, memTypeId: number): Observable<any>{
    return this.http.get(this.routePrefix + '/search?text=' + text +
    '&index=' + index + '&size=' + size + '&memTypeId=' + memTypeId);
  }
}
