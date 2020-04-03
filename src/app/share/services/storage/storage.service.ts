import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public TOKEN_KEY = 'token';
  public IsLogin = 'isLogin';
  public ExpireDate = 'expireDate';
  private obj = {};
  constructor() { }

  public getByRoot() {
    const data = localStorage.getItem(this.TOKEN_KEY);
    return data;
  }
  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    const data = localStorage.getItem(key);
    return data;
  }

}
