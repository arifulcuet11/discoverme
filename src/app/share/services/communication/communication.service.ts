import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public showTopnavigationBar = new EventEmitter();
  public loginLogoutInfo = new EventEmitter();
  public languageInfo = new EventEmitter();
  public itemListPass = new EventEmitter();
  constructor() { }
}
