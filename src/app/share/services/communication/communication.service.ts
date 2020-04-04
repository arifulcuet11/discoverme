import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public showTopnavigationBar = new EventEmitter();
  // public reloadBenefitItems = new EventEmitter();
  constructor() { }
}
