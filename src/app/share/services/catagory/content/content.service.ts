import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  routePrefix = '/api/Content';
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any> {
    return this.http.get(this.routePrefix + '/get/' + id);
  }
  getByCatagoryId(id: number): Observable<any> {
    return this.http.get(this.routePrefix + '/sub-catagory/' + id);
  }
  Search(text: string, index: number, size: number, contentTypeId: number): Observable<any> {
    return this.http.get(this.routePrefix + '/searchFromAPP?text=' + text + '&index=' + index
     + '&size=' + size + '&contentTypeId=' + contentTypeId);
  }
  getRecent(index: number, size: number): Observable<any> {
    return this.http.get(this.routePrefix + '/recent/mobile?&index=' + index
     + '&size=' + size);
  }
  getTop5(): Observable<any> {
    return this.http.get(this.routePrefix + '/deshboard/mobile/');
  }
  add(data): Observable<any> {
    return this.http.post(this.routePrefix + '/add', data);
  }

  edit(id: number, data): Observable<any> {
    return this.http.put(this.routePrefix + '/edit/' + id, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.routePrefix + '/delete/' + id);
  }
  MainSearch(text: string, index: number, size: number, catagoryIds: string, optionId: number): Observable<any> {
    return this.http.get(this.routePrefix + '/search/mobile?text=' + text + '&index=' + index
     + '&size=' + size + '&catagoryIds=' + catagoryIds + '&searchOption=' + optionId);
  }
}
